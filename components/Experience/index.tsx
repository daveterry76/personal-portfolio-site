import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useMdScreen } from "lib";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Item } from "./libs/Item";

const experience = [
  {
    title: "Frontend Engineer",
    place: "Picadailys",
    date: "November 2025 – Present",
  },
  {
    title: "Frontend Developer",
    place: "Proliance Limited",
    date: "July 2025 – November 2025",
  },
  {
    title: "Frontend Engineer",
    place: "STRABL Technologies",
    date: "February 2025 – May 2025",
    highlight: true,
  },
  {
    title: "Frontend Developer",
    place: "CypherX Limited",
    date: "September 2024 – January 2025",
  },
  {
    title: "Frontend Developer",
    place: "Hagion International Limited",
    date: "March 2024 – January 2025",
  },
  {
    title: "Frontend Developer",
    place: "Talentoven Limited",
    date: "December 2023 – August 2024",
    highlight: true,
  },
  {
    title: "Frontend Engineer",
    place: "Meghee",
    date: "June 2024 – July 2024",
  },
  {
    title: "Frontend Developer",
    place: "Helixgade Technologies",
    date: "March 2022 – January 2023",
  },
];

export const Experience: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const mdScreen = useMdScreen();

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
      className="mt-16 mb-16 md:mt-24"
      title={"Experience"}
      description={
        "I've had the honour of building fintech and payments products for companies across Africa, the Middle East, and beyond."
      }
    >
      <Container className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          {mdScreen ? (
            <>
              <div>
                {experience.slice(0, 4).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 3}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {experience.slice(4).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === experience.slice(4).length - 1}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
            </>
          ) : (
            <div>
              {experience.map((item, i) => (
                <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  controls={controls}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};