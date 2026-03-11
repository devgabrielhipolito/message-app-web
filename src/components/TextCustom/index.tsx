import { Text, TextStyle } from "react-native";
import { colors, Colors } from "../../utils/colors";
import {
  FontFamilyType,
  FontSizeType,
  FontWeightType,
} from "../../utils/TypesStyles/Text";

interface TextCustomProps {
  value: string;
  size?: number;
  weight?: FontWeightType;
  style?: TextStyle;
  fontFamily?: keyof FontFamilyType;
  color?: string;
}

export function TextCustom({
  size = 17,
  value,
  weight,
  style,
  fontFamily = "openSansregular",
  color = colors.gray[20],
}: TextCustomProps) {
  return (
    <Text
      style={[
        {
          fontSize: size,
          color: color,
          fontWeight: weight,
          fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {value}
    </Text>
  );
}
