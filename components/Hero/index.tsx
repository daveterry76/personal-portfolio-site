import { Container, MediaIcon } from "components";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperclip } from "react-icons/fa";

import { HandWave } from "./libs/HandWave";
import { HeroLink } from "./libs/HeroLink";

export const Hero: FC = () => {
  return (
    <Container className="pt-24 md:pt-32">
      <motion.img
        src="/images/david.jpg"
        alt="Dappa David"
        className="overflow-hidden rounded-full w-28 h-28 md:w-32 md:h-32 mt-8 ring-4 ring-blue-700 ring-offset-2"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        transition={{ damping: 5, mass: 1, delay: 6 }}
        initial="hidden"
        animate="visible"
      />

      <div className="flex items-center">
        <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900">
          Hi, I'm David!
        </h1>
        <HandWave className="text-4xl md:text-5xl" />
      </div>

      <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
        Frontend Engineer{" "}
        <span className="text-blue-700">· Fintech & Payments</span>
        <br />
        <span className="text-base md:text-xl font-medium">
          Currently at{" "}
          <HeroLink title="Picadailys" href="https://picadailys.com/" />
          {" · "}Previously at{" "}
          <HeroLink title="STRABL" href="https://strabl.io/" />
        </span>
      </p>

      <div className="flex mt-8 gap-1">
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/daveterry76"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://www.linkedin.com/in/daviddappa/"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://twitter.com/daveterry76"
          className="mr-4"
        />
        <MediaIcon
          icon={
            <FaPaperclip className="w-6 h-6 md:w-7 md:h-7 animate-bounce hover:animate-spin" />
          }
          href="https://docs.google.com/document/d/1r3fBnffkIBkoF98Ajh8iP9pFbnQMuvZX/edit?usp=sharing&ouid=113785130869700569417&rtpof=true&sd=true"
        />
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <p className="text-base md:text-xl dark:text-white-700 text-black-700">
          I'm a Frontend Engineer with <strong>3+ years</strong> of experience
          building fintech and payments products for global companies — including
          an international payments platform for{" "}
          <strong>STRABL Technologies (Dubai)</strong> and the{" "}
          <strong>Fewchore Finance Internet Banking App</strong>.
        </p>
        <p className="text-base md:text-xl dark:text-white-700 text-black-700">
          I specialise in <strong>React.js</strong>, <strong>Next.js</strong>,
          and <strong>TypeScript</strong>, with hands-on experience integrating
          payment gateways like <strong>Stripe</strong> and{" "}
          <strong>Paymob</strong>, building KYC workflows, and delivering
          scalable financial dashboards.
        </p>
        <p className="text-base md:text-xl dark:text-white-700 text-black-700">
          I love collaborating in cross-functional teams to ship products that
          are fast, accessible, and genuinely useful.
        </p>
      </div>
    </Container>
  );
};