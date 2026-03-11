import { ReactNode } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { TextCustom } from "../TextCustom";

type Props<T> = {
  isLoading: boolean;
  data?: T | null;
  children: (data: T) => ReactNode;
};

export function PageLoad<T>({ isLoading, data, children }: Props<T>) {
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (data == null) {
    return <TextCustom value="User not found" />;
  }

  return <View style={styles.container}>
    
    {children(data)}
  
  
  </View>;
}

const styles = StyleSheet.create({
  container: { padding: 4 },
});
