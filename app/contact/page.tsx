"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { SparklesCore } from "../components/ui/sparkles";
import { Textarea } from "../components/ui/textarea";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

export default function ContactPage() {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      const response = await axios.post("/api/contact", values);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full absolute inset-0 h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent animate-fadeIn row-span-1 group/bento hover:shadow-xl transition duration-200  dark:shadow-none ">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact Me
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Feel free to reach out with any questions or comments!
        </p>

        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {/* <Form className="my-8">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  id="firstname"
                  placeholder="john"
                  type="text"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  placeholder="Doe"
                  type="text"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                type="email"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={3}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send Message &rarr;
              <BottomGradient />
            </button>
          </Form> */}
          <Form className="my-8">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First Name</Label>
                <Field
                  id="firstname"
                  name="firstname"
                  placeholder="john"
                  type="text"
                  as={Input}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last Name</Label>
                <Field
                  id="lastname"
                  name="lastname"
                  placeholder="Doe"
                  type="text"
                  as={Input}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Field
                id="email"
                name="email"
                placeholder="you@example.com"
                type="email"
                as={Input}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message</Label>
              <Field
                id="message"
                name="message"
                placeholder="Your message"
                rows={3}
                as={Textarea}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send Message &rarr;
              <BottomGradient />
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
