import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}: {
  title: string;
  handlePress: () => void;
  textStyle?: string;
  containerStyle: string;
  isLoading?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-semibold text-lg ${textStyle}`}>
        {isLoading ? "wait..." : title}
      </Text>
    </TouchableOpacity>
  );
}
