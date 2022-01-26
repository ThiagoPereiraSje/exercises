import { Box, Button, Text } from "@chakra-ui/react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function BuyerDelivery({ onPrev, onNext }: Props) {
  return (
    <Box>
      <Text>Entrega</Text>
      <Button onClick={onPrev}>Anterior</Button>
      <Button onClick={onNext}>Proximo</Button>
    </Box>
  );
}
