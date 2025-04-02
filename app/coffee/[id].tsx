import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { coffeeDrinks, coffeeTypes } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons/faCaretLeft";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  //   fetch the coffee based on id
  const coffeeId = typeof id === "string" ? parseInt(id, 10) : Number(id);
  const selectedCoffee = coffeeDrinks.find((coffee) => coffee.id === coffeeId);

  return (
    <SafeAreaView className="bg-light-cream flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <View className="flex flex-row items-center justify-between">
          <FontAwesomeIcon icon={faCaretLeft} size={20} />
          <Text className="text-2xl font-bold">Details</Text>
          <FontAwesomeIcon icon={faHeart} size={20} />
        </View>

        <View style={{ height: 200, marginVertical: 20 }}>
          <Image
            source={selectedCoffee?.image}
            className="w-full rounded-xl my-4 h-full"
            resizeMode="cover"
          />
        </View>
        <View className="my-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-2xl">{selectedCoffee?.name}</Text>
            <Text className="text-lg font-bold text-medium-gray">
              Origin: {selectedCoffee?.origin}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between mt-4">
            <Text className="text-lg font-bold text-medium-gray">
              Calories: {selectedCoffee?.calories}
            </Text>
            <Text className="text-medium-gray text-lg">
              {selectedCoffee?.isHot ? "Hot" : "Iced"}
            </Text>
          </View>
          <View className="mt-2 mb-2">
            <Text className="text-lg">
              <Text className="font-bold">Ingredients:</Text>{" "}
              {selectedCoffee?.ingredients.join(", ")}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between mt-4">
            <Text className="text-lg font-bold text-medium-gray">
              Strength: {selectedCoffee?.strength}
            </Text>
            <Text className="text-lg font-bold text-medium-gray">
              Preparation Time: {selectedCoffee?.preparationTime} seconds
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: "#5E5E53",
              borderBottomWidth: 0.5,
              marginVertical: 10,
            }}
          />
          {/*  Description*/}
          <View>
            <Text className="font-bold text-2xl mb-2">Description</Text>
            <Text className="text-medium-gray text-lg leading-[32px]">
              {selectedCoffee?.description}
            </Text>
          </View>
          {/* Size */}
          <View className="my-4">
            <Text className="font-bold text-2xl mb-2">Size</Text>
            <View className="flex flex-row items-center gap-4">
              <FlatList
                data={selectedCoffee?.sizes}
                horizontal
                showsHorizontalScrollIndicator={false}
                className=""
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                renderItem={({ item, index }) => (
                  <Pressable
                    onPress={() => {}}
                    className="p-2 rounded-md border border-medium-gray h-12 w-24 flex items-center justify-center"
                  >
                    <Text className="text-lg font-bold">{item}</Text>
                  </Pressable>
                )}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View className="w-4" />}
              />
            </View>
          </View>
          {/*    Flavors */}
          <View className="my-4">
            <Text className="font-bold text-2xl mb-2">Flavors</Text>
            <View className="flex flex-row items-center gap-4">
              <FlatList
                data={selectedCoffee?.flavors}
                horizontal
                showsHorizontalScrollIndicator={false}
                className=""
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                renderItem={({ item, index }) => (
                  <Pressable
                    onPress={() => {}}
                    className="p-2 rounded-md border border-medium-gray h-12 w-24 flex items-center justify-center"
                  >
                    <Text className="text-lg font-bold">{item}</Text>
                  </Pressable>
                )}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View className="w-4" />}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 80,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View className="flex flex-row items-center gap-8">
          <View className="">
            <Text className="text-xl text-medium-gray">Price</Text>
            <Text className="font-bold text-2xl text-warm-brown">
              Kes ${selectedCoffee?.price}
            </Text>
          </View>
          <View className="flex-1">
            <Pressable className="bg-warm-brown rounded-lg flex items-center justify-center p-2 h-16">
              <Text className="text-white font-bold text-lg">Buy Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Details;
