import Footer from "../../components/footer";
import Nav from "../../components/nav";
import About from "./About";
import Banner from "./Banner";
import OurProducts from "./OurProducts";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import Services from "./Services";
import WhatWeDo from "./WhatWeDo";

const LandingPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Banner />
      <OurTeam />
      <Services />
      <About />
      <WhatWeDo />
      <OurServices />
      <OurProducts />
      <Footer />
    </>
  );
};

export default LandingPage;
