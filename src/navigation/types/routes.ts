import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackNavigationProp =
  NativeStackNavigationProp<PublicRouteParamsList>;

export type RootCommonNavigation =
  NativeStackNavigationProp<CommonRouteParamList>;

export type PublicRouteParamsList = {
  Login: undefined;
  CreateAccount: undefined;
};

export type CommonRouteParamList = {
  EditProfile: undefined;
  Settings: undefined;
  Friends: undefined;
};
