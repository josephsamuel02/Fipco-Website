/* eslint-disable @typescript-eslint/no-explicit-any */
interface appState {
  //   showBankAccount: boolean;
  setShowBankAccount: (value: any) => any;
}
const BankDetails: React.FC<appState> = ({ setShowBankAccount }) => {
  return (
    <div className="w-full h-full fixed left-0 right-0 top-0 bottom-0 transparent backdrop-blur-sm">
      <div className=" relative top-36 mx-auto p-4 px-10  w-96 h-96 flex flex-col bg-white border-2 border-slate-200 rounded-md   justify-center shadow-lg">
        <p className="mx-0 py-2 text-lg text-slate-700 font-bold font-Roboto ">
          <span className="text-xl text-black font-bold">Bank:</span> Access Bank
        </p>
        <p className="mx-0 py-2 text-lg text-slate-700 font-bold font-Roboto ">
          <span className="text-xl text-black font-bold">Account Number: </span>
          0000000000
        </p>
        <p className="mx-0 py-2 text-lg text-slate-700 font-bold font-Roboto ">
          <span className="text-xl text-black font-bold"> Account Name: </span>John C. Maxwell
        </p>
        <p
          className="w-3/5  mx-auto mt-12 py-2 text-lg text-center text-white bg-red-600 hover:bg-red-700 font-bold font-OleoScript rounded cursor-pointer"
          onClick={() => setShowBankAccount(false)}
        >
          Okay
        </p>
      </div>
    </div>
  );
};

export default BankDetails;
