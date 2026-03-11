import { Filter } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Toolbar } from "../../../components/Toolbar";
import { Colors } from "../../../utils/colors";
import { useQuery } from "@tanstack/react-query";
import { useUserApi } from "../../../hooks/Apis/useUserApi";
import { PageLoad } from "../../../components/PageLoad";
import { FlatList } from "react-native-gesture-handler";
import { CardUser } from "../../../components/CardUser";
import { normalizeText } from "../../../utils/normalizeText";
import { SearchFriends } from "../../../hooks/Apis/filters/searchFriends";

export default function SearchFriend() {
  const { getUsers } = useUserApi();

  const [filters, setFilters] = useState<SearchFriends>({
    fullName: "",
  });

  const { isLoading, data } = useQuery({
    queryKey: ["USERS", filters],
    queryFn: () => getUsers(filters),
  });

  return (
    <View style={styles.container}>
      <Toolbar title="Search Friends" />

      <View style={styles.headerMessage}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          placeholderTextColor="#999"
          value={filters.fullName}
          onChangeText={(text) =>
            setFilters((prev) => ({
              ...prev,
              fullName: text,
            }))
          }
        />

        <TouchableOpacity style={styles.button}>
          <Filter size={15} color={"white"} />
        </TouchableOpacity>
      </View>

      <PageLoad isLoading={isLoading} data={data}>
        {(users) => (
          <FlatList
            data={users.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardUser name={normalizeText(item.fullName)} />
            )}
          />
        )}
      </PageLoad>
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
