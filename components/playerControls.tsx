import { FC } from "react";
import { Flex, Icon } from "@chakra-ui/react";

interface ComponentProps {
   icons: any;
}

const PlayerControls: FC<ComponentProps> = ({ icons }) => {
   return (
      <Flex>
         <Icon as={icons[0]} fontSize="1.2rem" mx="4" cursor="pointer" />
         <Icon as={icons[1]} fontSize="1.2rem" mx="4" cursor="pointer" />
         <Icon as={icons[2]} fontSize="1.2rem" mx="4" cursor="pointer" />
      </Flex>
   );
};

export default PlayerControls;
