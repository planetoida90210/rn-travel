import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  title: string;
  imgSrc: ImageSourcePropType;
  type: string;
  setType?: Dispatch<SetStateAction<string>> | undefined;
};

const MenuContainer = ({ title, imgSrc, type, setType }: Props) => {
  const handlePress: () => void = () => {
    if (setType) setType(title);
  };
  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
      <View
        className={`w-24 h-24 shadow-sm rounded-full p-2 items-center justify-center ${
          type === title ? "bg-gray-200" : ""
        }`}
      >
        <Image className="w-full h-full object-contain" source={imgSrc} />
      </View>
      <Text className="capitalize text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
