import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { coffeeDrinks } from "@/constants";

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  //   fetch the coffee based on id
  const coffeeId = typeof id === "string" ? parseInt(id, 10) : Number(id);
  const selectedCoffee = coffeeDrinks.find((coffee) => coffee.id === coffeeId);

  console.log(selectedCoffee);

  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};
export default Details;
