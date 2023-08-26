import githublogo from "../../assets/github-logo.png";
import linkedinlogo from "../../assets/linkedin-logo.png";
import { Text, Link, Image, Spacer } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box>
      <Text as="b">About</Text>
      <Text>Credit Card & CBU Validator (Argentinian Accounts)</Text>

      <Box>
        <Link href="https://github.com/Felaupla">
          <Image src={githublogo} alt="GitHub Logo" />
        </Link>
        <Spacer />
        <Link href="https:///www.linkedin.com/in/felipe-planes">
          <Image src={linkedinlogo} alt="LinkedIn Logo" />
        </Link>
        <Link href="https://myportfolio-felaupla.vercel.app/">
          "My portfolio"
        </Link>
      </Box>
    </Box>
  );
};
