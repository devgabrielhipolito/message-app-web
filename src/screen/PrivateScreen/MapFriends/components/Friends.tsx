import { MessageCircleIcon, Phone } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { TextCustom } from "../../../../components/TextCustom";
import { listFriends } from "../../../../mock/MapFriends/ListFirends";
import { Colors } from "../../../../utils/colors";
import { UserImage } from "../../../../components/UserImage";
import { FlatList } from "react-native-gesture-handler";
import { CardUser } from "../../../../components/CardUser";

function typeSelected(type: "call" | "message") {
  const typeConnections = {
    call: Phone,
    message: MessageCircleIcon,
  };

  const Icon = typeConnections[type];
  return <Icon size={20} />;
}

export function Friends() {
  return (
    <View style={styles.groupFriends}>
      <FlatList
        data={listFriends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CardUser
            isOnline={item.isOnline}
            name={item.name}
            mapFriends={{
              optionsConnections: item.connectionsOptions,
              description: "location",
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  groupFriends: {
    width: "100%",
    alignItems: "center",
  },
  cardFirend: {
    flexDirection: "row",
    width: "95%",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderColor: Colors.grayLow,
  },
  profile: {
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
});
