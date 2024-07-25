/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePaystackPayment } from "react-paystack";
import OrderConfirmedCard from "./OrderConfirmedCard";
import { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalCheckout from "../../PaymentGates/Paypal";

interface appState {
  setShowPaymentOptions: (value: any) => any;
}

const PaymentOptions: React.FC<appState> = ({ setShowPaymentOptions }: appState) => {
  const [showCard, setShowCard] = useState(false);

  const TOTAL = 300 * 100;

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: TOTAL, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_a507bd6845bb5cad347a591e06e88c6fde817cc1",
  };

  // you can call this function anything
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
  const initialOptions = {
    clientId:
      "AcY98zuAjQJ2ZrLmKLR1lAzR8nn9lIVwSEHZwrVgO4CxkC-JOCbKjie1LujgtrSGjbv8seZTX0ua-lXe",
    currency: "USD",
    intent: "capture",
  };
  return (
    <div className="w-full h-auto pt-32 fixed top-0 bottom-0 left-0 right-0 backdrop-blur-lg  bg-transparent">
      <div className="mx-auto px-10 pb-6 w-10/12 md:w-3/6 lg:w-96 bg-white flex flex-col rounded-lg shadow-md">
        <h1
          className="flex-col pb-6 py-4 text-3xl text-slate-700 font-bold text-end cursor-pointer"
          onClick={() => {
            setShowPaymentOptions(false);
          }}
        >
          &#10005;
        </h1>
        <h1
          className="flex-col pb-6   text-3xl text-red-800 font-OleoScript font-bold text-center cursor-pointer"
          onClick={() => {
            setShowPaymentOptions(false);
          }}
        >
          Payment Options
        </h1>
        <a
          onClick={() => {
            initializePayment(onSuccess);
          }}
          className=" mx-auto mb-4 px-24 py-4 w-full bg-blue-950 text-center font-bold transition-all hover:bg-gradient-to-r from-black rounded-md text-lg text-white cursor-pointer font-md"
        >
          PayStack
        </a>

        <div className="w-full h-auto p-6 bg-blue-900">
          <PayPalScriptProvider options={initialOptions}>
            <PaypalCheckout />
          </PayPalScriptProvider>
        </div>

        {showCard && <OrderConfirmedCard setShowCard={setShowCard} />}
      </div>
    </div>
  );
};

export default PaymentOptions;
