import { Text, TextStyle } from "react-native";
import { Colors } from "../../utils/colors";
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
  color?: keyof typeof Colors;
}

export function TextCustom({
  size = 17,
  value,
  weight,
  style,
  fontFamily = "openSansregular",
  color = "black",
}: TextCustomProps) {
  return (
    <Text
      style={[
        {
          fontSize: size,
          color: Colors[color],
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
