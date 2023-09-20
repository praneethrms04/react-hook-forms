import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

const FundamentalForm = () => {
  const { register, control, formState, handleSubmit } = useForm();
  // console.log(formState);
  const { errors } = formState;
  console.log(errors);

  //   const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        // noValidate
        className="mx-auto mb-0 mt-8 max-w-md space-y-4 border border-cyan-600 p-5"
      >
        <div>
          <label htmlFor="username" className="sr-only">
            Email
          </label>
          <div className="relative">
            <input
              type="username"
              id="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "username is required",
                },
              })}
              className="w-full rounded-lg border border-gray-500 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter username"
            />
            <p> {errors.username?.message} </p>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            email
          </label>

          <div className="relative">
            <input
              type="text"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email",
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return (
                      fieldValue !== "admin@gmail.com" ||
                      "Enter different email"
                    );
                  },
                  notDomained: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("baddomain.com") ||
                      "This domain is not supporting"
                    );
                  },
                },
              })}
              className="w-full rounded-lg border border-gray-500 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
            <p> {errors.email?.message} </p>
          </div>
        </div>

        <div>
          <label htmlFor="channel" className="sr-only">
            channel
          </label>

          <div className="relative">
            <input
              type="text"
              id="channel"
              {...register("channel", {
                required: {
                  value: true,
                  message: "channel is required",
                },
              })}
              className="w-full rounded-lg border border-gray-500 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter channel"
            />
          </div>
          <p> {errors.channel?.message} </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default FundamentalForm;
