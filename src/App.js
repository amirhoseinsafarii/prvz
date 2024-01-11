import "./App.css";
import Map from "./components/map/map";
import Loc from "./pages/locations/[slug]/Loc";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Residence from "./pages/residence/Residence";
import HotelPage from "./pages/hotel/hotel";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import CarList from "./components/car/Car";
function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <Routes>
          <Route path="/residence" element={<Residence />} />
        </Routes>
        <Routes>
          <Route path="/hotel-page" element={<HotelPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/car-list" element={<CarList />} />
        </Routes>
        <Routes>
          <Route path="locations/:slug" element={<Loc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
