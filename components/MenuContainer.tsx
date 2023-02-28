import { View, Text, Image, ImageSourcePropType } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  title: string;
  imgSrc: ImageSourcePropType | undefined;
  type: string;
  setType?: Dispatch<SetStateAction<string>>;
};

const MenuContainer = ({ title, imgSrc, type, setType }: Props) => {
  return (
    <View>
      <Image source={imgSrc} className="w-20 h-20" />
      <Text>{title}</Text>
    </View>
  );
};

export default MenuContainer;
