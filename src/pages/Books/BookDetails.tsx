import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Footer from "../../components/footer";
import CheckoutDetails from "./CheckoutDetails";
// import { addToCart } from "../../store/Cart";
// import { useDispatch, useSelector } from "react-redux";

const singleProduct = {
  name: "Dolor sit amet, consectetur adipiscing elit. Donec iaculis maximus",
  image: "/img/invite-image-6.jpg",
  price: 235690,
};

const BookDetails: React.FC = () => {
  const priceFormat = new Intl.NumberFormat("en-US");
  //   const userId: any = useSelector((state: any) => state.auth.userInfo.userId);
  //   const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      <div className="w-11/12 md:w-10/12 h-auto mx-auto my-16 p-4 flex flex-col bg-white rounded-sm ">
        {singleProduct && (
          <div className="w-full h-auto mx-auto flex flex-col md:flex-row">
            <img
              src={singleProduct.image}
              alt={singleProduct.name}
              className="m-auto w-52 h-auto object-cover"
            />

            <div className="w-full md:w-2/5 mx-auto h-auto flex flex-col ">
              <h2 className="text-xl md:text-2xl py-1 md:py-12 text-gray-800 font-roboto font-bold break-words">
                {singleProduct.name}
              </h2>
              <h2 className="text-4xl py-3 text-gray-800 font-dayone   break-words">
                ₦{priceFormat.format(singleProduct.price)}
                <span className="pl-2 text-slate-600 text-xl text-decoration-line: line-through font-normal  ">
                  ₦{priceFormat.format(singleProduct.price)}
                </span>
              </h2>

              <div className="w-full h-auto flex flex-row py-6 ">
                <p className="text-base text-black font-roboto">Quantity</p>
                <input
                  className="mx-3 w-7 h-7 bg-Red rounded shadow font-roboto font-bold text-white"
                  type="button"
                  value="-"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                />
                <p className="text-base text-black font-roboto">{quantity}</p>

                <input
                  className="mx-3 w-7 h-7 bg-Red rounded shadow font-roboto font-bold text-white"
                  type="button"
                  value="+"
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>

              <p
                className="mx-auto my-6 px-4 w-full h-auto py-4 text-xl  text-white font-roboto flex flex-row items-center bg-Red hover:bg-black bg-gradient-to-r from-black hover:from-Red transition-colors rounded-md cursor-pointer"
                onClick={() => setCheckout(true)}
              >
                <span className="px-4">
                  <MdAddShoppingCart size={32} className="mx-auto  text-slate-50" />
                </span>

                <span className="mx-auto cursor-pointer">Purchase Book</span>
              </p>
            </div>
          </div>
        )}
        <div className="w-full md:w-full mx-auto md:mx-6 my-4 h-auto flex flex-col md:flex-row ">
          <div className="mx-auto w-8/12 md:w-2/5 h-auto p-2 border-2 border-slate-300 rounded-md">
            <h3 className="text-xl py-3 text-slate-900 font-bold text-center border-b-2 border-slate-300">
              AUTHOR
            </h3>

            <p className=" p-3 text-lg text-slate-900  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis maximus
              pellentesque. consectetur adipiscing elit. Donec
            </p>
          </div>

          <div className="mx-auto p-6 w-11/12 md:w-10/12 h-auto bg-white rounded-md">
            <h3 className="text-xl py-3 text-slate-900 font-bold">About this book</h3>
            <p className="text-md md:text-lg text-slate-900 font-nunito  ">
              {/* {singleProduct.product_details} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis maximus
              pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              iaculis maximus pellentesque. Lorem
            </p>
          </div>
        </div>
        <CheckoutDetails setCheckout={setCheckout} checkout={checkout} />
      </div>

      <Footer />
    </>
  );
};

export default BookDetails;
