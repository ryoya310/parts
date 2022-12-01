import * as React from 'react';

import Box from '@mui/material/Box';
import dayjs from 'dayjs'
import Calendar from '../components/calendar';
import Dialog from '../components/dialog';

function CalendarPage() {

  // Calendar DB
  const datas: any = {
    '20211121': {'text': '●', 'status': 'hol'},
    '20211122': {'text': '■', 'status': ''},
    '20221021': {'text': '●', 'status': ''},
    '20221101': {'text': '●', 'status': ''},
    '20221121': {'text': '●', 'status': 'hol'},
    '20221124': {'text': '○', 'status': 'hol'},
    '20221126': {'text': '▼', 'status': 'hol'},
    '20221130': {'text': '▲', 'status': 'hol'},
    '20221223': {'text': '▲', 'status': ''},
  }

  // Day Click Event
  const onDayClick = (dt: Date) => {

    const date = dayjs(dt).format('YYYY.MM.DD')
  }

  const dayContent = (dt: Date) => {

    const buttonLabel = dayjs(dt).format('DD')
    const label = dayjs(dt).format('YYYY.MM.DD')
    const OpenDialog =  <Dialog
                          viewType='harf'
                          isOpen={false}
                          button={buttonLabel}
                          label={label}
                          contents={<>{label}</>}
                        />
    return OpenDialog;
  }

  return <>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      <Box sx={{ width: 320, margin: '20px auto' }}>
        <Calendar
          lang='ja'
          no={0}
          datas={datas}
          isNavi={true}
          onDayClick={onDayClick}
          dayContent={dayContent}
        />
      </Box>
    </Box>
  </>
}
export default CalendarPage;