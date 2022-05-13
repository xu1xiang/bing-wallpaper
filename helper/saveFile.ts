import { Dayjs } from 'dayjs'
import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { getArchiveDirByDate } from '.'
import { Metadata } from './parser'
import request from './request'

const downloadFile = async (url: string, savePath: string) => {
  const res = await request(url)
  const ws = createWriteStream(savePath)
  res.body.pipe(ws)
}

export const saveFile = async (params: { metadata: Metadata; date: Dayjs }) => {
  const { metadata, date } = params
  const subDir = getArchiveDirByDate(date)
  if (!existsSync(subDir)) {
    mkdirSync(subDir, { recursive: true })
  }
  const {
    title,
    copyright,
    thumbnailUrl,
    originPictureUrl,
    storyContent,
    storyTitle,
    sourcePage,
    tags,
  } = metadata
  await Promise.all([
    downloadFile(thumbnailUrl, path.resolve(subDir, `${title}.jpg`)),
    downloadFile(originPictureUrl, path.resolve(subDir, `${title}_HD.jpg`)),
  ])

  writeFileSync(
    path.resolve(subDir, 'description.json'),
    JSON.stringify(
      {
        title,
        copyright,
        sourcePage,
        storyTitle,
        storyContent,
        tags,
      },
      null,
      4
    )
  )
}
