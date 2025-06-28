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
        alt="A beautiful face"
        className="overflow-hidden rounded-full w-28 h-28 md:w-32 md:h-32 mt-8"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{
          damping: 5,
          mass: 1,
          delay: 6,
        }}
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
        Frontend Engineer <br />
        Previously&nbsp;
        <HeroLink title="STRABL" href="https://strabl.io/" />
      </p>
      <div className="flex mt-8">
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
      <div className="mt-10">
        <p className="mb-4 text-base md:text-xl dark:text-white-700 text-black-700">
          I am an experienced Frontend Engineer with a proven track record of
          crafting and creating products for global companies.
        </p>
        <p className="mb-4 text-base md:text-xl dark:text-white-700 text-black-700">
          I love collaborating in teams to create aesthetic and scalable web
          solutions.
        </p>
        <p className="mb-4 text-base md:text-xl dark:text-white-700 text-black-700">
          I build mostly in JavaScript & TypeScript with a strong proficiency in
          technologies like React.js and Next.js, though I'm always excited to
          try out new technologies.
        </p>
      </div>
    </Container>
  );
};
