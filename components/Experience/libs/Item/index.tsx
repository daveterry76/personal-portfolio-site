import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { AnimationControls } from "framer-motion";

interface Props {
  title: string;
  place: string;
  date: string;
  custom: number;
  last?: boolean;
  first?: boolean;
  highlight?: boolean;
  controls?: AnimationControls;
  className?: string | undefined;
}

export const Item: FC<Props> = ({
  title,
  place,
  date,
  last,
  first,
  highlight,
  controls,
  custom,
  className,
}: Props) => {
  return (
    <motion.div
      className={clsx(
        "relative flex items-center",
        !first && "mt-14",
        className
      )}
      initial="initial"
      variants={{
        initial: { opacity: 0 },
      }}
      animate={controls}
      custom={custom}
    >
      {!last && (
        <div
          className="absolute h-20 top-14 w-0.5 dark:bg-white-300 bg-black-700 opacity-20"
          style={{ left: "0.2rem" }}
        />
      )}
      <div
        className={clsx(
          "w-2.5 h-2.5 rounded-full flex-shrink-0",
          highlight
            ? "bg-blue-700"
            : "bg-gray-700 dark:bg-white-700"
        )}
      />
      <div className="ml-8 dark:text-white-700 text-black-700">
        <p className="font-medium italic text-sm">{title}</p>
        <p className={clsx(
          "text-lg font-semibold",
          highlight && "text-black-900 dark:text-white-900"
        )}>
          {place}
        </p>
        <p className="flex items-center text-sm mt-0.5 dark:text-white-500 text-black-700 opacity-70">
          {date}
        </p>
      </div>
    </motion.div>
  );
};