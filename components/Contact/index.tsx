import { Container, Section } from "components";
import { FC } from "react";

import { Form } from "./form";

export const Contact: FC = () => {
  return (
    <Section
      className="mt-16 mb-16 md:mt-28"
      title={"Want to connect?"}
      description={
        "I really appreciate it when people go out of their way to get in touch. I'll make sure to get back to you as soon as possible!"
      }
    >
      <Container className="my-4 flex justify-center">
        <Form />
      </Container>
    </Section>
  );
};
