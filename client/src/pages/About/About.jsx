import { useState, useEffect } from "react";
import { VStack, Text, Link, Image, useColorMode } from "@chakra-ui/react";
import githublogo from "../../assets/github-logo.png";
import linkedinlogo from "../../assets/linkedin-logo.png";

export default function About() {
  const { colorMode } = useColorMode();
  const [filter, setFilter] = useState("none");

  useEffect(() => {
    // Invert colors for dark mode
    if (colorMode === "dark") {
      setFilter("invert(100%)");
    } else {
      setFilter("none");
    }
  }, [colorMode]);

  return (
    <VStack h="100%">
      <Link href="https://github.com/Felaupla">
        <Image src={githublogo} alt="GitHub Logo" style={{ filter }} w="60px" />
      </Link>
      <Link href="https://www.linkedin.com/in/felipe-planes">
        <Image
          src={linkedinlogo}
          alt="LinkedIn Logo"
          style={{ filter }}
          w="90px"
        />
      </Link>

      <Text as="b" fontSize="16px">
        <Link href="https://myportfolio-felaupla.vercel.app/">
          2023 - FPCode
        </Link>
      </Text>
    </VStack>
  );
}
