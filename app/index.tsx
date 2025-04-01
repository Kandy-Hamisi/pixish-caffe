import React from 'react'
import {Redirect} from "expo-router";

const Index = () => {

    const isSignedIn = false;
    console.log("page loaded:::::::::::::::::::::")

    if (isSignedIn) {
        return <Redirect href="/(root)/(tabs)/home" />
    }

    return <Redirect href="/(auth)/welcome" />
}
export default Index
