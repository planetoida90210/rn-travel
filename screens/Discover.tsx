import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { GOOGLE_PLACES_API_KEY } from "@env";

//external imports
import { FontAwesome } from "@expo/vector-icons";
import { StackParamList } from "../App";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import ItemCardContainer from "../components/ItemCardContainer";

export type NavigationProp = NativeStackNavigationProp<StackParamList, "Discover">;

const Discover = () => {
  // const navigation = useNavigation<NavigationProp>();
  const [type, setType] = useState<string>("restaurants");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer key={"hotel"} title="hotels" imgSrc={Hotels} type={type} setType={setType} />
            <MenuContainer
              key={"attractions"}
              title="attractions"
              imgSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="restaurants"
              imgSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
              </TouchableOpacity>
            </View>
            <View className="px-4 mt-8 flex-row items-center justify-evenly">
              <ItemCardContainer
                key={101}
                imageSrc={"https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg"}
                title="SteakHouse"
                location="Warsaw"
              />
              <ItemCardContainer
                key={102}
                imageSrc={"https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_960_720.jpg"}
                title="ShrimpHouse"
                location="Warsaw"
              />
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
