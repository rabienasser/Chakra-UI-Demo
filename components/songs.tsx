import {
   Container,
   Box,
   Heading,
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
   Flex,
} from "@chakra-ui/react";

import Song from "./song";

const Songs = () => {
   return (
      <Box w="75%">
         <Container maxW="98%" h="full">
            <Flex h="full" direction="column" justify="flex-start">
               <Heading>Top Picks</Heading>
               <Table variant="unstyled" mt="5">
                  <Thead>
                     <Tr>
                        <Th color="gray.light">Name</Th>
                        <Th color="gray.light">Artist</Th>
                        <Th color="gray.light">Category</Th>
                        <Th color="gray.light">Time</Th>
                        <Th color="gray.light">Buy</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Song
                        image="https://img.discogs.com/qy0i0j0AfEWNf1JWUUsqKPv7BRY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12651731-1609943196-6286.jpeg.jpg"
                        song="Lightenup"
                        artist="Parcels"
                        time="3:57"
                        category="Indie"
                     />

                     <Song
                        image="https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
                        song="Money"
                        artist="Pink Floyd"
                        time="6:22"
                        category="Classic Rock"
                     />

                     <Song
                        image="https://images.radiox.co.uk/images/8687?crop=16_9&width=660&relax=1&signature=wk9uiZvLZasRIdQNq9HVAcovcDg="
                        song="Champagne Supernova"
                        artist="Oasis"
                        time="7:31"
                        category="90s Rock"
                     />

                     <Song
                        image="https://m.media-amazon.com/images/I/71od0Ktt2HL._SL1500_.jpg"
                        song="Today"
                        artist="The Smashing Pumpkins"
                        time="3:21"
                        category="90s Rock"
                     />
                  </Tbody>
               </Table>
            </Flex>
         </Container>
      </Box>
   );
};

export default Songs;
