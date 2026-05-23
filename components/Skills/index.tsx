import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiGraphql, SiTailwindcss, SiRedux, SiStripe, SiZod } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import { TsIcon } from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: <TbBrandNextjs />,
  },
  {
    name: "React.js",
    href: "https://reactjs.org/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <TsIcon />,
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: <SiTailwindcss color="#38B2AC" />,
  },
  {
    name: "Redux",
    href: "https://redux.js.org/",
    icon: <SiRedux color="#764ABC" />,
  },
  {
    name: "GraphQL",
    href: "https://graphql.org/",
    icon: <SiGraphql color="#E535AB" />,
  },
  {
    name: "Stripe",
    href: "https://stripe.com/",
    icon: <SiStripe color="#635BFF" />,
  },
  {
    name: "Firebase",
    href: "https://firebase.google.com/",
    icon: <SiFirebase color="#FF8F00" />,
  },
  {
    name: "Zod",
    href: "https://zod.dev/",
    icon: <SiZod color="#3068B7" />,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="md:mt-20 mt-14"
      title={"Skills"}
      description={
        "These are the core tools and technologies I use day-to-day, with a strong focus on the React ecosystem and fintech integrations."
      }
    >
      <Container>
        <div
          className="max-w-xl mt-8 grid grid-cols-3 lg:grid-cols-3 gap-6"
          ref={ref}
        >
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};