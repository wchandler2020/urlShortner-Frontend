import { Route, Routes, useParams } from "react-router-dom";
import ShortenUrlPage from "./components/shortenUrlPage/ShortenUrlPage";
import Navbar from "./components/navigation/Navbar";
import { Toaster } from "react-hot-toast";
import LandingPage from "./components/landingpage/LandingPage";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path="/:url" element={<ShortenUrlPage />} />
      </Routes>
    )
}
