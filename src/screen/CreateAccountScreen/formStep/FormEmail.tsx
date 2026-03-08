import { Control, Controller } from "react-hook-form";
import { Label } from "../../../components/Label";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import { CreateAccountType } from "../../../schemas/validationAccount";
import { TextCustom } from "../../../components/TextCustom";

interface FormEmailProps {
  control: Control<CreateAccountType>;
  handleValidEmail: () => void;
  errorEmail?: string;
}

export function FormEmail({
  control,
  handleValidEmail,
  errorEmail,
}: FormEmailProps) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20, marginTop: 10 }}>
        <TextCustom size={27} value="Join us today" />
        <TextCustom
          fontFamily="openSanslight"
          color="inputPlaceholder"
          value="Enter your email to get started an new account"
        />
      </View>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Label
            inputProps={{
              value: field.value,
              onChangeText: field.onChange,
              onBlur: field.onBlur,
            }}
            error={errorEmail || error?.message}
            nameInput="Email"
            placeholder="YourEmail@gmail.com"
          />
        )}
      />
      <Button onPress={handleValidEmail} name="Continue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 2,
  },
  title: {
    fontSize: 27,
  },
  paragraph: {
    fontSize: 18,
  },
});
