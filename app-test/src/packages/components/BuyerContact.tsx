import { Box, Button, Text } from "@chakra-ui/react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function BuyerContact({ onNext }: Props) {
  return (
    <Box>
      <Text>Contato</Text>
      <Button onClick={onNext}>Próximo</Button>
    </Box>
  );
}
