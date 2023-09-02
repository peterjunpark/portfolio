"use server";

import { Resend } from "resend";
import { parseErrorMsg, validateEmailString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateEmailString(email, 69) || !validateEmailString(message, 6969)) {
    return {
      error: "Invalid email :c",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "peterjpark@pm.me",
      subject: "MSG FROM peterjunpark.me",
      text: message as string,
      reply_to: email as string,
    });

    return {
      success: "Email send :D",
    };
  } catch (err: unknown) {
    return {
      error: parseErrorMsg(err),
    };
  }
};
