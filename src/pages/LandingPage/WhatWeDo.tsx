import PUBLICROUTES from "../../utils/PublicRoutes";

const WhatWeDo = () => {
  return (
    <div className="  w-full h-auto my-24 py-10  bg-white flex flex-col  ">
      <h1 className="text-5xl text-center font-bold text-Red py-6   ">What We Do</h1>
      <div className=" my-8 w-full h-auto flex flex-row  ">
        <div className=" relative mx-auto  w-1/6 h-[250px] flex flex-col rounded-sm ">
          <img
            src="/images/Rectangle 15.svg"
            alt="management team"
            className="w-full h-[250px] object-cover rounded"
          />
          <div className=" absolute bottom-0 right-0 w-auto h-auto px-3 py-1 bg-[#ffffffdc]">
            <p className="text-center text-[#000000] text-sm border-b border-[#000000]">
              lorem ipsium
            </p>
          </div>
        </div>
        <div className="relative mx-auto  w-2/6 h-auto flex flex-col rounded-sm ">
          <img
            src="/images/Rectangle 16.svg"
            alt="management team"
            className="w-full h-[300px] object-cover rounded"
          />
          <div className=" absolute bottom-0 right-0 w-auto h-auto px-3 py-1 bg-[#ffffffdc]">
            <p className="text-center text-[#000000] text-sm border-b border-[#000000]">
              lorem ipsium
            </p>
          </div>
        </div>
        <div className=" relative mx-auto  w-1/6 h-[250px] flex flex-col rounded-sm ">
          <img
            src="/images/img1.svg"
            alt="management team"
            className="w-full h-[250px] object-cover rounded"
          />
          <div className=" absolute bottom-0 right-0 w-auto h-auto px-3 py-1 bg-[#ffffffdc]">
            <p className="text-center text-[#000000] text-sm border-b border-[#000000]">
              lorem ipsium
            </p>
          </div>
        </div>
        <div className=" relative mx-auto  w-1/6 h-[250px] flex flex-col rounded-sm ">
          <img
            src="/images/Rectangle 18.svg"
            alt="management team"
            className="w-full h-[250px] object-cover rounded"
          />
          <div className=" absolute bottom-0 right-0 w-auto h-auto px-3 py-1 bg-[#ffffffdc]">
            <p className="text-center text-[#000000] text-sm border-b border-[#000000]">
              lorem ipsium
            </p>
          </div>
        </div>
      </div>
      <div className="m-6 w-3/5   p-5 flex flex-row   items-center ">
        <p className="text-black font-Nunito text-lg  ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam
        </p>
      </div>
      <a
        href={PUBLICROUTES.CONTACTUS}
        className="   ml-auto mr-10 mt-auto mb-20 px-16 py-4   text-center text-white  text-2xl rounded-md bg-Red hover:bg-black bg-gradient-to-r from-black hover:from-Red transition-colors shadow-md"
      >
        Shop Now
      </a>
    </div>
  );
};

export default WhatWeDo;
