import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StackParamList } from "../App";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = NativeStackScreenProps<StackParamList, "ItemScreen">;

export type NavigationProp = NativeStackNavigationProp<StackParamList>;

const ItemScreen = ({ route }: Props) => {
  const navigation = useNavigation<NavigationProp>();

  const data = route?.params?.param;

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome5
                onPress={() => navigation.navigate("Home")}
                name="heartbeat"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
