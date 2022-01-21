import { FC } from "react";

import { Flex, Text, Icon } from "@chakra-ui/react";

interface ComponentProps {
   icon: any;
   text: string;
   current?: boolean;
}

const MenuItem: FC<ComponentProps> = ({ icon, text, current }) => {
   return (
      <Flex
         mb="5"
         borderRight={current ? "4px" : ""}
         borderRightColor="brand.red"
      >
         <Icon
            as={icon}
            color={current ? "brand.red" : "gray.light"}
            mr="5"
            my="auto"
            cursor="pointer"
         />
         <Text color={current ? "brand.red" : "white"} cursor="pointer">
            {text}
         </Text>
      </Flex>
   );
};

export default MenuItem;
