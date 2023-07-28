import { useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  //const colorShop = useColorModeValue("black", "white");
  return (
    <IconButton
      display="flex"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon color="white" />}
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
