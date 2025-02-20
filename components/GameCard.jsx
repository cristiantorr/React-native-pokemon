import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
export function GameCard({ game }) {
  return (
    <View key={game.url} className="bg-white rounded-lg shadow-md">
      <Image source={{ uri: game.image }} style={styles.image}></Image>
      <Text style={styles.title}>{game.name}</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },

  image: {
    width: 400,
    height: 147,
    objectFit: "cover",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
});
