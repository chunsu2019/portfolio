"use client";
import SectionHeading from "@/components/section-heading";
import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

import SubmitBtn from "@/components/submit-btn";

export default function page() {
  return (
    <motion.section
      className="flex flex-col gap-6 mt-5 text-center w-[80%] text-[0.8rem] md:w-[70%] md:text-[1.2rem] lg:w-[50%] xl:w-[40%] xl:text-[1.3rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:chunyousu.we@gmail.com">
          chunyousu.we@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="flex flex-col"
        action={async (formData: FormData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          className="h-14 rounded-lg borderBlack p-4"
          placeholder="your email"
          required
          name="senderEmail"
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="your message"
          required
          name="message"
          maxLength={500}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
