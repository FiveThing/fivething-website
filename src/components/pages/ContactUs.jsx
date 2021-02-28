import React from "react";

import { BiRightArrow } from "react-icons/bi";
import { useForm } from "react-hook-form";

import { ReactComponent as BlobsContactUs } from "../../assets/img/Blobs-ContactUs.svg";
import ContactUsUndraw from "../../assets/img/Contactus-undraw.svg";

import Input from "../layout/Input";

const ContactUs = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen container mx-auto relative flex items-center">
      <div className="mx-10 md:mx-28 space-y-7 z-50">
        <h1 className="font-majorMono text-3xl sm:text-4xl md:text-5xl">
          START A PROJECT WITH US
        </h1>
        <div className="flex">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row">
              <Input name="Name" placeholder="Your name" reg={register} />
              <Input
                name="Subject"
                placeholder="Enter a subject"
                reg={register}
              />
            </div>
            <Input name="Email" placeholder="Your email" reg={register} />
            <div className="m-2">
              <label htmlFor="Message">
                <p className="text-2xl">Message</p>
                <textarea
                  className="w-full h-24 py-2 bg-transparent border-b-2 border-white  focus:outline-none focus:border-pallete-ff9"
                  name="Message"
                  id=""
                  ref={register}
                ></textarea>
              </label>
            </div>
            <button
              className="m-2 text-md  md:text-2xl hover:text-pallete-ff9 cursor-pointer flex items-center"
              type="submit"
            >
              Submit
              <BiRightArrow className="ml-1.5 -mb-0.5" />
            </button>
          </form>
        </div>
      </div>

      <BlobsContactUs className="hidden lg:block absolute -right-40 top-50%" />
      <img
        className="hidden lg:block z-10 absolute top-50% -right-40"
        src={ContactUsUndraw}
        alt="Contact Us Undraw"
      />
    </div>
  );
};

export default ContactUs;
