import { useEffect, useState } from "react";
import PUBLICROUTES from "../utils/PublicRoutes";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigation = [
    { name: "Home", href: PUBLICROUTES.LANDINGPAGE },
    { name: "About", href: " PUBLICROUTES.ABOUTUS" },
    { name: "Services", href: `${"PUBLICROUTES.BLOG"}/0` },
    { name: "Contact", href: "PUBLICROUTES.CONTACTUS " },
  ];

  const [showNav, setShowNav] = useState<boolean>(false);

  // useEffect(() => console.log(location.pathname), []);

  return (
    <section className="w-full mx-0 ">
      <nav className="w-full mx-0 z-10 py-0 fixed top-0 backdrop-blur-sm flex flex-row items-center bg-[#ffffffa1] shadow-md">
        <a href={PUBLICROUTES.LANDINGPAGE} className="mx-2 md:mx-6 my-0  items-center">
          <img alt=" Company Logo" className="h-10 w-auto my-5" src="/images/fipco-logo.jpg" />
        </a>

        <ul className="mx-8 ml-10 py-2 hidden md:flex flex-row absolute right-0">
          {navigation.map((item, i) => (
            <a
              className={`mx-auto px-4 tex-center text-black hover:text-[#2D2D72] text-lg font-bold no-underline border-b-2 ${
                location.pathname == item.href ? "text-[#2D2D72] border-Red" : "border-none"
              }`}
              href={`${item.href}`}
              key={i}
            >
              {item.name}
            </a>
          ))}
          <a
            href={PUBLICROUTES.BECOME_MEMBER}
            className=" mx-10 px-4 py-2 text-md text-white  font-md bg-red-600  transition-all hover:bg-gradient-to-l from-black rounded no-underline"
          >
            Shop Now
          </a>
        </ul>
        <h1
          className="absolute top-7 right-5 cursor-pointer md:hidden transition-all"
          onClick={() => setShowNav(!showNav)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </h1>

        {showNav && (
          <ul className="mx-auto py-3 backdrop-blur-lg absolute top-20 right-0 left-0 flex flex-col bg-white rounded shadow-md">
            {navigation.map((item, i) => (
              <a
                className="mx-auto px-6 py-2 tex-center text-Red hover:text-black text-lg   rounded transition-all no-underline"
                href={`${item.href}`}
                key={i}
                onClick={() => setShowNav(false)}
              >
                {item.name}
              </a>
            ))}
          </ul>
        )}
      </nav>
    </section>
  );
};

export default Nav;
