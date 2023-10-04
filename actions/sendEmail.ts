"use server";
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "something went wrong";
  }

  return message;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  //server side validation
  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(senderEmail, 5000)) {
    return {
      error: "Invalid email",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "chunyousu.we@gmail.com",
      subject: "Message from your portfolio",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string}),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data
  }
};
