import {
   Flex,
   Container,
   Box,
   Heading,
   Input,
   Text,
   Avatar,
   InputGroup,
   InputLeftElement,
   Icon,
} from "@chakra-ui/react";
import { FaCircleNotch } from "react-icons/fa";
import { GiMusicalScore } from "react-icons/Gi";

const TopBar = () => {
   return (
      <Box w="100%" h="10%">
         <Container maxW="97%" h="full" centerContent>
            <Flex
               w="full"
               h="full"
               align="center"
               justify="space-between"
               py="4"
            >
               <Flex>
                  <Icon as={GiMusicalScore} my="auto" mr="4" fontSize="4xl" />
                  <Heading fontFamily="mono">GoodVibez</Heading>
               </Flex>

               <Flex w="65%">
                  <InputGroup>
                     <InputLeftElement pointerEvents="none">
                        <Icon as={FaCircleNotch} color="gray.300" />
                     </InputLeftElement>
                     <Input
                        color="white"
                        maxW="80%"
                        placeholder="Search for sounds, tracks"
                        size="md"
                        variant="outline"
                        focusBorderColor="brand.red"
                     />
                  </InputGroup>
               </Flex>

               <Flex>
                  <Text my="auto">Rabie Nasser</Text>
                  <Avatar
                     src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                     ml="5"
                  />
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default TopBar;
