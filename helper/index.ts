import { Dayjs } from 'dayjs'
import path from 'path'
import { dir } from '../config'

export const getArchiveDirByDate = (date: Dayjs) => {
  return path.resolve(dir, date.format('YYYY/MM/YYYY-MM-DD'))
}
