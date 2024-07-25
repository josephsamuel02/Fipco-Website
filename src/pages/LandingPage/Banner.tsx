import PUBLICROUTES from "../../utils/PublicRoutes";

const Banner = () => {
  return (
    <div className="w-full h-screen pt-28   flex flex-col md:flex-row bg-bg0 bg-cover  ">
      <div className="w-full md:w-2/4 h-4/5 mx-10 px-6 md:p-12 pb-10 md:pb-0 bg-[#110b0b7a]  rounded-md flex flex-col items-center justify-items-center  ">
        <h1 className="text-5xl text-center font-bold text-Red   ">Bulk and retail fuels</h1>
        <p className="py-16 text-slate-900 text-2xl text-center text-white font-Roboto font-semibold ">
          We sell retail fuels ,gas, lubricants, oils, and household cleaning solutions.
        </p>

        <a
          href={PUBLICROUTES.CONTACTUS}
          className="mx-auto mt-auto mb-20 px-16 py-4   text-center text-white  text-2xl rounded-md bg-Red hover:bg-black bg-gradient-to-r from-black hover:from-Red transition-colors shadow-md"
        >
          Discover
        </a>
      </div>
      <div className="w-full md:w-2/4 h-auto mx-auto flex flex-col items-center"></div>
    </div>
  );
};

export default Banner;
