import React from "react";
import { Badge, Text } from "@chakra-ui/react";

function HeaderInfo() {
  return (
    <div className="head">
      <Text my="4" fontWeight="bold" fontSize="4xl">
        KHAN ENTERPRISE
      </Text>
      <Badge my="2" p="2" fontSize="xl" borderRadius="5" colorScheme="green">
        Cash Memo
      </Badge>
    </div>
  );
}

export default HeaderInfo;
