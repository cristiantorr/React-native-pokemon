import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { getPokemonDetails } from "../lib/pokemon";
import { useEffect, useState } from "react";
import { Score } from "../components/Score";
import { getPokemonDescription } from "../lib/pokemon";

export default function Detail() {
  // Obtenemos el nombre del pokemon de la url
  const { pokename } = useLocalSearchParams();

  const [pokeinfo, setPokeinfo] = useState({});
  const [pokeDescription, setPokeDescription] = useState([]);

  useEffect(() => {
    if (pokename) {
      getPokemonDetails(pokename).then((pokeinfo) => {
        setPokeinfo(pokeinfo);
      });
      getPokemonDescription(pokename).then((descriptions) => {
        setPokeDescription(descriptions);
      });
    }
  }, [pokename]);

  // Función recursiva para recorrer el objeto y extraer URLs
  function extractImageUrls(obj) {
    const urls = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (
          value &&
          typeof value === "string" &&
          value.startsWith("http") &&
          value.endsWith(".png")
        ) {
          urls.push(value); // Si el valor es una URL, agregarla a la lista
        } else if (value && typeof value === "object") {
          urls.push(...extractImageUrls(value)); // Si es un objeto, hacer llamada recursiva
        }
      }
    }

    return urls;
  }

  // Llamar a la función con el objeto de sprites
  const imageUrls = extractImageUrls(pokeinfo.sprites).slice(0, 20);

  // URLs de las imágenes sprites de la api de pokemon

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: pokename.charAt(0).toUpperCase() + pokename.slice(1),
          headerRight: () => {},
        }}
      />
      <View className="mb-10">
        {pokeinfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View>
              <View className="justify-center items-center">
                <Image
                  className="mb-4 rounded "
                  source={{ uri: pokeinfo.image }}
                  style={{ width: 214, height: 294, resizeMode: "contain" }}
                />
              </View>
              <Score stats={pokeinfo.stats} />
              <View className="flex-col items-center">
                <Text className="text-white font-bold text-3xl uppercase">
                  {pokeinfo.name}
                </Text>
                <View className="flex-row gap-5 justify-center items-center mb-5">
                  <Text className="text-white mb-2">
                    Peso: {pokeinfo.weight}
                  </Text>
                  <Text className="text-white mb-2">
                    Altura: {pokeinfo.height}
                  </Text>
                  <Text className="text-white mb-2">Tipo: {pokeinfo.type}</Text>
                </View>

                {pokeDescription && pokeDescription.length > 0 ? (
                  <View className="flex-col gap-2 p-2">
                    <Text className="text-white font-bold text-3xl uppercase text-center mb-4">
                      Descripción del Pokémon
                    </Text>
                    {pokeDescription.map((description, index) => (
                      <View key={index} className="flex-row items-center mb-2">
                        {/* Punto verde */}
                        <View
                          style={{
                            width: 8, // Tamaño del punto
                            height: 8,
                            borderRadius: 4, // Redondear el punto
                            backgroundColor: "green", // Color verde
                            marginRight: 10, // Espacio entre el punto y el texto
                          }}
                        />
                        {/* Descripción */}
                        <Text className="text-white text-base  whitespace-normal">
                          {description}
                        </Text>
                      </View>
                    ))}
                  </View>
                ) : (
                  <Text className="text-white">
                    No se encontraron descripciones.
                  </Text>
                )}
                <Text className="text-white font-bold text-3xl uppercase text-center m-5">
                  GALERÍA DEL POKEMÓN EN EL PASO DEL TIEMPO
                </Text>
                <View style={styles.container}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {imageUrls.map(
                      (url, index) =>
                        url ? ( // Verificamos si la URL existe
                          <View style={styles.card} key={index}>
                            <Image source={{ uri: url }} style={styles.image} />
                          </View>
                        ) : null // Si no hay URL, no renderizamos nada
                    )}
                  </ScrollView>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#333",
  },

  card: {
    marginRight: 10,
    backgroundColor: "#444",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 8,
    resizeMode: "contain",
  },
});
