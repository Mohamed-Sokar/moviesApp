import { View, FlatList, StyleSheet, StatusBar, Text } from "react-native";
import React, { useContext } from "react";
import { MoviesContext } from "../../context/context";
import Card from "../../components/card/Card";

export default function Favourite() {
  const { favoutiteMovies } = useContext(MoviesContext);
  return (
    <View style={styles.container}>
      {favoutiteMovies ? (
        <FlatList
          data={favoutiteMovies}
          numColumns={2}
          renderItem={({ item }) => <Card item={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <Text>There is not any favourite movie yet !</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  flatListContent: {
    alignItems: "center",
    justifyContent: "center",
  },
});
