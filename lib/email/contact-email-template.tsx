import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Section,
  Container,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactEmailTemplateProps = {
  message: string;
  email: string;
};

export default function ContactEmailTemplate({
  message,
  email,
}: ContactEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from peterjpark.me</Preview>
      <Tailwind>
        <Body className="bg-slate-100">
          <Container>
            <Section className="borderDim my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                Yay! You got an email from your portfolio!
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
