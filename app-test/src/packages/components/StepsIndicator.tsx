import { Box, BoxProps, Icon, IconProps, Stack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

export interface StepItem {
  title: string;
  icon: IconType;
  checkedIcon?: IconType;
  tileStyle?: BoxProps;
  boxStyle?: BoxProps;
  checkedBoxStyle?: BoxProps;
  iconStyle?: IconProps;
  checkedIconStyle?: IconProps;
  lineStyle?: BoxProps;
  checkedLineStyle?: BoxProps;
}

interface StepProps extends StepItem {
  checked: boolean;
}

function Step({
  title,
  icon,
  checked,
  checkedIcon = FaCheck,
  tileStyle = { w: "full" },
  boxStyle = {
    bgColor: "gray.300",
    borderRadius: "50%",
    padding: "0.6em 0.8em",
  },
  checkedBoxStyle = {
    bgColor: "gray.600",
    borderRadius: "50%",
    padding: "0.6em 0.8em",
  },
  iconStyle = {
    padding: "5px 0px 0px 0px",
    fontSize: "25px",
  },
  checkedIconStyle = {
    padding: "5px 0px 0px 0px",
    fontSize: "25px",
    color: "white",
  },
  lineStyle = {
    w: "full",
    h: "0.2em",
    bgColor: "gray.300",
  },
  checkedLineStyle = {
    w: "full",
    h: "0.2em",
    bgColor: "gray.600",
  },
}: StepProps) {
  const _icon = checked ? checkedIcon : icon;
  const _boxStyle = checked ? checkedBoxStyle : boxStyle;
  const _iconStyle = checked ? checkedIconStyle : iconStyle;
  const _lineStyle = checked ? checkedLineStyle : lineStyle;

  return (
    <Box {...tileStyle}>
      <Stack direction="row" alignItems="center" spacing="0.5em">
        <Box {..._boxStyle}>
          <Icon {..._iconStyle} as={_icon} />
        </Box>
        <Text>{title}</Text>
        <Box {..._lineStyle} />
      </Stack>
    </Box>
  );
}

interface Props {
  header: StepItem[];
  curStep: number;
}

export default function StepsIndicator({ header, curStep }: Props) {
  return (
    <Stack direction="row">
      {header.map((s, i) => (
        <Step key={i} {...s} checked={curStep > i} />
      ))}
    </Stack>
  );
}
