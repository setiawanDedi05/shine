import { icons } from "@/constants";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function SearchInput({
  value,
  onChangeValue,
  keyboardType,
  style,
}: {
  value: string;
  onChangeValue: (e: string) => void;
  keyboardType?: string;
  style?: string;
}) {
  return (
    <View className="flex flex-row items-center gap-2">
      <TextInput
        className="flex-1 border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl items-center focus:border-secondary  text-white font-semibold text-base"
        onChangeText={onChangeValue}
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
      />
      <TouchableOpacity>
        <Image source={icons.search} className="size-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}
