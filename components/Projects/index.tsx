import { Section } from "components";
import { FC } from "react";

import { DesktopProjectCard } from "./libs/ProjectCard/Desktop";
import { MobileProjectCard } from "./libs/ProjectCard/Mobile";

const projects = [
  {
    title: "STRABL Merchant & Admin Dashboard",
    subtitle: "",
    description:
      "Payment infrastructure dashboard for a Dubai-based fintech. Features subscription management, KYC document workflows, and integrated Stripe & Paymob payment gateways for e-commerce and digital transactions.",
    technologies: ["React.js", "TypeScript", "Redux", "Tailwind CSS"],
    externalLink: "https://dashboard.strabl.io/",
    githubLink: "",
    videoLink: `/videos/strabl.webm`,
  },
  {
    title: "Fewchore Finance Internet Banking App",
    subtitle: "",
    description:
      "Full-featured internet banking platform offering consumer & business loans, local & international trade financing, oil & gas services financing, and financial dashboards for retail and business customers.",
    technologies: ["React.js", "SCSS"],
    githubLink: "",
    videoLink: `/videos/fewchore.webm`,
    externalLink: "https://ibank.fewchoremobile.com/",
  },
  {
    title: "Picadailys Website",
    subtitle: "",
    description:
      "Public-facing marketing website for a brand advertising and content creation platform, helping businesses across Africa create targeted ad campaigns and branded content.",
    technologies: ["Next.js", "React.js", "Chart.js"],
    externalLink: "https://picadailys.com/",
    githubLink: "",
    videoLink: `/videos/picadailys.gif`,
  },
  {
    title: "CypherX Wallet Website",
    subtitle: "",
    description:
      "Website for a crypto wallet product enabling seamless global e-commerce and secure digital transactions for users across Africa.",
    technologies: ["React.js", "Bootstrap"],
    githubLink: "",
    videoLink: `/videos/cypherx.webm`,
    externalLink: "https://cypherxwallet.com/",
  },
];

export const Projects: FC = () => {
  return (
    <Section
      className="mt-16 mb-16 md:mt-24"
      title={"Projects"}
      description={
        "A selection of fintech, payments, and web products I've helped design and build."
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