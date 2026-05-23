import { Container, MediaIcon } from "components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container>
      <footer className="border-t border-gray-700 border-opacity-20 dark:border-white-300 dark:border-opacity-10">
        <div className="flex my-8 justify-center gap-2">
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
        </div>
        <p className="text-center text-sm text-black-700 dark:text-white-500 pb-8 opacity-60">
          Designed & built by Dappa David
        </p>
      </footer>
    </Container>
  );
};