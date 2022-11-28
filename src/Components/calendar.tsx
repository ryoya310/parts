import React from 'react';
import dayjs, { Dayjs } from 'dayjs'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './index.module.scss';

export default function CalendarX() {

  const dateFormat = (date: string, format?: string) => {
    format = (format === undefined) ? 'YYYY/MM/DD' : format
    return dayjs(date).format(format)
  }

  const [value, onChange] = React.useState(new Date())

  const date_json = {
    '20221121': '123'
  }
  const DayContents = (props: any) => {
    const { date, view } = props;
    const dt = dateFormat(date, 'YYYYMMDD')
    const dt_text: string = (date_json[dt]) ? date_json[dt] : ''
    return <p>{dt_text}</p>
  }

  const onClickDay = (date: any) => {
    console.log(date)
  }

  return <>
    <div className={styles.calendar}>

      <Calendar
        className={styles.calendar}
        locale='ja-JP'
        calendarType='US'
        formatDay={(locale, date: any) => dateFormat(date, 'DD')}
        value={value}
        prev2Label={null}
        next2Label={null}
        onChange={onChange}
        onClickDay={onClickDay}
        tileContent={DayContents}
      />

    </div>
  </>
}