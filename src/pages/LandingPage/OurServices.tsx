import PUBLIC_URLS from "../../utils/pub.urls";

const OurServices = () => {
  return (
    <div className=" my-16 w-full h-auto flex flex-col bg-white">
      <div className="mx-auto w-10/12 py-6 h-auto flex flex-col border border-Red rounded-3xl shadow-lg hover:shadow-xl">
        <h3 className="text-[#2D2D72] py-4 text-center text-[40px] font-bold">Our Services</h3>
        <div className="mx-auto w-8/12 py-4 h-auto flex flex-col">
          <div className=" mx-auto my-4 w-10/12 h-auto bg-bg1 flex rounded">
            <div className="w-10/12 mx-auto px-10  my-4 py-4  h-auto flex flex-col bg-[#25212193] rounded-md ">
              <h1 className="mx-auto w-4/5  py-4 my-4  px-3 fnt-bold text-center text-white bg-[#2D2D72] rounded">
                About QSL Engineering
              </h1>
              <p className="text-white text-base ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam
              </p>
            </div>
          </div>
          <div className=" mx-auto my-4 w-10/12 h-auto bg-bg1 flex rounded">
            <div className="w-10/12 mx-auto px-10  my-4 py-4  h-auto flex flex-col bg-[#25212193] rounded-md ">
              <p className="text-white text-base ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam
              </p>
            </div>
          </div>
          <div className=" mx-auto my-4 w-10/12 h-auto bg-bg1 flex rounded">
            <div className="w-10/12 mx-auto px-10  my-4 py-4  h-auto flex flex-col bg-[#25212193] rounded-md ">
              <p className="text-white text-base ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam
              </p>
            </div>
          </div>
        </div>
        <a
          href={PUBLIC_URLS.Calendly}
          target="_blank"
          className="mx-auto mt-10 px-5  py-4 w-2/5 text-center text-white text-2xl rounded-full bg-Red hover:bg-black bg-gradient-to-r from-black hover:from-Red transition-colors shadow-md"
        >
          Make Enquiry
        </a>
      </div>
    </div>
  );
};

export default OurServices;
