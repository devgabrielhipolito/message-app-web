import { StyleSheet, View, ViewStyle } from "react-native";
import { Colors } from "../../utils/colors";
import { TextCustom } from "../TextCustom";
import { UserImage } from "../UserImage";
import { MessageCircleIcon, Phone } from "lucide-react-native";

type ConnectionType = "call" | "message";
type MapFriendsProps = {
  optionsConnections: ConnectionType[];
  description: string;
};

type ChatProps = {
  lastMessage: string;
  hours: string;
};

interface CardUserProps {
  urlImage?: string;
  name: string;
  isOnline?: boolean;
  chat?: ChatProps;
  mapFriends?: MapFriendsProps;
  propsStyles?: ViewStyle;
}

export function CardUser({
  name,
  urlImage,
  mapFriends,
  isOnline,
  chat,
  propsStyles,
}: CardUserProps) {
  function typeSelected(type: "call" | "message") {
    const typeConnections = {
      call: Phone,
      message: MessageCircleIcon,
    };

    const Icon = typeConnections[type];
    return <Icon size={18} />;
  }

  return (
    <View style={[styles.container, propsStyles]}>
      <View style={styles.user}>
        <UserImage urlImage={urlImage} />
        <TextCustom size={16} value={name} />
      </View>
      <View style={styles.cardUserRight}>
        {mapFriends && (
          <View style={styles.connections}>
            {mapFriends.optionsConnections.map((item) => typeSelected(item))}
          </View>
        )}

        {chat?.hours && <TextCustom size={14} value={chat.hours} />}
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: isOnline ? "green" : "gray",
            borderRadius: "100%",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "95%",
    paddingVertical: 20,
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderColor: Colors.grayLow,
  },

  user: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  connections: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },

  cardUserRight: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
