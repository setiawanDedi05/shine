import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchInput from "@/components/ui/SearchInput";
import Trendings from "@/components/ui/Trendings";
import EmptyState from "@/components/ui/EmptyState";
import useAppwrite from "@/hooks/useAppwrite";
import { getAllPosts } from "@/lib/appwrite";
import VideoCard from "@/components/ui/VideoCard";
import { Post } from "@/type/post";

export default function HomeScreen() {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getAllPosts);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = async () => {
    setRefresh(true);
    await refetch();
    setRefresh(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item: Post) => item.$id}
        renderItem={({ item }: { item: Post }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-medium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-semibold text-white">Dedi</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput value={""} onChangeValue={() => {}} />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-regular mb-3">
                Trendings Videos
              </Text>

              <Trendings posts={latestPosts} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}
