import type { NextPage } from "next";
import { VStack } from "@chakra-ui/react";

import TopBar from "../components/topBar";
import Player from "../components/player";
import MusicApp from "../components/musicApp";

const Home: NextPage = () => {
   return (
      <VStack bg="black">
         <TopBar />
         <MusicApp />
         <Player />
      </VStack>
   );
};

export default Home;
