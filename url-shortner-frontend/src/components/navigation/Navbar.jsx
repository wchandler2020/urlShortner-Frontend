import React, { useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from '../../contextApi/ContextApi'


const Navbar = () => {
  const navigate = useNavigate();
  // const [ token, setToken ] = useState(false);
  const path = useLocation().pathname;
  const {token, setToken} = useStoreContext()
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem('JWT_TOKEN')
    navigate('/login')
  };

  return (
    <div className="h-16 bg-gray-500 z-50 flex items-center sticky top-0 ">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link to="/">
          <h1 className="text-4xl text-white font-normal sm:mt-0 mt-2">
            EZ <span className="text-[#5bc8ac]">SHORT</span>
          </h1>
        </Link>
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          }  transition-all duration-100 sm:h-fit sm:bg-none  bg-custom-gradient sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className="text-white font-light"
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-white font-light" : "text-gray-200"
              }`}
              to="/about"
            >
              WHY EZ SHORT
            </Link>
          </li>
          <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/pricing" ? "text-white font-light" : "text-gray-200"
              }`}
              to="/pricing"
            >
              PRICING
            </Link>
          </li>
          {token && (
            <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/dashboard" ? "text-white font-light" : "text-gray-200"
              }`}
              to="/dashboard"
            >
              ANALYTICS
            </Link>
          </li>
          )}
          {!token && (
            <Link to="/register">
              <li className=" sm:ml-0 -ml-1 text-[#5bc8ac] border border-[#5bc8ac] cursor-pointer w-24 text-center font-light px-2 py-2 rounded-md hover:text-white hover:bg-[#5bc8ac] transition-all duration-150">
                REGISTER
              </li>
            </Link>
            )}

          {token && (
            <button
             onClick={onLogOutHandler}
             className="sm:ml-0 -ml-1 text-[#5bc8ac] border border-[#5bc8ac]  cursor-pointer w-24 text-center font-light px-2 py-2 rounded-md  hover:text-white hover:border-white transition-all duration-150">
              LOG OUT
            </button>
            )}
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;