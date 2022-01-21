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
   Image,
   Icon,
} from "@chakra-ui/react";

const Genres = () => {
   return (
      <Box w="100%">
         <Container maxW="98%" h="full">
            <Flex
               h="full"
               w="full"
               align="center"
               justify="space-evenly"
               py="3"
            >
               <Flex h="full" w="18%" direction="column">
                  <Image
                     src="https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format"
                     alt="Nirvana"
                     h="full"
                     w="90%"
                     borderRadius="20px"
                     mx="auto"
                     mb="2"
                  />
                  <Text textAlign="center">Grunge</Text>
               </Flex>

               <Flex h="full" w="18%" direction="column">
                  <Image
                     src="https://m.media-amazon.com/images/I/71KrOYQyHVL._SL1200_.jpg"
                     alt="Jungle"
                     h="full"
                     w="90%"
                     borderRadius="20px"
                     mx="auto"
                     mb="2"
                  />
                  <Text textAlign="center">Nu Disco</Text>
               </Flex>
               <Flex h="full" w="18%" direction="column">
                  <Image
                     src="https://cdn2.thelineofbestfit.com/images/remote/https_cdn2.thelineofbestfit.com/media/2014/takotsubo.jpg"
                     alt="Skepta"
                     h="full"
                     w="90%"
                     borderRadius="20px"
                     mx="auto"
                     mb="2"
                  />
                  <Text textAlign="center">Pop</Text>
               </Flex>

               <Flex h="full" w="18%" direction="column">
                  <Image
                     src="https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg"
                     alt="SOAD"
                     h="full"
                     w="90%"
                     borderRadius="20px"
                     mx="auto"
                     mb="2"
                  />
                  <Text textAlign="center">Heavy Metal</Text>
               </Flex>

               <Flex h="full" w="18%" direction="column">
                  <Image
                     src="https://upload.wikimedia.org/wikipedia/en/9/94/Sublime_Self-Titled.jpg"
                     alt="Sublime"
                     h="full"
                     w="90%"
                     borderRadius="20px"
                     mx="auto"
                     mb="2"
                  />
                  <Text textAlign="center">Reggae</Text>
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default Genres;
