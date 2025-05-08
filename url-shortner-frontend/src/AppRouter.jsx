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
import PrivateRoute from "./PrivateRoute";
import Error from "./components/error/Error";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error message=''/>} />
        <Route path="/error" element={<Error message=''/>} />
        <Route path="/login" element={<PrivateRoute publicPage={true}> <Login /></PrivateRoute>} />
        <Route path="/register" element={<PrivateRoute publicPage={true}> <Register /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute publicPage={false}><Dashboard /></PrivateRoute>} />
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
