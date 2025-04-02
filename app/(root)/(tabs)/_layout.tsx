import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
        initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#C67C4E",
          tabBarInactiveTintColor: "#313131",
          tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
              backgroundColor: "white",
              height: 80,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'absolute',
              flexDirection: "row",
              paddingBottom: 30,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,

          },
        }),
      }}>
        <Tabs.Screen
            name="home"
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            }}
        />
        <Tabs.Screen
            name="favorites"
            options={{
                title: 'Favorites',
                tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            }}
        />
        <Tabs.Screen
            name="cart"
            options={{
                title: 'Cart',
                tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            }}
        />
        <Tabs.Screen
            name="notifications"
            options={{
                title: 'Notifications',
                tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            }}
        />
    </Tabs>
  );
}
