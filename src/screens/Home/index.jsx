import { View, StyleSheet, FlatList, StatusBar, Text } from "react-native";
import React from "react";
import Header from "./components/header/Header";
import Card from "../../components/card/Card";

const DATA = [
  {
    key: 1,
    imageUrl: require("../../../src/assets/1.png"),
    isFavorite: false,
  },
  {
    key: 2,
    imageUrl: require("../../../src/assets/2.png"),
    isFavorite: false,
  },
  {
    key: 3,
    imageUrl: require("../../../src/assets/3.png"),
    isFavorite: false,
  },
  {
    key: 4,
    imageUrl: require("../../../src/assets/4.png"),
    isFavorite: false,
  },
  {
    key: 5,
    imageUrl: require("../../../src/assets/5.png"),
    isFavorite: false,
  },
  {
    key: 6,
    imageUrl: require("../../../src/assets/6.png"),
    isFavorite: false,
  },
  {
    key: 7,
    imageUrl: require("../../../src/assets/7.png"),
    isFavorite: false,
  },
  {
    key: 8,
    imageUrl: require("../../../src/assets/8.png"),
    isFavorite: false,
  },
];

const renderItem = ({ item }) => <Card item={item} />;

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <Text style={styles.title}>What's New</Text>
      <View style={styles.flatList}>
        <FlatList
          renderItem={renderItem}
          numColumns={2}
          data={DATA}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    flex: 0.3,
  },
  title: {
    fontSize: 30,
    color: "black",
    marginTop: 30,
    marginHorizontal: 20,
    textDecorationLine: "underline",
    alignSelf: "center",
  },
  flatList: {
    flex: 0.7,
  },
  flatListContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});
