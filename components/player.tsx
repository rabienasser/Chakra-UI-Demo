import { Flex, Container, Text, Icon, Box, Image } from "@chakra-ui/react";
import {
   FaStepBackward,
   FaStepForward,
   FaPlay,
   FaVolumeUp,
   FaHeart,
} from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { RiPlayListFill } from "react-icons/ri";

import PlayerControls from "./playerControls";

const Player = () => {
   return (
      <Box bg="gray.dark" w="100%" h="15%" color="white">
         <Container centerContent h="100%" maxW="8xl">
            <Flex
               h="full"
               w="full"
               py="3"
               align="center"
               justify="space-evenly"
            >
               <Image
                  src="https://townsquare.media/site/295/files/2015/04/LA-Woman.jpg?w=980&q=75"
                  alt="The Doors"
                  objectFit="cover"
                  boxSize="100px"
               />

               <Flex>
                  <Flex direction="column" mr="2rem">
                     <Text mb="1" fontSize="lg">
                        L.A. Woman
                     </Text>
                     <Text color="gray.light" fontSize="sm">
                        The Doors
                     </Text>
                  </Flex>
                  <Icon
                     as={FaHeart}
                     my="auto"
                     fontSize="1.3rem"
                     color="brand.red"
                     cursor="pointer"
                  />
               </Flex>

               <PlayerControls
                  icons={[FaStepBackward, FaPlay, FaStepForward]}
               />

               <Flex align="center" w="35%">
                  <Text>05:58</Text>
                  <Box
                     h="2"
                     w="100%"
                     bg="gray.light"
                     mx="5"
                     borderRadius="10px"
                  >
                     <Box
                        h="full"
                        w="75%"
                        bg="brand.red"
                        borderRadius="10px"
                     ></Box>
                  </Box>
                  <Text>07:49</Text>
               </Flex>

               <PlayerControls icons={[FaVolumeUp, FiRepeat, RiPlayListFill]} />
            </Flex>
         </Container>
      </Box>
   );
};

export default Player;
