const OurProducts = () => {
  const Products = [
    { image: "/images/product1.svg", name: "Pure Engine Oil" },
    { image: "/images/product1.svg", name: "Pure Engine Oil" },
    { image: "/images/product1.svg", name: "Pure Engine Oil" },
    { image: "/images/product1.svg", name: "Pure Engine Oil" },
    { image: "/images/product1.svg", name: "Pure Engine Oil" },
    { image: "/images/product1.svg", name: "Pure Engine Oil" },
  ];

  return (
    <div className="w-full h-screen">
      <h3 className="font-bold text-black text-3xl text-center py-6  ">Our Products</h3>
      <div className="w-full h-auto px-4 mt-6 bg-bg3 grid grid-flow-row grid-cols-3 gap-8 bg-white">
        {Products.map((d, i) => (
          <div
            className=" m-auto w-auto px-3 pb-2 h-auto bg-white flex flex-col rounded-lg shadow-md hover:shadow-lg"
            key={i}
          >
            <img src={d.image} alt="product" className="w-[200px] m-1 h-auto object-cover" />
            <h3 className="  text-black text-lg font-light">{d.name}</h3>
            <h3 className="my-2  text-white text-xs md:text-base text-center bg-Red hover:bg-red-600 px-3 py-1 cursor-pointer rounded">
              View
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
