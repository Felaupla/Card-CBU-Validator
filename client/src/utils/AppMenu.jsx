import {
  Avatar,
  AvatarBadge,
  Button,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import ColorModeSwitcher from "./ColorModeSwitcher";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function AppMenu() {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <Flex justifyContent="space-between">
      <Menu w='10%'>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList w='20px'>
          <MenuItem minH='40px'>
            <Button >
              <ColorModeSwitcher initialColorMode="dark" p="20px" />
            </Button>
          </MenuItem>
          <MenuItem minH='40px'>
            {isAuthenticated ? (
              <LogoutButton p="5%" w="100%" />
            ) : (
              <LoginButton p="5%"  />
            )}
          </MenuItem>
        </MenuList>
      </Menu>
      <Box>
        {isAuthenticated ? (
          <Avatar name={user.name} src={user.picture} onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }>
            <AvatarBadge boxSize="1.15em" bg="green.500" />
          </Avatar>
        ) : (
          ""
        )}
      </Box>
    </Flex>
  );
}