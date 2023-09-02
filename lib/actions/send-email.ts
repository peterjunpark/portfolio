"use server";

import { Resend } from "resend";
import React from "react";
import { parseErrorMsg, validateEmailString } from "@/lib/utils";
import ContactEmailTemplate from "@/lib/email/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateEmailString(email, 69) || !validateEmailString(message, 6969)) {
    return {
      error: "Invalid email :c",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "peterjpark@pm.me",
      subject: "MSG FROM peterjunpark.me",
      react: React.createElement(ContactEmailTemplate, {
        message: message as string,
        email: email as string,
      }),
      reply_to: email as string,
    });

    return {
      success: data,
    };
  } catch (err: unknown) {
    return {
      error: `Server Action Error: ${parseErrorMsg(err)}`,
    };
  }
};
