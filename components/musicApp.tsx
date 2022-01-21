import { Flex, Center, Container } from "@chakra-ui/react";

import Menu from "./menu";
import Genres from "./genres";
import Songs from "./songs";
import TopArtists from "./topArtists";

const MusicApp = () => {
   return (
      <Flex height="85%" w="full">
         <Menu />

         <Flex minW="85%" direction="column" justify="space-between">
            <Genres />

            <Flex>
               <Songs />
               <TopArtists />
            </Flex>
         </Flex>
      </Flex>
   );
};

export default MusicApp;
