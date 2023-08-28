import React, { useState, useEffect } from 'react';
import { Box, Text, Link, Image, Spacer, useColorMode, HStack } from '@chakra-ui/react';
import githublogo from '../../assets/github-logo.png';
import linkedinlogo from '../../assets/linkedin-logo.png';

export default function About() {
  const { colorMode } = useColorMode();
  const [filter, setFilter] = useState('none');

  useEffect(() => {
    // Invert colors for dark mode
    if (colorMode === 'dark') {
      setFilter('invert(100%)');
    } else {
      setFilter('none');
    }
  }, [colorMode]);

  return (
    <Box >
      <Box display="flex" alignItems="center">
        <Link href="https://github.com/Felaupla">
          <Image
            src={githublogo}
            alt="GitHub Logo"
            style={{ filter }}
            w="40px"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/felipe-planes">
          <Image
            src={linkedinlogo}
            alt="LinkedIn Logo"
            style={{ filter }}
            w="50px"
          />
        </Link>
      </Box>
        <Text as="b" fontSize="16px"> 
          <Link href="https://myportfolio-felaupla.vercel.app/">Portfolio Link</Link>
        </Text>
      <Text fontSize="10px">2023 - FPCode</Text>
    </Box>
  );
}
