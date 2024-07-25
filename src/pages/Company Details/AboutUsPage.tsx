import Footer from "../../components/footer";

const About = () => {
  return (
    <section>
      <div className="w-full h-auto flex flex-col md:flex-row items-center">
        <div className="mx-4 py-5 px-5  md:px-24 my-20 w-11/12 md:w-3/5 rounded shadow-lg">
          <h1 className="text-4xl mx-5 md:mx-auto text-red-600 py-5 font-bold text-left">
            About Us
          </h1>

          <p className="  mb-3 mx-auto font-Roboto  text-base">
            "All About Love" , a program designed to support individuals who are seeking love
            and acceptance while facing various challenges such as fearful thoughts,
            self-sabotage, impostor syndrome, unhealed wounds, and bottled emotions. God is
            able to guide individuals on their journey of love and self-discovery, this aim is
            to provide tools and support for healing past wounds, embracing and giving love,
            and ultimately manifesting a life of abundance.
          </p>

          <p className="  mb-3 mx-auto font-Roboto text-base">
            "All About Love" empowers individuals to heal past wounds, overcome self-sabotage,
            and cultivate love, acceptance, and abundance, leading to a more fulfilling and
            balanced life. We provide self assessment, practical exercises, personalized
            coaching, and guidance tailored to each individual's needs, helping them heal
            emotional wounds, overcome self-sabotaging patterns, and cultivate a mindset of
            love and abundance for lasting personal transformation and fulfillment.With these
            tools, you can heal, look within to find peace, be in harmony with yourself, and
            create infectious energies of love and abundance
          </p>
        </div>

        <img
          src=" img/undraw_showing_support_re_5f2v.svg"
          alt="csv image"
          className="hidden md:flex w-2/5 h-auto   "
        />
      </div>

      <Footer />
    </section>
  );
};

export default About;
