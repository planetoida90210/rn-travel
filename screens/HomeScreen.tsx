import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

//external imports
import { StackParamList } from "../App";
import { HeroImage } from "../assets";

export type NavigationProp = NativeStackNavigationProp<StackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* Top section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* Second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[40px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[36px] font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">
          Find best spot for your trips, suprising Your friends with knowledge about new cities!
        </Text>
      </View>
      {/* Third section */}
      <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[380px] h-[380px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
      {/* Image container */}
      <View className="flex-1 relative items-center justify-center">
        <Image source={HeroImage} className="w-full h-full object-cover mt-20" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
