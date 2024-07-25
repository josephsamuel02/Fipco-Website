const OurTeam = () => {
  return (
    <div className="w-full h-screen my-24   bg-bg1 bg-no-repeat bg-cover  ">
      <div className="w-full h-full  p-5 flex flex-col backdrop-blur-md   bg-[#2e3192b2]">
        <h3 className="text-5xl py-4 text-center text-white font-bold">Our team</h3>

        <div className="w-full h-auto flex flex-row flex-wrap  ">
          <div className="relative mx-auto  my-4  w-[430px] h-auto flex flex-col rounded-sm ">
            <img
              src="/images/management team.svg"
              alt="management team"
              className="w-full h-[250px] rounded-t-md"
            />
            <div className="absolute left-0 right-0 bottom-0 py-3 w-full h-auto bg-[#ED1C24E5]">
              <p className="text-white font-bold text-xl text-center">Manegerial Team</p>
            </div>
          </div>
          <div className="relative mx-auto  my-4  w-[430px] h-auto flex flex-col rounded-sm ">
            <img
              src="/images/research team.svg"
              alt="management team"
              className="w-full h-[250px] rounded-t-md"
            />
            <div className="absolute left-0 right-0 bottom-0 py-3  h-auto bg-[#ED1C24E5]">
              <p className="text-white font-bold text-xl text-center">Research Team</p>
            </div>
          </div>
          <div className="relative mx-auto  my-4  w-[430px] h-auto flex flex-col rounded-sm ">
            <img
              src="/images/operation team.svg"
              alt="operation team"
              className="w-full h-[250px] rounded-t-md"
            />
            <div className="absolute left-0 right-0 bottom-0 py-3 w-full h-auto bg-[#ED1C24E5]">
              <p className="text-white font-bold text-xl text-center">Operation Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
