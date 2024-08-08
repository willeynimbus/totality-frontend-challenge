"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className="flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Your Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              maxLength: 20,
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
