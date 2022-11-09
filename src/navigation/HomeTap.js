import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Favourite, Home } from "../screens/index";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function HomeTap() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Favourite") {
              iconName = focused ? "heart" : "heart-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          // tabBarStyle: styles.tabBarStyle,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favourite" component={Favourite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
