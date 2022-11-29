import React from 'react';
import dayjs, { Dayjs } from 'dayjs'
import styles from './index.module.scss';

type Props = {
  datas?: any
}
export default function Calendar(props: Props) {

  const { datas } = props

  const dateFormat = (date: Date | string, format?: string) => {
    format = (format === undefined) ? 'YYYY/MM/DD' : format
    return dayjs(date).format(format)
  }

  const [value, onChange] = React.useState(new Date())

  const onPrev = () => { onChange(new Date(value.getFullYear(), value.getMonth() - 1, 1)); }
  const onCurrent = () => { onChange(new Date()) }
  const onNext = () => { onChange(new Date(value.getFullYear(), value.getMonth() + 1, 1)); }

  const stDate = new Date(value.getFullYear(), value.getMonth(), 1)
  const stWeek = ["日","月","火","水","木","金","土"][stDate.getDay()];
  const enDate = new Date(value.getFullYear(), value.getMonth() + 1, 0)
  const enWeek = ["日","月","火","水","木","金","土"][enDate.getDay()];

  const st = stDate.getDay() * -1;
  const en = enDate.getDate() + enDate.getDay() *  1;
  for (let d=st;d<=en;d++) {
    const cuDate = new Date(value.getFullYear(), value.getMonth(), 1)
    console.log(cuDate)
  }

  return <>
    <div className={styles.calendar}>

      <div className={styles.navigation}>
        <button type='button' className={styles.prev} onClick={onPrev}>
          ‹
        </button>
        <button type='button' className={styles.current} onClick={onCurrent}>
          {dateFormat(value, 'YYYY/MM')}
        </button>
        <button type='button' className={styles.next} onClick={onNext}>
          ›
        </button>
      </div>

      <div className={styles.views}>
        <div className={styles.weekdays}>
          <div className={`${styles.weekday} ${styles.sun}`}>日</div>
          <div className={`${styles.weekday}`}>月</div>
          <div className={`${styles.weekday}`}>火</div>
          <div className={`${styles.weekday}`}>水</div>
          <div className={`${styles.weekday}`}>木</div>
          <div className={`${styles.weekday}`}>金</div>
          <div className={`${styles.weekday} ${styles.sat}`}>土</div>
        </div>
        <div className={styles.days}>
          <button type="button" className={`${styles.day}`}>1</button>
          <button type="button" className={`${styles.day}`}>2</button>
          <button type="button" className={`${styles.day}`}>3</button>
          <button type="button" className={`${styles.day}`}>4</button>
          <button type="button" className={`${styles.day}`}>5</button>
          <button type="button" className={`${styles.day}`}>6</button>
          <button type="button" className={`${styles.day}`}>7</button>

          <button type="button" className={`${styles.day}`}>1</button>
          <button type="button" className={`${styles.day}`}>2</button>
          <button type="button" className={`${styles.day}`}>3</button>
          <button type="button" className={`${styles.day}`}>4</button>
          <button type="button" className={`${styles.day}`}>5</button>
          <button type="button" className={`${styles.day}`}>6</button>
          <button type="button" className={`${styles.day}`}>7</button>
        </div>
      </div>

    </div>
  </>
}