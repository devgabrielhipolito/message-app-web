import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextCustom } from "../../../components/TextCustom";
import { Toolbar } from "../../../components/Toolbar";
import { mockNotify } from "../../../mock/notify";

export function Notify() {
  return (
    <SafeAreaView style={styles.container}>
      <Toolbar title="Notify" />
      <FlatList
        style={styles.groupNotification}
        data={mockNotify}
        renderItem={({ item }) => (
          <View style={styles.cardNotify}>
            <item.Icon />
            <View>
              <TextCustom value={item.name} size={15} />
              <TextCustom
                fontFamily="openSanslight"
                value={item.message}
                size={18}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "white",
  },
  groupNotification: {
    width: "100%",
    padding: 2,
    gap: 1000000,
  },
  cardNotify: {
    padding: 2,
    gap: 5,
    flexDirection: "row",
    height: 100,
  },
});
