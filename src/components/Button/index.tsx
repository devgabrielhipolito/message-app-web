import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "../../utils/colors";
import { LucideIcon } from "lucide-react-native";

type Props = TouchableOpacityProps & {
  onPress: () => void;
  name?: string;
  icone?: LucideIcon;
  isLoading?: boolean;
};

export function Button({ onPress, name, isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      style={style.button}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Text style={style.text}>{name}</Text>
      )}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    padding: 20,
  },

  text: {
    fontSize: 18,
    color: "white",
  },
});
