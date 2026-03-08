import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Colors } from "../../utils/colors";

export const configTabOptions: BottomTabNavigationOptions = {
  headerShown: false,

  tabBarLabelStyle: {
    fontSize: 10,
    fontFamily: "OpenSans_400Regular",
    textAlign: "center",
    justifyContent: "center",
  },

  tabBarActiveTintColor: Colors.black,
  tabBarItemStyle: {
    justifyContent: "center",
    alignItems: "center",
  },

  tabBarStyle: {
    height: 70,
  },
};
