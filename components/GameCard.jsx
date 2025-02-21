import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
export function GameCard({ game }) {
  const { url, image, name, stats } = game; // Desestructuramos el objeto game
  console.log(name);
  return (
    <Link asChild href={`/${name}`}>
      <Pressable>
        {({ pressed }) => (
          <View
            key={url}
            className="flex-row gap-4 border-2 border-gray-700  mb-4"
            style={{ opacity: pressed ? 0.5 : 1 }}
          >
            <Image source={{ uri: image }} style={styles.image}></Image>
            <View className="flex-shrink flex-col gap-2 p-2">
              <Text className="color-white text-center text-2xl font-bold uppercase">
                {name}
              </Text>
              <Text className="color-gray-400 text-center">Api: {url}</Text>
              <Score stats={stats} />
            </View>
          </View>
        )}
      </Pressable>
    </Link>
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
    width: 100, // Ancho de la imagen
    height: 100, // Alto de la imagen (debe ser igual al ancho)
    borderRadius: 50, // Hace que la imagen sea redonda
    resizeMode: "cover",
  },
});
