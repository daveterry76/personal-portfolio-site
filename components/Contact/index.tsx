import { Container, Section } from "components";
import { FC } from "react";

import { Form } from "./form";

export const Contact: FC = () => {
  return (
    <Section
      className="mt-16 mb-16 md:mt-28"
      title={"Let's work together"}
      description={
        "Open to full-time roles and interesting projects. Send me a message and I'll get back to you as soon as possible."
      }
    >
      <Container className="my-4 flex justify-center">
        <Form />
      </Container>
    </Section>
  );
};