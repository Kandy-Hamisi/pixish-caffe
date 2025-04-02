import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { Link } from "expo-router";

interface Coffee {
  id: number;
  name: string;
  type: string;
  description: string;
  ingredients: string[];
  preparationTime: number; // in minutes
  strength: number;
  origin: string;
  image: ImageSourcePropType;
  price: number;
  calories: number;
  isHot: boolean;
  sizes: string[];
  flavors: string[];
}

const CoffeeCard = ({ id, image, name, type, price }: Coffee) => {
  return (
    <Link
      href={`/coffee/${id}` as `/coffee/[id]`}
      className="bg-white shadow-2xl rounded-xl p-2 flex flex-col gap-3 flex-1"
      asChild
    >
      <Pressable>
        <Image
          source={image}
          resizeMode="cover"
          className="rounded-lg h-[100px] w-full"
        />
        <View>
          <Text className="font-bold text-xl mb-2">{name}</Text>
          <Text className="text-medium-gray">{type}</Text>
        </View>
        <View className="flex flex-row items-center gap-8 justify-between w-full">
          <View className="flex-1">
            <Text className="text-xl font-bold">Kes {price}</Text>
          </View>
          <Pressable className="bg-warm-brown p-2 rounded-md">
            <FontAwesomeIcon icon={faPlus} color="white" size={20} />
          </Pressable>
        </View>
      </Pressable>
    </Link>
  );
};
export default CoffeeCard;
