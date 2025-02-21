import React from "react";
import { Image, View, StyleSheet } from "react-native";

export const Logo = (props) => (
  <Image
    source={require("../assets/logo.png")}
    style={{ width: 200, height: 100 }}
  />
);
