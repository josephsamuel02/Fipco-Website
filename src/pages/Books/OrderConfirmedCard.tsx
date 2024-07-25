import React from "react";
import PUBLICROUTES from "../../utils/PublicRoutes";

interface appState {
  showCard: boolean;
  setShowCard: (value: any) => any;
}
const OrderConfirmedCard: React.FC<appState> = ({ showCard, setShowCard }) => {
  return (
    <>
      {showCard && (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-transparent  rounded-md z-40 items-center  ">
          <div className=" relative top-52 mx-auto p-4  w-80 h-72 flex flex-col bg-white border-2 border-slate-200 rounded-md items-center justify-center shadow-lg">
            <img src="/img/done-icon.svg" alt="" className=" mx-auto w-20 h-20" />
            <p className="mx-auto py-2 text-2xl text-red-600 font-bold font-nunito ">
              Payment Successful
            </p>
            <p className="mx-auto py-2 text-lg text-center text-slate-800 font-bold font-nunito ">
              Your purchase was successful
            </p>
            <p className="mx-auto py-2 text-base text-center text-slate-800 font-bold font-nunito ">
              check your email for purchase information
            </p>
            <p
              className="w-3/5  mx-auto my-2 py-2 text-lg text-center text-white bg-red-600 font-bold font-nunito rounded cursor-pointer"
              onClick={() => {
                window.location.replace(PUBLICROUTES.BOOKS);
                setShowCard(false);
              }}
            >
              Okay
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderConfirmedCard;
