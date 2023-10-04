import React from "react";
import {
  Html,
  Body,
  Heading,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProp = {
  message: string;
  senderEmail: string;
};

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProp) => {
  return (
    <Html>
      <Head></Head>
      <Preview>New message from portfolio</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>You recieved an email from you portfolio</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
