import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";

const Welcome = () => {
    return (
        <SafeAreaView className="h-full flex-1 relative">
            <ImageBackground source={require("@/assets/images/coffee-1.jpg")} resizeMode="cover" className="flex-1 absolute -top-[25%] h-full w-full">
                <Text className="text-2xl font-bold text-white">Hello There</Text>
            </ImageBackground>
            <View className="absolute top-[65%] flex flex-col px-8 gap-8 w-full items-center justify-center">
                <Text className="text-5xl font-bold max-w-[25rem] leading-[55px] text-white text-center">Fall in Love with Coffee in Blissful Delight!</Text>
                <Text className="text-gray-500 max-w-[20rem] text-center text-lg leading-[30px]">Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
            {/*    button   */}
                <Pressable onPress={() => router.push("/(root)/(tabs)/home")} className="bg-warm-brown rounded-lg p-3 w-full flex justify-center items-center roundw">
                    <Text className="text-white text-lg font-bold">Get Started</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
export default Welcome