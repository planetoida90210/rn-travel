import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

//external imports
import { StackParamList } from "../App";
import { Avatar, Hotels } from "../assets";
import { GOOGLE_PLACES_API_KEY } from "@env";
import MenuContainer from "../components/MenuContainer";

export type NavigationProp = NativeStackNavigationProp<StackParamList, "Discover">;

const Discover = () => {
  // const navigation = useNavigation<NavigationProp>();
  const [type, setType] = useState("restaurants");

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[38px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[30px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image source={Avatar} className="w-full h-full rounded-md object-cover" />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: GOOGLE_PLACES_API_KEY!,
            language: "pl",
          }}
        />
      </View>
      {/* Menu container */}
      <ScrollView>
        <View className="flex-row items-center justify-center px-8 mt-8">
          <MenuContainer key={"hotel"} title="Hotels" imgSrc={Hotels} type={type} setType={setType} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
