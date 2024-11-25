import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";

export default function FormField({
  title,
  value,
  onChangeValue,
  keyboardType,
  style,
  placeholder,
}: {
  title: string;
  value: string;
  placeholder?: string;
  onChangeValue: (e: string) => void;
  keyboardType?: string;
  style?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${style}`}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>
      <View className="flex flex-row items-center gap-2">
        <TextInput
          className="flex-1 border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl items-center focus:border-secondary  text-white font-semibold text-base"
          onChangeText={onChangeValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="size-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
