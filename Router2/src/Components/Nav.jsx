import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
export default function Nav() {
  function handleclick(str) {
    const menu = document.getElementById("mobile-menu-2");
    const close = document.querySelector(".close");
    const open = document.querySelector(".open");
    if (str === "open") {
      open.style.display = "none";
      menu.style.display = "block";
      close.style.display = "block";
    } else if (str === "close") {
      menu.style.display = "none";
      open.style.display = "block";
      close.style.display = "none";
    }
  }
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://logos.textgiraffe.com/logos/logo-name/Anish-designstyle-boots-m.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center md:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden order-3 md:order-1 justify-between items-center w-full md:flex md:w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-700" : "text-gray-800"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-orange-700" : "text-gray-800"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-orange-700" : "text-gray-800"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-orange-700" : "text-gray-800"
                  }
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="ham md:hidden">
            <FaBars
              className="text-gray-800 cursor-pointer open"
              onClick={() => handleclick("open")}
            />
            <FaTimes
              className="text-gray-800 cursor-pointer close hidden"
              onClick={() => handleclick("close")}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
