import React from 'react';

import Calendar1 from "./Components/calendar/calendar2";
import Calendar2 from "./Components/calendar/";

function App() {

  const datas: any = {
    '20221121': '〇'
  }

  return <>
    {/* <Calendar1 /> */}
    <Calendar2 datas={datas} />
  </>
}

export default App;
