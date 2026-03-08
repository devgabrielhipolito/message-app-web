import { createStackNavigator } from "@react-navigation/stack";
import { CreateAccountScreen } from "../screen/CreateAccountScreen";
import { LoginScreen } from "../screen/LoginScreen";
import { PublicRouteParamsList } from "./types/routes";

export function RoutesPublic() {
  const Stack = createStackNavigator<PublicRouteParamsList>();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
}
