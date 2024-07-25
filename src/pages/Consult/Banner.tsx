const Banner = () => {
  return (
    <div className="w-full h-full mt-10 md:mt-0 p-0 flex flex-col md:flex-row ">
      <div className="mx-auto w-full md:w-3/5 h-screen  mt-20 px-6 md:px-12 pb-10 md:pb-0  flex flex-col items-left  ">
        <h1 className="my-5 pl-5 md:pl-3  text-5xl md:text-6xl text-Red font-OleoScript">
          Discover the path to healing and growth.
        </h1>
        <h1 className="my-5 text-5xl  md:text-6xl pl-5 md:pl-3  flex flex-row text-black font-OleoScript  ">
          Guiding you every step of the way.
        </h1>

        <a
          href={"/"}
          className="my-7 mx-auto md:mx-0 px-16 py-4 w-full md:w-96 text-2xl md:text-3xl text-center text-white font-OleoScript no-underline rounded-full bg-Red hover:bg-black bg-gradient-to-r from-black hover:from-Red transition-colors shadow-md"
        >
          Book a meeting now
        </a>
      </div>
      <div className="w-1/5 h-auto flex flex-col items-center">
        <div className="tidycal-embed" data-path="mrsam"></div>
        <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
      </div>
    </div>
  );
};

export default Banner;
