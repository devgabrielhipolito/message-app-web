import { ScrollView, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { mockMessages } from "../../../../mock/chat/messages";
import { CardUser } from "../../../../components/CardUser";

export function ContainerUser() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={mockMessages}
        keyExtractor={({ name }, index) => `${name}-${index}`}
        renderItem={({ item }) => (
          <CardUser
            propsStyles={{ borderBottomWidth: 0 }}
            name={item.name}
            isOnline={item.isOnline}
            chat={{ hours: item.hours, lastMessage: item.lastMessage }}
          />
        )}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerUsers: {
    width: "100%",
    padding: 5,
    flex: 1,
  },
});
