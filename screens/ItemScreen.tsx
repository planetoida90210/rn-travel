import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<StackParamList, "ItemScreen">;

const ItemScreen = ({ route }: Props) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  console.log(data);
  return (
    <SafeAreaView>
      <Text>ItemScreen</Text>
    </SafeAreaView>
  );
};

export default ItemScreen;
