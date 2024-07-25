const Banner = () => {
  return (
    <div className="w-full h-full bg-white bg">
      <div className="w-full h-auto mt-32 bg-white flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 h-auto mx-auto md:ml-12 mt-16 px-6 md:px-12 pb-10 md:pb-0  flex flex-col items-left  ">
          <h1 className="text-5xl md:text-7xl text-Red font-OleoScript px-3">
            All About<span className="">Love </span>
          </h1>

          <h1 className="text-6xl md:text-7xl flex flex-row text-black font-OleoScript px-3">
            Books collection
          </h1>
          <p className="py-6 text-slate-700 text-2xl  font-Roboto  ">
            Experience transformative healing through learning about LOVE.
          </p>
        </div>

        <div className="w-full md:w-3/4 h-auto mx-auto flex flex-col items center bg-white">
          <img
            src="img/reading1.png"
            alt="Poster"
            className=" mx-auto w-11/12 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
