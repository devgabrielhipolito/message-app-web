import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../utils/colors";
import { Label } from "../../components/Label";
import { Button } from "../../components/Button";
import { Toolbar } from "../../components/Toolbar";
import { Controller, useForm } from "react-hook-form";
import {
  CreateAccountType,
  createAccountSchema,
} from "../../schemas/validationAccount";
import { useState } from "react";
import { FormData } from "./formStep/FormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEmail } from "./formStep/FormEmail";
import { useMutation } from "@tanstack/react-query";
import { useAuthApi } from "../../hooks/Apis/useAuthApi";

export function CreateAccountScreen() {
  const { control, handleSubmit } = useForm<CreateAccountType>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const { singnUp } = useAuthApi();

  const { mutate } = useMutation({
    mutationFn: (data: CreateAccountType) => singnUp(data),
  });
  function onSubmit(e: CreateAccountType) {
    mutate(e);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Toolbar back={true} title="Create Account" />
      </View>

      <FormData onSubmit={handleSubmit(onSubmit)} control={control} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 2,
  },
});
