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
import TourList from "./pages/tour/TourList";
import Tourlp from "./pages/tourlp/TourLp";
import Typek from "./components/typek/Typek";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Initial check on component mount
    checkWindowSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkWindowSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <>
          {" "}
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
              <Route path="/tour-page" element={<TourList />} />
            </Routes>
            <Routes>
              <Route path="/tour-leader-profile" element={<Tourlp />} />
            </Routes>
            <Routes>
              <Route path="/type" element={<Typek />} />
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
        </>
      )}
    </div>
  );
}

export default App;
