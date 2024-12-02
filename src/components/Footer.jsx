import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t-2 shadow-md text-gray-600 py-14 font-roboto">
      <footer>
        <div className="flex justify-center space-x-4 pb-6">
          <a
            href="https://www.facebook.com/"
            className="text-2xl w-10 aspect-square flex items-center justify-center rounded-full opacity-75 hover:shadow-lg"
          >
            <FaFacebook className="w-full h-full" color="blue" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-2xl w-10 aspect-square flex items-center justify-center rounded-full hover:opacity-75 hover:shadow-lg "
          >
            <FaInstagram className="w-full h-full" color="#fa7e1e" />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="text-2xl w-10 aspect-square flex items-center justify-center rounded-full hover:shadow-lg"
          >
            <FaLinkedinIn className="w-full h-full" color="blue" />
          </a>
          <a
            href="https://www.whatsapp.com/"
            className="text-2xl w-10 aspect-square flex items-center justify-center rounded-full hover:shadow-lg "
          >
            <FaWhatsapp className="w-full h-full" color="blue" />
          </a>
        </div>
        <ul className="flex text-black justify-center space-x-7 text-xl font-light leading-6">
          <li>
            <Link
              to="/"
              className="hover:opacity-100 hover:border-b-2 border-blue-600 duration-75 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:opacity-100 hover:border-b-2 border-blue-600 duration-75 transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:opacity-100 hover:border-b-2 border-blue-600 duration-75 transition-all"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="hover:opacity-100 hover:border-b-2 border-blue-600 duration-75 transition-all"
            >
              Terms
            </Link>
          </li>
        </ul>
        <p className="mt-6 text-center text-sm text-gray-400">
          EarthBound © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
