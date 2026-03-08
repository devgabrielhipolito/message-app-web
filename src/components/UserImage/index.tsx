import { User2, User2Icon } from "lucide-react-native";
import { View } from "react-native";
import { Colors } from "../../utils/colors";

export function UserImage(urlImage: { urlImage?: string }) {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.black,
        borderRadius: "100%",
      }}
    >
      {!urlImage ? "" : <User2Icon color={"white"} size={20} />}
    </View>
  );
}
