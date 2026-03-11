import {
  NavigationContainer,
  type NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from "../libs/axios/store/store";
import { useEffect, useRef } from "react";
import { LoginScreen } from "../screen/LoginScreen";
import { Private } from "../screen/PrivateScreen/PrivateScreen";
import { RoutesPublic } from "./routesPublic";
import { StackRoutesPrivates } from "./stacks/stack.routes";

export function Navigation() {
  const hasUser = useSelector((s: RootState) => s.user.acessToken);

  const Stack = createStackNavigator();
  const navigationRef = useRef<NavigationContainerRef<any>>(null);
  const routerCurrently = hasUser ? "private" : "Public";
  useEffect(() => {
    if (navigationRef.current?.isReady()) {
      const currentRoute = navigationRef.current.getCurrentRoute();
      console.log(currentRoute?.name);

      if (currentRoute?.name !== routerCurrently) {
        navigationRef.current.reset({
          index: 0,
          routes: [{ name: routerCurrently }],
        });
      }
    }
  }, [hasUser]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={routerCurrently}
      >
        <Stack.Screen name="Public" component={RoutesPublic} />
        <Stack.Screen name="private" component={StackRoutesPrivates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
