import {
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  ViewToken,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { Post } from "@/type/post";
import { icons } from "@/constants";

const TrendingItem = ({
  activeItem,
  item,
}: {
  activeItem: string;
  item: Post;
}) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? "zoomIn" : "zoomOut"}
      duration={500}
    >
      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="relative justify-center items-center"
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40 opacity-40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute z-30"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

export default function Trendings({ posts }: { posts: Post[] }) {
  const [activeItem, setActiveItem] = useState<string>(posts[0]?.$id as string);
  const viewAbleItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken<Post>[];
    changed: ViewToken<Post>[];
  }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewAbleItemsChanged}
      horizontal
    />
  );
}
