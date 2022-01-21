import { Flex, Container, Box, Text, Icon } from "@chakra-ui/react";
import {
   FaSearch,
   FaMusic,
   FaUser,
   FaHeart,
   FaSignOutAlt,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { GiBackwardTime, GiStack } from "react-icons/gi";

import MenuItem from "./menuItem";

const Menu = () => {
   return (
      <Box minW="15%">
         <Container maxW="97%" h="full" centerContent>
            <Flex
               w="full"
               h="full"
               direction="column"
               align="center"
               justify="start"
               py="5"
               px="4"
            >
               <Flex w="full" direction="column" mb="4">
                  <MenuItem icon={AiFillHome} text="Home" current />
                  <MenuItem icon={FaSearch} text="Search" />
                  <MenuItem icon={RiCompassDiscoverFill} text="Discover" />
                  <MenuItem icon={FaMusic} text="Clips" />
                  <MenuItem icon={FaUser} text="Producers" />
               </Flex>

               <Flex w="full" direction="column" mb="4">
                  <Text
                     color="gray.light"
                     textTransform="uppercase"
                     mb="4"
                     letterSpacing="0.3rem"
                  >
                     library
                  </Text>
                  <MenuItem icon={GiBackwardTime} text="Recent" />
                  <MenuItem icon={FaHeart} text="Favorites" />
                  <MenuItem icon={GiStack} text="Local" />
               </Flex>

               <Flex w="full" direction="column" mb="4">
                  <Text
                     color="gray.light"
                     textTransform="uppercase"
                     mb="4"
                     letterSpacing="0.3rem"
                  >
                     general
                  </Text>
                  <MenuItem icon={FiSettings} text="Settings" />
                  <MenuItem icon={FaSignOutAlt} text="Log Out" />
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default Menu;
