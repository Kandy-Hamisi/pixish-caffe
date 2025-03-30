import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <SafeAreaView className="h-full flex-1 relative">
            <ImageBackground source={require("@/assets/images/coffee-1.jpg")} resizeMode="cover" className="flex-1 absolute -top-[25%] h-full w-full">
                <Text className="text-2xl font-bold text-white">Hello There</Text>
            </ImageBackground>
            <View className="absolute top-[65%] flex items-center justify-center">
                <Text className="text-5xl font-bold max-w-[25rem] text-white text-center">Fall in Love with Coffee in Blissful Delight!</Text>
                <Text className="text-gray-500 ">Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
            </View>
        </SafeAreaView>
    )
}
export default Welcome