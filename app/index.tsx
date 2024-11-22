import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-black">Hi, Dedi!</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Home
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};

export default index;
