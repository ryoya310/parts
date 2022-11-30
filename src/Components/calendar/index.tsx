import React from 'react';
import dayjs from 'dayjs'
import styles from './index.module.scss';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type Props = {
  lang?: 'ja' | 'en' // 日本語 | 英語
  no?: number // 現在月から指定
  datas?: any // カレンダーのデータ
  onDayClick?(dt: Date): void // 日付イベント
}
export default function Calendar(props: Props) {

  let { lang, no, datas, onDayClick } = props

  // 曜日表記
  let weeks: any = [];
  if (lang === undefined) { lang = 'en' }
  if (lang === 'ja') {
    weeks = ['日','月','火','水','木','金','土'];
  } else if (lang === 'en') {
    // weeks = ['sun','mon','tue','wed','thu','fri','sat'];
    weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  }

  // 表記月
  let currentDate = new Date()
  if (no !== undefined) {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + no, 1)
  }
  const toDay = new Date()
  const [value, onChange] = React.useState(currentDate)

  // 日付表記フォーマット
  const dateFormat = (date: Date | string, format?: string) => {
    format = (format === undefined) ? 'YYYY/MM/DD' : format
    return dayjs(date).format(format)
  }

  // ナビゲーションイベント
  const onPrev = () => { onChange(new Date(value.getFullYear(), value.getMonth() - 1, 1)); }
  const onCurrent = () => { onChange(new Date()) }
  const onNext = () => { onChange(new Date(value.getFullYear(), value.getMonth() + 1, 1)); }

  // 曜日
  let Weeks = [];
  for (let w=0;w<weeks.length;w++) {
    let cls = [styles.weekday]
    if (w === 0) { cls.push(styles.sun) }
    if (w === 6) { cls.push(styles.sat) }
    Weeks.push(
      <div key={`w${w}`} className={cls.join(' ')}>{weeks[w]}</div>
    )
  }

  // 月の始～至
  const stDate = new Date(value.getFullYear(), value.getMonth(), 1)
  const st = (stDate.getDay() >= 6) ? 1 : stDate.getDay() * -1
  const enDate = new Date(value.getFullYear(), value.getMonth() + 1, 0)
  const en = (enDate.getDay() === 6) ? enDate.getDate() - 0 : enDate.getDate() + 6 - enDate.getDay()

  // 月の日
  let Days = [];
  for (let d=st;d<en;d++) {

    let cls = [styles.day]
    let add = ''
    const cuDate = new Date(value.getFullYear(), value.getMonth(), d)
    const dtJSON: any = (datas[dateFormat(cuDate, 'YYYYMMDD')]) ? datas[dateFormat(cuDate, 'YYYYMMDD')] : ''
    // db
    if (datas[dateFormat(cuDate, 'YYYYMMDD')]) {
      // 休日
      if (dtJSON.status === 'hol') {
        cls.push(styles.hol)
      }
      // メモ
      if (dtJSON.text) {
        add = dtJSON.text
      }
    }
    // 今日
    if (`${dateFormat(cuDate, 'YYYYMMDD')}` === `${dateFormat(toDay, 'YYYYMMDD')}`) { cls.push(styles.today) }
    // 土曜
    if (cuDate.getDay() === 5) { cls.push(styles.sat) }
    // 日曜
    if (cuDate.getDay() === 6) { cls.push(styles.sun) }
    // 選択月以外
    if (cuDate.getMonth() !== value.getMonth()) { cls.push(styles.oth) }

    Days.push(
      <div key={`d${d}`} className={cls.join(' ')}>
        <button
          type='button'
          onClick={
            () => {
              console.log(cuDate)
              if (onDayClick) {
                onDayClick(cuDate)
              }
            }
          }
        >
          <span>
            {cuDate.getDate()}
          </span>
          <div>
            {add}
          </div>
        </button>
      </div>
    )
  }

  return <>
    <div className={styles.calendar}>

      <div className={styles.navigation}>
        <div className={styles.prev}>
          <button type='button' onClick={onPrev}>
            <ArrowBackIosNewIcon />
          </button>
        </div>
        <div className={styles.current}>
          <button type='button' onClick={onCurrent}>
            {dateFormat(value, 'YYYY/MM')}
          </button>
        </div>
        <div className={styles.next}>
          <button type='button' onClick={onNext}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>

      <div className={styles.views}>
        <div className={styles.weekdays}>
          {Weeks}
        </div>
        <div className={styles.days}>
          {Days}
        </div>
      </div>
    </div>
  </>
}