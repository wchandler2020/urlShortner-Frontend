import "./App.css";
import About from "./components/about/About";
import LandingPage from "./components/landingpage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import { Toaster } from "react-hot-toast";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="bg-slate-200 h-100">
      <BrowserRouter>
        <Navbar />
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
