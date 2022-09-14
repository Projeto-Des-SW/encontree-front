import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landingPage/index';
import Login from './pages/login/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
