import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Post } from "@/type/post";
import { icons } from "@/constants";

export default function VideoCard({
  video: {
    title,
    creator: { avatar, username },
    thumbnail,
  },
}: {
  video: Post;
}) {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="overflow-hidden items-center flex-row flex-1 gap-3">
          <View className="size-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 gap-y-1">
            <Text
              className="text-white font-semibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="text-xs text-gray-100 font-regular">
              @{username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="size-4" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="size-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}