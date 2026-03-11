import { useNavigation } from "@react-navigation/native";
import { ChevronRight, Pen } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "../../../../../components/Button";
import { TextCustom } from "../../../../../components/TextCustom";
import { UseDisptach } from "../../../../../hooks/useDisptach";
import { RootCommonNavigation } from "../../../../../navigation/types/routes";
import { colors } from "../../../../../utils/colors";
import { OptionsList } from "../../../../../utils/OptionsListPorifle";

export const General = () => {
  const { logoutUser } = UseDisptach();
  const navigation = useNavigation<RootCommonNavigation>();
  function handleNavigate() {
    navigation.navigate("Settings");
  }
  return (
    <View style={styles.container}>
      <TextCustom size={26} color={colors.gray[40]} value="General" />

      <FlatList
        data={OptionsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.options}>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
              }}
            >
              <TouchableOpacity
                onPress={handleNavigate}
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <item.Icon size={20} />
                <TextCustom color={colors.gray[900]} value={item.name} />
              </TouchableOpacity>
            </View>
            <ChevronRight />
          </View>
        )}
      />
      <Button icone={Pen} onPress={logoutUser} name="Exit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginTop: 50,
  },

  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    padding: 4,
    borderRadius: 10,
    paddingBottom: 10,
    height: 70,
    borderBottomWidth: 1,
    borderColor: colors.gray[100],
  },
});
