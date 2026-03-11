import { createStackNavigator } from "@react-navigation/stack";
import { Private } from "../../screen/PrivateScreen/PrivateScreen";
import { CommonRoutes } from "./common.routes";

export function StackRoutesPrivates() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Private" component={Private} />
      <Stack.Screen name="common" component={CommonRoutes} />
    </Stack.Navigator>
  );
}
