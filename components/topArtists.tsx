import {
   Container,
   Box,
   Flex,
   Text,
   SimpleGrid,
   Avatar,
   Button,
} from "@chakra-ui/react";

import Song from "./song";

const TopArtists = () => {
   return (
      <Box w="25%">
         <Container maxW="98%" h="full">
            <Flex h="full" direction="column" justify="flex-start">
               <Flex direction="column">
                  <Text fontSize="2xl" mb="5">
                     Top Artists
                  </Text>
                  <SimpleGrid columns={3} spacing={1}>
                     <Flex direction="column" m="auto">
                        <Avatar
                           size="lg"
                           src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/TheDoorsTheDoorsalbumcover.jpg/220px-TheDoorsTheDoorsalbumcover.jpg"
                        />
                        <Text mt="2">The Doors</Text>
                     </Flex>
                     <Flex direction="column" m="auto">
                        <Avatar
                           size="lg"
                           src="https://www.nme.com/wp-content/uploads/2021/08/Foo-Fighters-Danny-Clinch.jpg"
                        />
                        <Text mt="2">Foo Fighters</Text>
                     </Flex>
                     <Flex direction="column" m="auto">
                        <Avatar
                           size="lg"
                           src="https://upload.wikimedia.org/wikipedia/en/0/0f/Miami_Horror_-_Illumination.png"
                        />
                        <Text mt="2">Miami Horror</Text>
                     </Flex>
                     <Flex direction="column" m="auto">
                        <Avatar
                           size="lg"
                           src="https://www.straight.com/files/v3/styles/gs_standard/public/images/18/01/mus_milkychance_2612.jpg?itok=NiMiSg4O"
                        />
                        <Text mt="2">Milky Chance</Text>
                     </Flex>
                     <Flex direction="column" m="auto">
                        <Avatar
                           size="lg"
                           src="https://i.guim.co.uk/img/media/77ab08c5c2cae70ed5e95248ec2b75bc0e27e8ce/0_257_5210_3126/master/5210.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d935fea7c43be562a488d300328ab36f"
                        />
                        <Text mt="2">Peggy Gou</Text>
                     </Flex>
                     <Flex direction="column" m="auto">
                        <Avatar
                           size="lg"
                           src="https://www.rap-up.com/app/uploads/2021/07/young-thug-rs.jpg"
                        />
                        <Text mt="2">Young Thug</Text>
                     </Flex>
                  </SimpleGrid>
               </Flex>

               <Flex my="5" h="full" align="flex-end">
                  <Button variant="outline" mr="5">
                     Settings
                  </Button>
                  <Button variant="outline">Add Friends</Button>
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default TopArtists;
