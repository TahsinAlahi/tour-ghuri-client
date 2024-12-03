import { useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { useAuth } from "../providers/AuthContext";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function activeClass({ isActive }) {
    return `block md:py-1 py-2 px-3  rounded text-black font-semibold hover:bg-nav-active ${
      isActive ? "bg-nav-active" : "md:bg-transparent"
    }`;
  }

  return (
    <nav className="bg-nav border-gray-200 w-full font-nunito">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-7 ">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoImg} className="h-10 aspect-square" alt="EarthBound" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap font-cinzel">
            Tour Ghuri
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex md:justify-end`}
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg bg-nav-bg md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-nav-bg text-center"
            onClick={toggleMenu}
          >
            <li>
              <NavLink to="/" className={activeClass}>
                Home
              </NavLink>
            </li>
            <li className="md:block">
              <NavLink to="/all-tourist-spots" className={activeClass}>
                Tourist Spots
              </NavLink>
            </li>
            <li className="md:block">
              <NavLink to="add-tourist-spot" className={activeClass}>
                Add tourist spots
              </NavLink>
            </li>
            <li className="md:block">
              <NavLink to="/my-list" className={activeClass}>
                My list
              </NavLink>
            </li>
            {user && (
              <li className="md:hidden block">
                <NavLink to="/user" className={activeClass}>
                  Profile
                </NavLink>
              </li>
            )}
            <li className="md:hidden block">
              {user ? (
                <button
                  className="block md:py-1 py-2 px-3  rounded text-black font-semibold cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block md:py-1 py-2 px-3  rounded text-black font-semibold cursor-pointer"
                >
                  Login
                </Link>
              )}
            </li>

            {/* <li className="block md:py-1 py-2 px-3  rounded text-black font-semibold cursor-pointer hover:bg-nav-active md:hidden">
              <div>Logout</div>
            </li> */}
          </ul>
        </div>
        <div className="md:flex items-center justify-center gap-2 ml-10 hidden">
          {user ? (
            <>
              <Link
                to="/user"
                className="p-1 w-10 aspect-square rounded-full overflow-hidden  bg-gray-600 cursor-pointer"
              >
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-full h-full object-cover object-center"
                />
              </Link>

              <button
                className="bg-nav-active hover:bg-blue-600 duration-100 transition-all  px-2 py-1 rounded font-semibold cursor-pointer"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-nav-active hover:bg-blue-600 duration-100 transition-all  px-2 py-1 rounded font-semibold cursor-pointer"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
