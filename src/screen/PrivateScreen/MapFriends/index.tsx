import BottomSheet, {
  BottomSheetHandleProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useEffect, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { TextCustom } from "../../../components/TextCustom";
import { Friends } from "./components/Friends";
import { ChevronUp } from "lucide-react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import MapView from "react-native-maps";
import { Map } from "../../../components/Map";
export function MapFriends() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["25%", "60%", "80%"], []);

  function CustomHandle({ animatedIndex }: BottomSheetHandleProps) {
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            rotate: withTiming(animatedIndex.value === 0 ? "180deg" : "0deg", {
              duration: 200,
            }),
          },
        ],
      };
    });

    return (
      <Animated.View
        style={[animatedStyle, { alignItems: "center", transition: "rotate" }]}
      >
        <ChevronUp />
      </Animated.View>
    );
  }

  useEffect(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <View style={styles.container}>
      <Map />
      <BottomSheet
        ref={bottomSheetRef}
        handleComponent={CustomHandle}
        snapPoints={snapPoints}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.indicator}
      >
        <BottomSheetView style={styles.contentContainer}>
          <TextCustom size={25} value="Friends" />
          <Friends />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder: {
    color: "#333",
    fontSize: 16,
  },
  sheetBackground: {
    backgroundColor: "white",
  },
  indicator: {
    backgroundColor: "#888",
    width: 40,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
