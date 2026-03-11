import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  Bell,
  Home,
  Map as MapIcon,
  MessageCircle,
  User2,
  UserRoundSearch,
} from "lucide-react-native";
import { Chat } from "./Chat";
import { MapScreen } from "./MapScreen";
import { MapFriends } from "./MapFriends";
import { Notify } from "./Notify";
import { ProfileScreen } from "./Profile";
import { configTabOptions } from "../../navigation/configRoutes/configScreens";
import SearchFriend from "./SearchFriend";

export function Private() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator initialRouteName="MapFriends" screenOptions={configTabOptions}>
      <Screen
        name="MapFriends"
        component={MapFriends}
        options={{
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MapIcon color={color} size={30} />,
        }}
      />
      <Screen
        name="Notify"
        component={Notify}
        options={{
          tabBarIcon: ({ color, size }) => <Bell color={color} size={size} />,
        }}
      />

      <Screen
        name="SearchFriends"
        component={SearchFriend}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserRoundSearch color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <User2 color={color} size={size} />,
        }}
      />
    </Navigator>
  );
}
