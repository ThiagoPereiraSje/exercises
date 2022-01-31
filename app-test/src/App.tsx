import { createElement } from "react";
import { FaAddressBook, FaAtlas, FaBus, FaHandshake } from "react-icons/fa";
import { Box, Stack } from "@chakra-ui/react";
import BuyerAddress from "./packages/components/BuyerAddress";
import BuyerContact from "./packages/components/BuyerContact";
import BuyerDelivery from "./packages/components/BuyerDelivery";
import BuyerOrder from "./packages/components/BuyerOrder";
import useSteps from "./packages/hooks/useSteps";
import StepsIndicator, { StepItem } from "./packages/components/StepsIndicator";

const steps = [BuyerContact, BuyerAddress, BuyerDelivery, BuyerOrder];

const stepsHeader: StepItem[] = [
  { title: "Contato", icon: FaAddressBook },
  { title: "Endereço", icon: FaAtlas },
  { title: "Entrega", icon: FaBus },
  { title: "Finalizar", icon: FaHandshake, tileStyle: {}, lineStyle: {} },
];

function App() {
  const { step, nextStep, prevStep } = useSteps(steps.length);

  return (
    <Box>
      <Box>
        <Stack direction="column">
          <StepsIndicator header={stepsHeader} curStep={step} />
          {createElement(steps[step], {
            onPrev: prevStep,
            onNext: nextStep,
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
