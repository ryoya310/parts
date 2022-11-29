import React from 'react';

import Box from '@mui/material/Box';

import Calendar from "./Components/calendar/";

function App() {

  const datas: any = {
    '20221101': {'text': '●', 'status': ''},
    '20221121': {'text': '●,s', 'status': 'hol'},
    '20221124': {'text': 's', 'status': 'hol'},
    '20221126': {'text': 's', 'status': 'hol'},
    '20221130': {'text': 's', 'status': 'hol'},
  }

  const onClick = (dt: Date) => {
    console.log(dt)
  }
  return <>
    <Box sx={{ width: 400, margin: "auto" }}>
      {/* <Calendar1 /> */}
      <Calendar datas={datas} onClick={onClick} />
    </Box>
  </>
}

export default App;
