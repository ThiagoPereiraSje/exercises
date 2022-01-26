import { Box, Button, Text } from "@chakra-ui/react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function BuyerOrder({ onPrev, onNext }: Props) {
  return (
    <Box>
      <Text>Fechar Pedido</Text>
      <Button onClick={onPrev}>Anterior</Button>
      <Button onClick={onNext}>Finalizar</Button>
    </Box>
  );
}
