import { Route, Routes } from "react-router-dom";
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Layout/Sidebar';
import Request from './Request/request';
import Donors from './Donors/Donors';
import Footer from "./components/Footer/Footer";
import Profile from "./Profile/profile";





function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />

        <Routes>
          <Route path="/" element={<MainDash />} />
          <Route path="/request" element={<Request />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
        <Footer />


      </div>
    </div>
  );
}

export default App;


