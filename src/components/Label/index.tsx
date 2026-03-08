import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { Colors } from "../../utils/colors";

import DatePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Calendar, Calendar1Icon, Database } from "lucide-react-native";
import { Button } from "../Button";
type Props = {
  nameInput: string;
  placeholder?: string;
  error?: string;

  labelType?: "date";
  showDate?: boolean;
  valueDate?: Date;

  textProps?: TextProps;
  viewProps?: ViewProps;
  labelStyles?: ViewStyle;

  inputProps?: TextInputProps;
  keyboard?: KeyboardTypeOptions;
};

export function Label({
  nameInput,
  textProps,
  viewProps,
  labelStyles,
  valueDate,
  inputProps,
  labelType,
  keyboard = "default",
  placeholder,
  error,
}: Props) {
  const [showDate, setShowDate] = useState(false);
  const formattedDate = valueDate
    ? valueDate.toLocaleDateString("pt-BR")
    : inputProps?.value;

  return (
    <View {...viewProps} style={[styles.container, labelStyles]}>
      <Text {...textProps} style={styles.nameInput}>
        {nameInput}
      </Text>
      <View
        style={[
          styles.containerInput,
          error ? { outlineColor: "red" } : { outlineColor: Colors.grayLow },
        ]}
      >
        {labelType === "date" ? (
          <>
            {showDate && (
              <DatePicker
                mode="date"
                value={valueDate ?? new Date()}
                onChange={(event, selectedDate) => {
                  setShowDate(false);
                  if (selectedDate) {
                    inputProps?.onChangeText?.(selectedDate.toDateString());
                  }
                }}
              />
            )}
            <TouchableOpacity onPress={() => setShowDate(true)}>
              <TextInput
                {...inputProps}
                value={formattedDate || ""}
                keyboardType={keyboard}
                placeholder={placeholder}
                editable={false}
                style={styles.input}
              />
            </TouchableOpacity>

            <Calendar
              size={20}
              style={{ marginLeft: "auto" }}
              color={Colors.primary}
              onPress={() => setShowDate(true)}
            />
          </>
        ) : (
          <TextInput
            {...inputProps}
            keyboardType={keyboard}
            placeholder={placeholder}
            style={styles.input}
          />
        )}
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    width: "100%",
    height: 95,
  },
  containerInput: {
    borderRadius: 10,
    boxSizing: "border-box",
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    outlineWidth: 1,
  },
  nameInput: {
    fontSize: 14,
    fontFamily: "OpenSans_400Regular",
    marginBottom: 3,
  },
  text: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 4,
    color: Colors.black,
  },
  input: {
    flexGrow: 1,
    fontFamily: "OpenSans_300Light",
    height: 50,
  },
  error: {
    color: "red",
    fontFamily: "OpenSans_400Regular",
  },
});
