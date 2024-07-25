/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from "react";
import { MdClose } from "react-icons/md";
import Select from "react-select";
import { usePaystackPayment } from "react-paystack";
import OrderConfirmedCard from "./OrderConfirmedCard";
interface Props {
  setCheckout: Dispatch<SetStateAction<boolean>>;
  checkout: boolean;
}

const CheckoutDetails = ({ setCheckout, checkout }: Props) => {
  //   const priceFormat = new Intl.NumberFormat("en-US");
  const [showCard, setShowCard] = useState(false);
  const TOTAL = 300 * 100;
  const [formData, setformData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  const options: any = [
    { value: "Electronic", label: "Electronic Book (PDF)" },
    { value: "Hard Copy", label: "Hard Copy" },
  ];

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: TOTAL, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_a507bd6845bb5cad347a591e06e88c6fde817cc1",
  };

  // you can call this function anything
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSuccess: any = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    setShowCard(true);
    console.log(reference);
  };

  // you can call this function anything
  //   const onClose: any = () => {
  //     console.log("closed");
  //   };
  const initializePayment = usePaystackPayment(config);
  return (
    <>
      {checkout && (
        <div className="mx-auto fixed top-20 bottom-0 left-0 right-0 w-full  z-50 overflow-y-scroll">
          <div className=" mx-auto mt-0 w-11/12 md:w-4/5 bg-white rounded-lg z-50 border shadow-md ">
            <h1 className=" flex flex-row-reverse text-2xl  md:text-3xl   text-black font-dayone">
              <span
                className="p-2  rounded-full hover:bg-gray-200"
                onClick={() => setCheckout(false)}
              >
                <MdClose size={36} className="text-slate-800  " />
              </span>
            </h1>
            <h3 className=" mx-auto mb-5 text-center text-2xl  md:text-3xl text-black font-OleoScript ">
              Check Out
            </h3>

            <div className=" w-full h-auto flex flex-col md:flex-row ">
              <div className="w-full mx-auto flex-col">
                <h3 className=" mx-auto my-6 text-center text-xl   text-slate-900 font-OleoScript ">
                  Recipient Information
                </h3>
                <form onSubmit={handleSubmit} className="w-full px-10 flex flex-col">
                  <label htmlFor="email" className="my-1">
                    Select a Book Type
                  </label>

                  <div className="">
                    <Select
                      options={options}
                      defaultValue="select"
                      required
                      onChange={(e: any) =>
                        setformData((prev: any) => ({ ...prev, type: e.value }))
                      }
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Recipient phone"
                    required
                    onChange={(e) =>
                      setformData((prev: any) => ({ ...prev, phone: e.target.value }))
                    }
                    className=" w-full my-3 h-auto py-2 px-4 text-lg text-slate-800 rounded-md  outline-none border-2 border-slate-500 focus:border-black"
                  />
                  <input
                    type="text"
                    placeholder="email"
                    required
                    onChange={(e) =>
                      setformData((prev: any) => ({ ...prev, email: e.target.value }))
                    }
                    className=" w-full my-3 h-auto py-2 px-4 text-lg text-slate-800 rounded-md  outline-none border-2 border-slate-500 focus:border-black"
                  />

                  <textarea
                    placeholder="Delivery Address"
                    required
                    onChange={(e) =>
                      setformData((prev: any) => ({ ...prev, address: e.target.value }))
                    }
                    className=" w-full my-3  h-auto py-2 px-4 text-lg text-slate-800 rounded-md  outline-none border-2 border-slate-500 focus:border-black"
                  />
                  <button
                    type="submit"
                    className="w-full mx-auto px-6 py-2 my-4 text-center text-white  text-xl font-nunito  rounded bg-Red hover:bg-black bg-gradient-to-l from-black hover:from-Red transition-colors shadow-md"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div className="w-full mx-auto flex-col items-center">
                <h3 className=" mx-auto my-6 text-center text-xl text-slate-900 font-OleoScript ">
                  order Information
                </h3>

                <ul className="w-full h-auto text-lg ml-16 mt-16 text-slate-900 font-Roboto list-none px-3">
                  <li>Name: John C. Maxwell</li>
                  <li>Book Name:The way of love</li>
                  <li>Quantity: 4</li>
                  <li>price per one: $70</li>
                  <h3 className="font-bold mt-7">Total price: $280</h3>
                </ul>
                <div className="my-2 flex flex-col md:flex-row item-center ">
                  <a
                    onClick={() => {
                      initializePayment(onSuccess);
                    }}
                    className="mx-auto  mt-10 py-4 w-5/6   bg-red-700 text-center transition-all hover:bg-gradient-to-r from-black rounded-md text-lg text-white cursor-pointer font-md"
                  >
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>

            <OrderConfirmedCard showCard={showCard} setShowCard={setShowCard} />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutDetails;
