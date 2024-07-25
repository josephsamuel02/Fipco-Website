// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import PUBLIC_URLS from "../utils/pub.urls";
// import { addDoc, collection } from "firebase/firestore";
// import { toast, ToastContainer } from "react-toastify";
// import { db } from "../DB/firebase";

// const Socials = () => {
//   const [email, setEmail] = useState<any>("");

//   const sendEmail = async (e: any) => {
//     e.preventDefault();
//     if (email == "") {
//       toast.warn("Please enter a your email");
//     }
//     try {
//       const doc = await addDoc(collection(db, "emails"), { email });
//       if (doc) {
//         toast.success("Subscribed successfully");
//         setEmail("");
//       }
//     } catch (error) {
//       toast.error("Unable to send details");
//     }
//   };
//   return (
//     <div className="w-full mt-16 px-6 h-auto  ">
//       <h3 className=" mx-6 text-lg md:text-2xl  text-black font-OleoScript font-bold ">
//         Get the Scoop: Join for Exclusive Free Resources about Love!
//       </h3>
//       <div className="w-full  mx-auto flex flex-row px-6">
//         <input
//           type="email"
//           placeholder="email address"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//           className=" 4-w-4/6 md:w-2/6 my-3 h-auto py-0 px-3 md:px-4 text-base md:text-lg text-slate-800 rounded  outline-none border-2 border-slate-500 focus:border-black"
//         />
//         <button
//           className="w-20 md:w-28 mx-0 px-1 ms:px-3 py-3 my-4 text-center text-white  text-base font-nunito  rounded bg-Red hover:bg-black bg-gradient-to-l from-black hover:from-Red transition-colors shadow-md"
//           onClick={(e) => sendEmail(e)}
//         >
//           Subscribe
//         </button>
//       </div>

//       <h1 className=" mx-1  mt-10 md:mx-3 md:p-3 text-2xl md:text-3xl font-bold font-OleoScript text-Red">
//         Stay Connected
//       </h1>
//       <div className="w-full mx-auto  h-auto flex flex-row flex-wrap items-center ">
//         <a
//           href={PUBLIC_URLS.Facebook}
//           target="_blank"
//           className="mx-2  p-3 bg-transparent text-center"
//         >
//           <FaFacebook color="royalblue" size={34} />
//         </a>
//         <a
//           href={PUBLIC_URLS.X_Social}
//           target="_blank"
//           className=" mx-2 p-3 bg-transparent text-center"
//         >
//           <FaXTwitter color="black" size={34} />
//         </a>
//         <a
//           href={PUBLIC_URLS.Instagram}
//           target="_blank"
//           className="mx-2  p-3 bg-transparent text-center"
//         >
//           <FaInstagram color="purple" size={34} />
//         </a>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Socials;
