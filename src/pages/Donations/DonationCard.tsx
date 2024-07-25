/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";


import BankDetails from "./BankDetails";

import PaymentOptions from "./PaymentOptions";
const DonationCard: React.FC = () => {
  //   const priceFormat = new Intl.NumberFormat("en-US");
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showBankAccount, setShowBankAccount] = useState(false);

  return (
    <section>
      <div className="w-full h-auto  flex flex-col mt-16 md:mt-22 md:mt-32 md:flex-row items-center">
        <div className="mx-0   px-0 md:px-20 my-6 pb-28 w-11/12 md:w-4/5 rounded shadow-lg  ">
          <h1 className="text-4xl mx-5 md:mx-auto text-red-600 py-5 font-bold text-left">
            Donations
          </h1>

          <p className=" mx-auto  text-lg">
            Together, let's create lasting change. Your generosity fuels our mission to impact
            lives positively. Every donation, no matter the size, makes a meaningful
            difference. Join us in our journey to make the world a better place, one
            contribution at a time.
          </p>

          <div className="my-2 flex flex-col md:flex-row item-center ">
            <a
              onClick={() => {
                setShowPaymentOptions(true);
              }}
              className=" mx-auto md:mx-0 mt-16 py-4 w-2/4 md:w-2/6 bg-red-700 text-center transition-all hover:bg-gradient-to-r from-black rounded-md text-lg text-white cursor-pointer font-md"
            >
              Pay Online
            </a>
            <p
              onClick={() => setShowBankAccount(true)}
              className=" mx-auto md:mx-auto mt-16 py-4 w-2/4 md:w-2/6 bg-red-700 text-center transition-all hover:bg-gradient-to-r from-black rounded-lg text-lg text-white cursor-pointer font-md"
            >
              Bank Details
            </p>
          </div>
        </div>

        <img
          src=" img/undraw_lives_matter_38lv.svg"
          alt=""
          className="  md:flex w-2/6 h-auto   "
        />
      </div>
      {showBankAccount && <BankDetails setShowBankAccount={setShowBankAccount} />}
      {showPaymentOptions && <PaymentOptions  setShowPaymentOptions={setShowPaymentOptions} />}
    </section>
  );
};

export default DonationCard;
