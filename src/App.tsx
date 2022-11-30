import Box from '@mui/material/Box';
import Calendar from "./Components/calendar/";

function App() {

  // Calendar DB
  const datas: any = {
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
    console.log("callback")
  }

  return <>
    <Box sx={{ width: 400, margin: "auto" }}>
      <Calendar datas={datas} onDayClick={onDayClick} />
    </Box>
  </>
}

export default App;
