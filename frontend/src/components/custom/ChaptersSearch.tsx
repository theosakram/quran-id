import { Box, Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

interface ChaptersSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const ChaptersSearch = ({
  value,
  onChange,
  placeholder,
}: ChaptersSearchProps) => {
  return (
    <Box maxW="400px" mx="auto" mb="8">
      <InputGroup
        startElement={<LuSearch color="var(--chakra-colors-fg-muted)" />}
      >
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          bg="bg.default"
          borderColor="border.default"
          _focus={{ borderColor: "brand.solid" }}
        />
      </InputGroup>
    </Box>
  );
};
