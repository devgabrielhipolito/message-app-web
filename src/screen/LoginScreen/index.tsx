import { StyleSheet, Text, View } from "react-native";

import {
  useNavigation
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  RootStackNavigationProp
} from "../../navigation/types/routes";
import { Colors } from "../../utils/colors";
import { FormLogin } from "./components/FormLogin";
import { HeaderLogin } from "./components/HeaderLogin";

export function LoginScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}></View>
      <HeaderLogin />
      <FormLogin />
      <Text style={styles.textRegister}>
        Don't have an account?
        <Text
          onPress={() => navigation.navigate("CreateAccount")}
          style={styles.register}
        >
          Register
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: 20,
    padding: 2,
  },
  textRegister: {
    gap: 10,
    fontSize: 15,
    textAlign: "center",
  },
  register: {
    color: Colors.primary,
  },
  logo: {
    height: 150,
    backgroundColor: "gray",
  },
});
