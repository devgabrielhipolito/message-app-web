import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { TextCustom } from "../../../../components/TextCustom";
import { UserImage } from "../../../../components/UserImage";
import { RootState } from "../../../../libs/axios/store/store";
import { colors } from "../../../../utils/colors";
import { normalizeText } from "../../../../utils/normalizeText";

export const User = () => {
  const userCurrent = useSelector((s: RootState) => s.user);

  console.log(userCurrent.acessToken);
  return (
    <View style={styles.container}>
      <UserImage />
      <View>
        <TextCustom size={20} value={normalizeText(userCurrent.fullName)} />
        <TextCustom size={15} value={userCurrent.email} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.gray[100],
  },
});
