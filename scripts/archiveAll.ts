import dayjs from 'dayjs'
import archiveByDate from '../actions/archiveByDate'
import Pool from '../helper/pool'

const pool = new Pool(8)

const startDate = dayjs('20200101', 'YYYYMMDD')
const endDate = dayjs()

const diffDays = endDate.diff(startDate, 'days')

for (let i = 0; i <= diffDays; i++) {
  const dateLike = startDate.add(i, 'day')
  pool.addTask(() => archiveByDate(dateLike.format('YYYYMMDD')))
}
