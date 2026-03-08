import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screen/LoginScreen";
import { useSelector } from "react-redux";
import { RootState } from "../libs/axios/store/store";
import { Private } from "../screen/PrivateScreen/PrivateScreen";
import { useEffect, useRef } from "react";
import { RoutesPublic } from "./routesPublic";

export function StackRoutes() {
  const Stack = createStackNavigator();
  const hasUser = useSelector((s: RootState) => s.user.acessToken);

  const navigationRef = useRef(null);

  useEffect(() => {}, [hasUser]);

  return (
    
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={hasUser ? "Private" : "Public"}
    >
      <Stack.Screen name="Public" component={RoutesPublic} />
      <Stack.Screen name="Private" component={Private} />
    </Stack.Navigator>
  );
}
