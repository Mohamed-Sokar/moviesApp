import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icons from "../../../../utils/Icons";
import { MoviesContext } from "../../../../context/context";

export default function Card({ item }) {
  const { addFavouriteMovie, removeFavouriteMovie, favoutiteMovies } =
    React.useContext(MoviesContext);

  const onPressHandler = () => {
    item.isFavorite = !item.isFavorite;
    item.isFavorite ? addFavouriteMovie(item) : removeFavouriteMovie(item);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageUrl}
        resizeMode="stretch"
        style={styles.bgImage}
      >
        <TouchableOpacity style={styles.icon} onPress={onPressHandler}>
          {item.isFavorite ? Icons.heart : Icons.hearto}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  bgImage: {
    width: 145,
    height: 170,
  },
});
