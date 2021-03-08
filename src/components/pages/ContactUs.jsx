import React from "react";

import Background from "../../assets/img/ContactusBG.png";

import { BiRightArrow } from "react-icons/bi";
import { useForm } from "react-hook-form";

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
    console.log(errors);
  };

  return (
    <div className="h-screen container mx-auto flex flex-col items-center justify-center md:pt-0">
      <div className="w-full flex flex-row md:px-5">
        <div className="flex-1 mx-auto my-auto px-5">
          <h1 className="font-righteous text-pallete-fb8 text-xl text-center mb-20 mx-10 md:text-3xl md:mx-20 lg:text-5xl">
            We would love to hear your thoughts
          </h1>
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
            <div className="m-2">
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

              <label htmlFor="Message">
                <p className="text-sm sm:text-2xl">Message</p>
                <textarea
                  className="w-full h-40 py-2 bg-transparent border-b-2 border-gray-400  focus:outline-none focus:border-pallete-fb8 resize-none"
                  name="Message"
                  placeholder="Your message"
                  ref={register({
                    required: "Enter a message",
                  })}
                ></textarea>
              </label>

              <button
                className="mt-3 text-md  md:text-2xl hover:text-pallete-fb8 cursor-pointer flex items-center"
                type="submit"
              >
                Submit
                <BiRightArrow className="ml-1.5 -mb-0.5" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex-1 hidden lg:block">
          <img src={Background} alt="contactusBG" className="rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
