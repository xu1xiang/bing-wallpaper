import request from '../helper/request'

const map = new Map<string, string>()
export const fetchListPage = async (url: string) => {
  const cache = map.get(url)
  if (cache) {
    return cache
  }
  map.clear()
  const res = await request(url)
  const text = await res.text()
  map.set(url, text)
  return text
}

export const fetchDetailPage = async (url: string) => {
  const res = await request(url)
  return await res.text()
}
