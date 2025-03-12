import React from "react";
import { Image, View, StyleSheet } from "react-native";

export const Logo = (props) => (
  <Image
    source={require("../assets/logo.png")}
    style={{ width: "100%", height: "120", resizeMode: "contain" }}
  />
);
