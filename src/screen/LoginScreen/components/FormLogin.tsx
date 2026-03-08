import { StyleSheet, View } from "react-native";
import { Button } from "../../../components/Button";
import { Label } from "../../../components/Label";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, LoginType } from "../../../schemas/validationAccount";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useAuthApi } from "../../../hooks/Apis/useAuthApi";
import { useDispatch } from "react-redux";
import { RootState } from "../../../libs/axios/store/store";
import { setUser } from "../../../libs/axios/store/slices/UserSlice";

export function FormLogin() {
  const { control, handleSubmit } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  const { singnIn } = useAuthApi();

  const { isPending, mutate } = useMutation({
    mutationFn: (data: LoginType) => singnIn(data),
    onSuccess: (data) => dispatch(setUser(data.data)),
  });

  function onSubmit(data: LoginType) {
    mutate(data);
  }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <Label
            error={error?.message}
            inputProps={{
              ...field,
              onChangeText: field.onChange,
            }}
            placeholder="YourEmail@gmail.com"
            nameInput="Email"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <Label
            inputProps={{
              ...field,
              onChangeText: field.onChange,
              secureTextEntry: true,
            }}
            error={error?.message}
            placeholder="*******"
            nameInput="Password"
          />
        )}
      />
      <Button
        isLoading={isPending}
        onPress={handleSubmit(onSubmit)}
        name="Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    alignItems: "center",
  },
});
