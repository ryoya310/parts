import Box from '@mui/material/Box';
import dayjs from 'dayjs'
import Calendar from "./Components/calendar/";

function App() {

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

    const date = dayjs(dt).format("YYYY.MM.DD")
    console.log(date)
  }

  return <>

    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

      <Box sx={{ width: 320, margin: "20px auto" }}>
        <Calendar
          lang='ja'
          no={-1}
          datas={datas}
          isNavi={false}
          onDayClick={onDayClick}
        />
      </Box>

      <Box sx={{ width: 320, margin: "20px auto" }}>
        <Calendar
          lang='ja'
          no={0}
          datas={datas}
          isNavi={true}
          onDayClick={onDayClick}
        />
      </Box>

      <Box sx={{ width: 320, margin: "20px auto" }}>
        <Calendar
          lang='en'
          no={1}
          datas={datas}
          onDayClick={onDayClick}
        />
      </Box>
    </Box>
  </>
}

export default App;
