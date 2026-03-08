import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PublicRouteParamsList = {
  Login: undefined;
  CreateAccount: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<PublicRouteParamsList>;
