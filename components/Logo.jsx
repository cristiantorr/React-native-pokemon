import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Logo = ({ src, alt = "Logo", width = 100, height = 100 }) => (
  <View>
    <Image source={src} style={[styles.image, { height }]} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    width: "100%", // Esto hace que el contenedor ocupe todo el ancho disponible
    alignItems: "center", // Centra la imagen horizontalmente si es necesario
  },
  image: {
    width: "100%", // Esto hace que la imagen ocupe todo el ancho de su contenedor
    resizeMode: "contain", // Asegura que la imagen mantenga su aspecto
  },
});
export default Logo;
