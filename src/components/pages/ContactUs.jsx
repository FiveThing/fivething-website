import React from "react";

import { BiRightArrow } from "react-icons/bi";
import { useForm } from "react-hook-form";

import { ReactComponent as BlobsContactUs } from "../../assets/img/Blobs-ContactUs.svg";
import ContactUsUndraw from "../../assets/img/Contactus-undraw.svg";

import Input from "../layout/Input";

import emailjs from "emailjs-com";
import { useToasts } from "react-toast-notifications";

const ContactUs = () => {
  const { addToast } = useToasts();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Name: "",
      Subject: "",
      Email: "",
      Message: "",
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const tempID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const srvcID = process.env.REACT_APP_SERVICE_ID;
    try {
      await emailjs.sendForm(srvcID, tempID, e.target, userID);
      addToast("Email successfully sent", {
        appearance: "success",
        autoDismiss: true,
      });
      e.target.reset();
    } catch (error) {
      addToast("Email failed to send", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const onErrors = async (errors) => {
    try {
      if (errors.Name) {
        addToast(errors.Name.message, {
          appearance: "error",
          autoDismiss: true,
        });
      }
      if (errors.Subject) {
        addToast(errors.Subject.message, {
          appearance: "error",
          autoDismiss: true,
        });
      }
      if (errors.Message) {
        addToast(errors.Message.message, {
          appearance: "error",
          autoDismiss: true,
        });
      }
      if (errors.Email || errors.Email.type === "pattern") {
        addToast("Invalid Email", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full container mx-auto relative flex items-center">
      <div className="mx-10 md:mx-28 space-y-7 z-50">
        <h1 className="font-majorMono text-3xl sm:text-4xl md:text-5xl">
          START A PROJECT WITH US
        </h1>
        <div className="flex flex-col">
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
            <div className="flex flex-col md:flex-row">
              <Input
                name="Name"
                placeholder="Your name"
                reg={register({ required: "Enter a name" })}
              />
              <Input
                name="Subject"
                placeholder="Enter a subject"
                reg={register({ required: "Enter a subject" })}
              />
            </div>
            <Input
              name="Email"
              placeholder="Your email"
              reg={register({
                required: "Invalid email",
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            <div className="m-2">
              <label htmlFor="Message">
                <p className="text-sm sm:text-2xl">Message</p>
                <textarea
                  className="w-full h-24 py-2 bg-transparent border-b-2 border-white  focus:outline-none focus:border-pallete-ff9"
                  name="Message"
                  ref={register({
                    required: "Enter a message",
                  })}
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

      <BlobsContactUs className="hidden xl:block absolute -right-40 top-50%" />
      <img
        className="hidden xl:block  z-10 absolute top-50% -right-40"
        src={ContactUsUndraw}
        alt="Contact Us Undraw"
      />
    </div>
  );
};

export default ContactUs;
