import { Control, Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "../../../components/Button";
import { Label } from "../../../components/Label";
import { TextCustom } from "../../../components/TextCustom";
import { CreateAccountType } from "../../../schemas/validationAccount";
interface FormEmailProps {
  control: Control<CreateAccountType>;
  onSubmit: () => void;
}

export function FormData({ control, onSubmit }: FormEmailProps) {

  

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid
      extraScrollHeight={200}
    >
      <View style={{ marginBottom: 10, padding: 5, gap: 5 }}>
        <TextCustom size={27} value="Join us today" />
        <TextCustom
          size={15}
          fontFamily="openSanslight"
          color="inputPlaceholder"
          value="Enter your email to get started an new account"
        />
      </View>

      <View style={styles.row}>
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Label
              labelStyles={{ width: "48%" }}
              nameInput="First name"
              placeholder="Ex: Gabriel"
              error={fieldState.error?.message}
              inputProps={{
                value: field.value,
                onChangeText: field.onChange,
                onBlur: field.onBlur,
              }}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState }) => (
            <Label
              labelStyles={{ width: "48%", marginLeft: "auto" }}
              nameInput="Last name"
              placeholder="Ex: Hipólito"
              error={fieldState.error?.message}
              inputProps={{
                value: field.value,
                onChangeText: field.onChange,
                onBlur: field.onBlur,
              }}
            />
          )}
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
            error={error?.message}
            nameInput="Email"
            placeholder="YourEmail@gmail.com"
          />
        )}
      />
      <Controller
        name="birthday"
        control={control}
        render={({ field, fieldState }) => (
          <Label
            nameInput="Birthday"
            placeholder="Select date"
            labelType="date"
            error={fieldState.error?.message}
            inputProps={{
              onChangeText: field.onChange,
              value: field.value,
            }}
          />
        )}
      />

      <Controller
        name="number"
        control={control}
        render={({ field, fieldState }) => (
          <Label
            keyboard="numeric"
            nameInput="Number"
            placeholder="Ex: +1 867 786890"
            error={fieldState.error?.message}
            inputProps={{
              value: field.value,
              onChangeText: field.onChange,
              onBlur: field.onBlur,
            }}
          />
        )}
      />

      <View style={styles.row}>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Label
              nameInput="Password"
              labelStyles={{ width: "48%" }}
              placeholder="••••••••"
              error={fieldState.error?.message}
              inputProps={{
                value: field.value,
                onChangeText: field.onChange,
                onBlur: field.onBlur,
                secureTextEntry: true,
              }}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <Label
              nameInput="Confirm password"
              labelStyles={{ width: "48%" }}
              placeholder="••••••••"
              error={fieldState.error?.message}
              inputProps={{
                value: field.value,
                onChangeText: field.onChange,
                onBlur: field.onBlur,
                secureTextEntry: true,
              }}
            />
          )}
        />
      </View>
      <Button style={{ marginTop: 5 }} onPress={onSubmit} name="SingUp" />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    gap: 15,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
});
