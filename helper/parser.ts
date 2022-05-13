import * as cheerio from 'cheerio'
import { Dayjs } from 'dayjs'
import { fetchDetailPage, fetchListPage } from '../api'
import { origin } from '../config'

const map = new Map<string, string[]>()
// 获取页面中所有详情页的连接
export const parseListPage = async (date: Dayjs) => {
  const slug = date.format('YYYY/MM')
  const url = `${origin}/bing/cn/${slug}`
  const cache = map.get(url)
  if (cache) {
    return cache
  }
  map.clear()
  const rawHtml = await fetchListPage(url)
  const $ = cheerio.load(rawHtml)
  const links = $('.image-list__picture-link')
    .toArray()
    .map((item) => origin + $(item).attr('href'))
  map.set(url, links)
  return links
}

export const getDetailPageUrl = async (date: Dayjs) => {
  const links = await parseListPage(date)
  return links[date.date() - 1]
}

export interface Metadata {
  title: string
  thumbnailUrl: string
  originPictureUrl: string
  copyright: string
  storyTitle: string
  storyContent: string
  sourcePage: string
  tags: string[]
}

export const parseDetailPage = async (date: Dayjs): Promise<Metadata> => {
  const url = await getDetailPageUrl(date)
  const rawHtml = await fetchDetailPage(url)
  const $ = cheerio.load(rawHtml)
  const title = $('.gallery-picture .typography-title').text()
  const thumbnailUrl = $('.gallery-picture .img-fluid').attr('src')!
  const originPictureUrl = $('#download-modal .btn-secondary').attr('href')!
  const copyright = $('.picture-desc .text-gray').text()
  const storyTitle = $('.picture-desc .typography-body-2').text()
  const storyContent = $('.picture-desc p:nth-of-type(n + 2)')
    .toArray()
    .reduce((acc, cur) => acc + $.html(cur), '')
  const tags = $('.gallery-picture .tag-list__item')
    .toArray()
    .map((item) => $(item).text())

  return {
    title: title.replace(/\//g, '\u2215'),
    thumbnailUrl,
    originPictureUrl,
    copyright,
    storyTitle,
    storyContent,
    sourcePage: url,
    tags,
  }
}
