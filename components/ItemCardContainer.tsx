import { View, Text, TouchableOpacity, Image, ImageURISource } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

type Props = {
  imageSrc: string;
  title: string;
  location: string;
};

const ItemCardContainer = ({ imageSrc, title, location }: Props) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[170px] my-2">
      <Image source={{ uri: imageSrc }} className="w-full h-40 rounded-md object-cover" />
      {title && (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
            {title?.length > 13 ? `${title.slice(0, 13)}..` : title}
          </Text>
          <View className="flex-row items-center space-x-1">
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text className="text-[#428288] text-[14px] font-bold">
              {location?.length > 15 ? `${location.slice(0, 15)}..` : location}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
