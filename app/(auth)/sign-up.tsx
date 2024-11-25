import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/ui/FormField";
import CustomButton from "@/components/ui/CustomButton";
import { Link, router } from "expo-router";
import { createAccount } from "@/lib/appwrite";

export default function SignUpScreen() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const submit = async () => {
    if (!form.email || !form.username || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }
    setIsSubmit(true);

    try {
      await createAccount(
        form.email,
        form.password,
        form.username
      );

      //set it to global state ....
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmit(false);
    }
  };
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full justify-center
        min-h-[83vh] px-4 my-6"
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10">
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            onChangeValue={(e: string) => setForm({ ...form, username: e })}
          />
          <FormField
            title="Email"
            value={form.email}
            keyboardType="email-address"
            onChangeValue={(e: string) => setForm({ ...form, email: e })}
          />
          <FormField
            title="Password"
            value={form.password}
            onChangeValue={(e: string) => setForm({ ...form, password: e })}
          />
          <CustomButton
            title={"Sign Up"}
            handlePress={submit}
            containerStyle="mt-10"
            isLoading={isSubmit}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-regular">
              have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-semibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
