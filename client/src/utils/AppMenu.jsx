import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Flex,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CreditCardValidator from "../pages/CreditCardValidator/CreditCardValidator";
import CbuValidator from "../pages/CbuValidator/CbuValidator";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function AppMenu() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Flex>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <Link to={<CreditCardValidator />}></Link>

          <Link to={<CbuValidator />}></Link>

          <MenuDivider />
          <MenuItem>
            <Center>
              <ColorModeSwitcher initialColorMode="dark" p="20px" />
            </Center>
          </MenuItem>
          <MenuItem>
            {isAuthenticated ? <LogoutButton p="5%" /> : <LoginButton p="5%" />}
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
