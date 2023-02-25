import { View, Text } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

//external imports
import { StackParamList } from "../App";

export type NavigationProp = NativeStackNavigationProp<StackParamList, "Discover">;

const Discover = () => {
  return (
    <View>
      <Text>Discover</Text>
    </View>
  );
};

export default Discover;
