import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Toolbar } from "../../../components/Toolbar";
import { ContainerUser } from "./components/ContainerUsers";
import { Filter } from "lucide-react-native";
import { Colors } from "../../../utils/colors";

export function Chat() {
  return (
    <View style={styles.container}>
      <Toolbar title="Message" />

      <View style={styles.headerMessage}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button}>
          <Filter size={15} color={"white"} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerUsers}>
        <ContainerUser />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  headerMessage: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 8,
  },

  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  button: {
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },

  containerUsers: {
    flex: 1,
  },
});
