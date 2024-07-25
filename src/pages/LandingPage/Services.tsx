import PUBLIC_URLS from "../../utils/pub.urls";

const Services = () => {
  const Searvices = [
    { image: "/images/management team.svg", title_1: "Mechanical ", title_2: "Engineering" },
    { image: "/images/management team.svg", title_1: "Machine oil ", title_2: "purification" },
    {
      image: "/images/management team.svg",
      title_1: "Industrial Plant ",
      title_2: "Maintenance",
    },
    { image: "/images/management team.svg", title_1: "Chemical ", title_2: " research" },
  ];
  return (
    <div className="w-10/12 h-auto mx-auto my-20 p-10 flex flex-col items-center bg-white border border-red-400 rounded-lg shadow-xl hover:shadow-2xl">
      <h1 className="text-3xl mb-4 md:text-4xl text-[#2D2D72]  font-bold"> Services</h1>
      <p className="text-black text-base py-4 px-16">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat.
      </p>

      <div className="w-full h-auto my-16 flex flex-row">
        {Searvices.map((d, i) => (
          <div className="mx-auto w-[180px] h-auto flex flex-col" key={i}>
            <img
              src={d.image}
              alt=""
              className="h-[320px] w-[180px] object-cover rounded-t-full rounded-b-full"
            />
            <h2 className="text-lg font-bold text-center flex flex-col">
              <span className="text-[#2D2D72]">{d.title_1} </span>{" "}
              <span className="text-Red">{d.title_2} </span>
            </h2>
          </div>
        ))}
      </div>
      <a
        href={PUBLIC_URLS.Calendly}
        target="_blank"
        className="mx-auto mt-10 px-5  py-4 w-2/5 text-center text-white text-2xl rounded-full bg-Red hover:bg-black bg-gradient-to-r from-black hover:from-Red transition-colors shadow-md"
      >
        Shop Now{" "}
      </a>
    </div>
  );
};

export default Services;
