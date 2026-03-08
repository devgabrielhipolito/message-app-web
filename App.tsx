import {
  OpenSans_300Light,
  OpenSans_400Regular,
  
  useFonts,
} from "@expo-google-fonts/open-sans";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/libs/axios/store/store";
import { Navigation } from "./src/navigation";
const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,

  });

  if (__DEV__) {
    require("./ReactotronConfig");
  }

  if (!fontsLoaded) {
    return <Text>NO FONTS LOADED</Text>;
  }
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView
            style={{
              flex: 1,
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <Navigation />
          </SafeAreaView>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
