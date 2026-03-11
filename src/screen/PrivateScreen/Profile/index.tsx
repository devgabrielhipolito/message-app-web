import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toolbar } from "../../../components/Toolbar";
import { User } from "./Component/User";
import { General } from "./Component/Options";

export function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Toolbar title="Profile" />
      <User />
      <General />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
