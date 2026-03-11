import { createStackNavigator } from "@react-navigation/stack";
import { CommonRouteParamList, PublicRouteParamsList } from "../types/routes";
import Settings from "../../screen/PrivateScreen/Profile/screens/Settings";
import EditProfile from "../../screen/PrivateScreen/Profile/screens/EditProfile";

export function CommonRoutes() {
  const Stack = createStackNavigator<CommonRouteParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
