import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <ImageBackground
        source={require("../../../../assets/bgi.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Text style={styles.title}>Movies App</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    color: "white",
    letterSpacing: 10,
  },
});
