import { Section } from "components";
import { FC } from "react";

import { DesktopProjectCard } from "./libs/ProjectCard/Desktop";
import { MobileProjectCard } from "./libs/ProjectCard/Mobile";

const projects = [
  {
    title: "STRABL Merchant/Customer Dashboard",
    subtitle: "",
    description:
      "A merchant dashboard for a supercharged checkout & payment solution for e-commerce and digital transactions.",
    technologies: ["React.js, Tailwind CSS, Redux & Redux Toolkit"],
    externalLink: "https://dashboard.strabl.io/",
    githubLink: "",
    videoLink: `/videos/strabl.webm`,
  },
  {
    title: "Fewchore Finance Fintech Web Application",
    subtitle: "",
    description:
      "Fewchore Finance Company Limited is an avant-garde financial services company, providing consumer & business loans, local & international trade financing, oil & gas services financing, and other first-rate financial services to clients.",
    technologies: ["React.js, SCSS"],
    githubLink: "",
    videoLink: `/videos/fewchore.webm`,
    externalLink: "https://ibank.fewchoremobile.com/",
  },
  {
    title: "Cypher X Web Application",
    subtitle: "",
    description:
      "A streamlined web application that provides seamless global e-commerce solution, allowing users to make secure transactions.",
    technologies: ["React.js, Bootstrap"],
    githubLink: "",
    videoLink: `/videos/cypherx.webm`,
    externalLink: "https://app-staging.cypherxwallet.com/",
  },
  {
    title: "Picadailys Admin Dashboard",
    subtitle: "",
    description:
      "A performant dashboard for the Picadailys mobile application, which helps you to market your brand to your target audience by creating ads campaign and content for your brand's advertisement.",
    technologies: ["React.js, SCSS"],
    externalLink: "https://admin.picadailys.com/",
    githubLink: "",
    videoLink: "/videos/picadailys.gif",
  },
  // {
  //   title: "Klosanow",
  //   subtitle: "",
  //   description:
  //     "An Edtech product that allows tutors in Sub-saharan Africa create pre recorded video lessons.",
  //   technologies: ["React.js"],
  //   externalLink: "https://klosanow.com/",
  //   githubLink: "",
  //   videoLink: `/images/edutrack.jpg`,
  // },
];

export const Projects: FC = () => {
  return (
    <Section
      className="mt-16 mb-16 md:mt-24"
      title={"Projects"}
      description={
        "Here are some of my favourite projects that I have worked on. I hope you like them as much as I do!"
      }
    >
      <div className="px-4 mx-auto mt-10 md:hidden max-w-screen-md grid grid-cols-1 gap-4 place-items-center">
        {projects.map((project, i) => (
          <MobileProjectCard key={i} {...project} />
        ))}
      </div>
      <div className="hidden px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg md:flex flex-col gap-3">
        {projects.map((project, i) => (
          <DesktopProjectCard key={i} {...project} rightShift={i % 2 === 0} />
        ))}
      </div>
    </Section>
  );
};
