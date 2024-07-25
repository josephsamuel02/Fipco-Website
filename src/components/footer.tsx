import { MdCopyright } from "react-icons/md";

import PUBLICROUTES from "../utils/PublicRoutes";

const Footer = () => {
  return (
    <div
      id="footer"
      className="max-w-full px-2  md:px-10  mt-16 py-3 flex flex-col md:flex-row bg-[#d30202] "
    >
      <div className="w-auto md:w-2/6 mx-4">
        <ul className=" text-base text-white  font-Roboto   md:mx-auto flex flex-col px-6 ">
          <h3 className="text-2xl font-OleoScript font-bold py-3 text-red-200">Links</h3>
          <a href={"/"} className="no-underline text-white">
            Home
          </a>
          <a href={PUBLICROUTES.ABOUTUS} className="no-underline text-white">
            About
          </a>
          <a href={PUBLICROUTES.DONATION} className="no-underline text-white">
            Donations
          </a>
          <a href={PUBLICROUTES.CONSULT} className="no-underline text-white">
            Consult
          </a>
          <a href={PUBLICROUTES.ADMIN} className="no-underline text-white">
            Admin
          </a>
        </ul>
      </div>

      <ul className=" w-auto  md:w-2/6 mx-4 md:mx-auto flex text-base text-white font-Roboto flex-col px-6">
        <h3 className=" text-2xl font-OleoScript font-bold py-3 text-red-200">
          Contact Us Today
        </h3>
        <span className="py-1">
          Email:
          {/* greenassemblyinitiative@gmail.com */}
        </span>
        {/* <span className="py-1"> Phone: +15142192987 </span> */}
        <span className="py-1">1551 Lycee Place Ottawa, Ontario Canada K1G4B5</span>
        <br /> <br /> <br />
        <span className="mx-1 text-base flex flex-row items-center ">
          <MdCopyright size={22} />
          <span className="mx-1 ">2024 All About Love in Action</span>
        </span>
        <span className="mx-1 text-sm text-white underline">
          <a href="https://ithriveonwisdom.com/" target="_blank" className="text-white">
            Powered by Thriveon
          </a>
        </span>
      </ul>
    </div>
  );
};

export default Footer;
