import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useMdScreen } from "lib";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Item } from "./libs/Item";

const experience = [
  {
    title: "Frontend Engineer (Contract)",
    place: "STRABL Technologies",
    date: "February 2025 - May 2025",
  },
  {
    title: "Frontend Engineer",
    place: "Cypher X",
    date: "September 2024 - Present",
  },
  {
    title: "Frontend Developer",
    place: "Hagion International Limited",
    date: "March 2024 - December 2024",
  },
  {
    title: "Frontend Engineer",
    place: "TalentOven Limited (Contract)",
    date: "December 2023 - August 2024",
  },
  {
    title: "Next.js Developer (Contract)",
    place: "Meghee",
    date: "June 2024 - July 2024",
  },
  {
    title: "Frontend Developer",
    place: "Helixgade Technologies (Contract)",
    date: "April 2022 - December 2022",
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
        "I've had the honour of working at these amazing companies. Hopefully your company will be there too."
      }
    >
      <Container className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          {mdScreen ? (
            <>
              <div>
                {experience.slice(0, 2).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 1}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {experience.slice(2).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 1}
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
