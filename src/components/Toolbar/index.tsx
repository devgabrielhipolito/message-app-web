import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, LucideIcon } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/colors";
interface ToolbarComponente {
  name?: string;
  icon?: LucideIcon;
}

export interface ToolbarProps {
  title?: string;
  back?: boolean;
}
export function Toolbar({ title, back }: ToolbarProps) {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      {back && (
        <ArrowLeft
          size={30}
          color={Colors.primary}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={{ margin: "auto", fontSize: 20 }}>{title}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
});
