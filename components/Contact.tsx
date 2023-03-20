"use client";
import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:yifei.wang10@mail.mcgill.ca?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  return (
    <section id="contact">
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact Me
        </h3>
        <div className="flex flex-col space-y-10">
          <div className="space-y-10 text-neutral-900 dark:text-neutral-200">
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-lg md:text-2xl lg:text-2xl">
                yifei.wang10@mail.mcgill.ca
              </p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-lg md:text-2xl lg:text-2xl">Montreal, QC</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
          >
            <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-80 md:w-auto"
                type="text"
              />{" "}
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput w-80 md:w-auto"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput "
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button className="bg-orange-300 py-3 md:py-5 px-10 rounded-lg text-white font-bold text-lg">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
