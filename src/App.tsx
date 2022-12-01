import { Routes, Route } from "react-router-dom";

import { CommonProvider } from "./providers/common";

import Calendar from "./pages/calendar";
import Dialog from "./pages/dialog";

export default function App() {
  return <>
    <CommonProvider>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/dialog" element={<Dialog />} />
      </Routes>
    </CommonProvider>
  </>
}