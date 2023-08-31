import { useColorMode } from "@chakra-ui/react";
import { IconButton, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  //const colorShop = useColorModeValue("black", "white");
  return (

    <IconButton
      display="flex"
      icon={colorMode === "light" ? <Button w="100%"><MoonIcon w="100%"/> </Button>: <Button><SunIcon w="100%" color="white" /></Button>}
      onClick={toggleColorMode}
      size="4xl"
      variant="ghost"
      // color="current"
      
      aria-label={
        colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      />

  );
}
