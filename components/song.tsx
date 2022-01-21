import { FC } from "react";
import { Flex, Text, Image, Icon, Tr, Td } from "@chakra-ui/react";

import { HiShoppingCart } from "react-icons/Hi";

interface ComponentProps {
   image: string;
   song: string;
   artist: string;
   category: string;
   time: string;
}

const Song: FC<ComponentProps> = ({ image, song, artist, category, time }) => {
   return (
      <Tr>
         <Td>
            <Flex>
               <Image
                  src={image}
                  alt={song}
                  boxSize="50px"
                  borderRadius="10px"
               />
               <Text my="auto" ml="5">
                  {song}
               </Text>
            </Flex>
         </Td>

         <Td>{artist}</Td>

         <Td>{category}</Td>

         <Td>{time}</Td>

         <Td>
            <Icon as={HiShoppingCart} fontSize="2xl" />
         </Td>
      </Tr>
   );
};

export default Song;
