import dayjs from 'dayjs'
import { existsSync } from 'fs'
import ora from 'ora'
import { getArchiveDirByDate } from '../helper'
import { parseDetailPage } from '../helper/parser'
import { saveFile } from '../helper/saveFile'

/**
 *
 * @param dateLike like 20220418
 */
const archiveByDate = async (dateLike: string) => {
  if (dateLike.length !== 8) {
    throw new Error(
      `Invalid date: '${dateLike}', valid date should likes '20220418'`
    )
  }
  const date = dayjs(dateLike, 'YYYYMMDD')
  const archiveDir = getArchiveDirByDate(date)
  if (existsSync(archiveDir)) {
    return
  }
  const spinner = ora(`Fetching data of ${date.format('YYYY/MM/DD')} \n`)
  try {
    spinner.start()
    const res = await parseDetailPage(date)
    await saveFile({ metadata: res, date })
    spinner.succeed(`Archive successed of ${date.format('YYYY/MM/DD')}`)
  } catch (err) {
    console.error(JSON.stringify(err))
    spinner.fail(`Archive failed of images of ${date.format('YYYY/MM/DD')}`)
  }
}

export default archiveByDate
