/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardHeader,
  CardBody,
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";

import Select from "react-select";

import React, { useState } from "react";
import SuccessCard from "../../admin/successCard";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/footer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../DB/firebase";
import PUBLICROUTES from "../../utils/PublicRoutes";

const BecomeMember = () => {
  const [showCard, setShowCard] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [memberDetail, setMemberDetail] = useState({});
  const [open, setOpen] = React.useState(1);
  const accordionContent = [
    {
      title: " Heal the world with love!",
      detail:
        "Join us on a mission to spread love, kindness, and healing energy across the globe! Collaborate with our team on different projects that will bring hope, comfort, and transformation to those who need it most. Share your skills, talents, and passion with our community of love and volunteers, and help us build a world where everyone feels seen, heard, and valued. Together, let's break down barriers, challenge hate and discrimination, and create a society that truly cares for all people. ",
    },
    {
      title: " Ignite the love revolution! ",
      detail:
        " Imagine a world where love knows no bounds, where every heart beats with kindness, and every soul feels seen and heard. Share love, kindness, and compassion on social media, in daily encounters, and through outreach. Let's create a tidal wave of unconditional love that sweeps across the globe, lifting every spirit and transforming every life.",
    },
    {
      title: "Share Your Story, Inspire Love!",
      detail:
        " Do you have a story that could inspire a thousand others? Share your journey, your fights of faith, and your victories with us, and watch how it sparks a chain reaction of love and positivity!",
    },
    {
      title: "Join the movement and let's set the world ablaze with love!",
      detail:
        " Join the ALL ABOUT LOVE IN ACTION community today and become part of a global movement that's redefining the power of love and connection!  Let's make love a global reality. ",
    },
  ];
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const sendDetails = async () => {
    try {
      const doc = await addDoc(collection(db, "members"), memberDetail);
      if (doc) {
        setShowCard(true);
      }
    } catch (error) {
      toast.error("Unable to send details");
      console.log(error);
    }
  };

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-full px-2 h-full flex-col">
      <div className="mx-0 md:mx-auto mt-24   w-full  h-10/12 bg-white flex flex-col items-center">
        <Card className="px-0 w-full flex-row-reverse" placeholder={undefined}>
          <CardBody placeholder={undefined}>
            <h1 className="text-md md:text-2xl text-center font-bold font-OleoScript text-Red py-1 md:py-6  shadow-none">
              Join us today and become part of this unique profoundness!
            </h1>
            {accordionContent.map((i, n) => (
              <Accordion
                open={open === n + 1}
                icon={<Icon id={n + 1} open={open} />}
                key={n}
                className="mb-2 rounded-lg shadow-none  px-0"
                placeholder={undefined}
              >
                <AccordionHeader
                  onClick={() => handleOpen(n + 1)}
                  className={`mx-0 border-b-0 transition-colors font-OleoScript  text-md md:text-lg ${
                    open === n + 1 ? "text-black  " : "text-gray-800"
                  }`}
                  placeholder={undefined}
                >
                  {i.title}
                </AccordionHeader>
                <AccordionBody className="pt-0 text-sm text-black font-normal">
                  {i.detail}
                </AccordionBody>
              </Accordion>
            ))}
            <Button
              variant="text"
              className="flex text-[#ffffff] bg-Red hover:bg-red-600 items-center gap-2"
              placeholder={undefined}
              onClick={() => setShowForm(true)}
            >
              Register
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </CardBody>
          <CardHeader
            shadow={true}
            floated={false}
            className="m-0 w-2/5 md:w-2/6 shrink-0 rounded-none"
            placeholder={undefined}
          >
            <img
              src="/img/invite-image-4.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
        </Card>
        {showForm && (
          <div className="fixed pt-10 md:pt-20 top-0 left-0 right-0 w-full h-full backdrop-blur-sm flex flex-col overflow-y-auto">
            <div className="mx-auto py-10 md:pt-4  flex flex-col items-center text-gray-700 bg-white border border-gray-100 shadow-xl rounded-xl  ">
              <h4
                className=" w-full pt-1 pr-4 text-2xl text-blue-gray-700 text-right cursor-pointer"
                onClick={() => setShowForm(false)}
              >
                X
              </h4>
              <h4 className=" flex  text-2xl mb-2  font-OleoScript font-semibold leading-snug   text-[#e30202]">
                Membership Form
              </h4>
              <p className=" mx-10 flex text-clip  font-sans text-md text-center font-normal text-gray-900">
                Nice to meet you! Enter your details bellow.
              </p>
              <form
                className="mx-auto mt-8 px-10 w-full flex flex-col mb-2 "
                onSubmit={(e) => {
                  e.preventDefault();
                  sendDetails();
                }}
              >
                <div className="flex flex-col gap-6 mb-1">
                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Your Full Name
                  </h6>
                  <div className="  h-11 w-full min-w-[200px]">
                    <input
                      type="text"
                      required
                      placeholder="name"
                      onChange={(e) =>
                        setMemberDetail((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>

                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Gender
                  </h6>
                  <div className="  h-11 w-full min-w-[200px]">
                    <Select
                      isSearchable
                      defaultValue={null}
                      onChange={(e) =>
                        setMemberDetail((prev) => ({
                          ...prev,
                          gender: e!.value,
                        }))
                      }
                      options={options}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Your Email
                  </h6>
                  <div className="  h-11 w-full min-w-[200px]">
                    <input
                      type="email"
                      required
                      placeholder="email"
                      onChange={(e) =>
                        setMemberDetail((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>

                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Phone line
                  </h6>

                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="tel"
                      required
                      placeholder="phone.."
                      onChange={(e) =>
                        setMemberDetail((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>

                  {/* <Textarea
                    required
                    variant="outlined"
                    label="Message"
                    placeholder="message."
                    onChange={(e) =>
                      setMemberDetail((prev) => ({ ...prev, message: e.target.value }))
                    }
                  /> */}
                </div>
                <button
                  className="mt-6 py-2 block w-full select-none rounded-lg  bg-[#e30202]   px-6 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  onClick={() => setShowCard(true)}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
        {showCard && (
          <SuccessCard
            showCard={showCard}
            setShowCard={setShowCard}
            Return_URL={PUBLICROUTES.BECOME_MEMBER}
            Text={"Registration successful"}
          />
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

const Icon = ({ id, open }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
};

export default BecomeMember;
