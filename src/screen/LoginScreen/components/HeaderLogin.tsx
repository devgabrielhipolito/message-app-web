import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../utils/colors";

export function HeaderLogin() {
  return (
    <View>
      <Text
        style={{
          color: Colors.black,
          fontFamily: "OpenSans_400Regular",
          fontSize: 20,
        }}
      >
        Login
      </Text>
      <Text
        style={{
          color: Colors.black,
          fontFamily: "OpenSans_300Light",
          fontSize: 14,
        }}
      >
        Enter your email and password
      </Text>
    </View>
  );
}
