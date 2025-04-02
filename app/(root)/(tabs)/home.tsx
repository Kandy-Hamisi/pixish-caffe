import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faSliders } from "@fortawesome/free-solid-svg-icons/faSliders";
import { coffeeDrinks, coffeeTypes } from "@/constants";
import CoffeeCard from "@/components/CoffeeCard";

const Home = () => {
  console.log("Home page loaded");

  const [numColumns, setNumColumns] = useState<number>(2);

  return (
    <SafeAreaView className="relative bg-light-cream flex-1 flex flex-col">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        nestedScrollEnabled={true}
      >
        {/* location and input */}
        <View className="flex-col h-[250px] relative bg-dark-gray pt-12 px-6">
          {/*    location    */}
          <View className=" mb-5">
            <Text className="text-light-cream text-lg">Location</Text>
            <Text className="text-white text-xl font-bold mt-3">
              Mombasa, Kenya
            </Text>
          </View>
          {/*    input    */}
          <View className="flex flex-row items-center gap-4">
            <View className="relative flex w-[80%] flex-row items-center gap-3 bg-medium-gray rounded-lg h-16 px-3">
              <View className="">
                <FontAwesomeIcon icon={faSearch} color="white" size={20} />
              </View>
              <TextInput
                placeholder="Search coffee"
                className="w-full placeholder:text-white placeholder:text-lg"
              />
            </View>
            <View className="bg-warm-brown h-16 flex items-center justify-center p-4 w-16 rounded-lg">
              <FontAwesomeIcon icon={faSliders} color="white" size={20} />
            </View>
          </View>
        </View>
        {/*    content     */}
        <View className=" bg-light-peach rounded-xl mx-6 p-4 -mt-16">
          <Text className="bg-red-300 text-white w-16 flex items-center justify-center rounded-md mb-4 p-2">
            Promo
          </Text>
          <View className="flex flex-row items-center gap-2">
            <Text className="text-white text-5xl font-bold max-w-[15rem]">
              Buy one get one Free
            </Text>
            <View className="relative h-[100px] w-[100px] justify-end">
              <Image
                source={require("@/assets/images/coffee-1.jpg")}
                className="w-full h-full rounded-full border-4 border-warm-brown"
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        {/*    Coffee Tabs  */}
        <FlatList
          data={coffeeTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mx-6 mt-3 h-24"
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {}}
              className="p-2 rounded-md bg-warm-brown"
            >
              <Text className="text-white text-lg font-bold">{item.name}</Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View className="w-4" />}
        />
        {/*    The coffee drinks  */}
        <FlatList
          data={coffeeDrinks}
          numColumns={2}
          columnWrapperStyle={{
            gap: 20,
            justifyContent: "space-between",
            paddingRight: 5,
            marginBottom: 20,
          }}
          className="mt-2 pb-32 mx-6"
          renderItem={({ item }) => <CoffeeCard {...item} />}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
