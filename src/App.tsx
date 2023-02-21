import { Route, Routes } from "react-router-dom";
import { NewPage } from './NewPage'
import { HejPage } from './HejPage'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NewPage />} />
        <Route path="/HejPage" element={<HejPage />} />
      </Routes>
    </div>
  );
}