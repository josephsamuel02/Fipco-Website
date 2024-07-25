import PUBLICROUTES from "../../utils/PublicRoutes";

const About = () => {
  return (
    <div className="relative w-full h-auto my-24 py-10  bg-bg2 bg-no-repeat bg-cover  ">
      <div className="  w-full h-auto flex flex-row flex-wrap  ">
        <div className=" m-auto  w-[430px] h-auto flex flex-col rounded-sm ">
          <img
            src="/images/img1.svg"
            alt="management team"
            className="w-full h-[400px] rounded "
          />
        </div>
        <div className="m-auto w-3/5 max-h-[320px]  p-5 flex flex-col backdrop-blur-md  rounded bg-[#2e3192b2]">
          <h3 className="text-5xl py-4 text-center text-Red font-bold">About Us</h3>
          <p className="text-white font-Nunito text-lg text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>

        <div className=" m-auto   w-[430px] h-auto  ">
          <img
            src="/images/img2.svg"
            alt="management team"
            className="w-full h-auto rounded "
          />
        </div>

        <a
          href={PUBLICROUTES.CONTACTUS}
          className=" absolute bottom-0 right-6 mx-auto mt-auto mb-20 px-16 py-4   text-center text-white  text-2xl rounded-md bg-Red hover:bg-black bg-gradient-to-r from-black hover:from-Red transition-colors shadow-md"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default About;
