import dayjs from 'dayjs'
import archiveByDate from '../actions/archiveByDate'

archiveByDate(dayjs().format('YYYYMMDD'))
