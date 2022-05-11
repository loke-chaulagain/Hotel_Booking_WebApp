import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import HotelsList from "./pages/hotelsList/HotelsList";
import SingleHotel from "./pages/singleHotel/SingleHotel";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/hotels" element={<HotelsList />} />
        <Route exact path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
    </Router>
  );
}

export default App;
