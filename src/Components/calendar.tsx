import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './index.module.scss';

export default function CalendarX() {

  const [value, onChange] = React.useState(new Date())

  const month_datas = {
    '20221125': '123'
  }

  const Tile = () => {
    let tile = <></>;
    return tile;
  }
  return <>
    <div className={styles.calendar}>
      <Calendar
        onChange={onChange}
        value={value}
        prev2Label={null}
        next2Label={null}
        tileContent={<Tile />}
      />
    </div>
  </>
}