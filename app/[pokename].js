import { Text, View, ScrollView, ActivityIndicator, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { getPokemonDetails } from "../lib/pokemon";
import { useEffect, useState } from "react";
import { Score } from "../components/Score";

export default function Detail() {
  const { pokename } = useLocalSearchParams();

  const [pokeinfo, setPokeinfo] = useState({});
  useEffect(() => {
    if (pokename) {
      getPokemonDetails(pokename).then((pokeinfo) => {
        setPokeinfo(pokeinfo);
      });
    }
  }, [pokename]);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: pokename,
          headerRight: () => {},
        }}
      />
      <View>
        {pokeinfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View>
              <View className="justify-center items-center">
                <Image
                  className="mb-4 rounded "
                  source={{ uri: pokeinfo.image }}
                  style={{ width: 214, height: 294, resizeMode: "cover" }}
                ></Image>
              </View>
              <Score stats={pokeinfo.stats} />
              <View className="flex-col gap-2 p-2 justify-center items-center">
                <Text className="text-white mb-2 font-bold text-3xl uppercase">
                  {pokeinfo.name}
                </Text>
                <View className="flex-row gap-2 justify-center items-center">
                  <Text className="text-white mb-2">
                    Peso: {pokeinfo.weight}
                  </Text>
                  <Text className="text-white mb-2">
                    Altura: {pokeinfo.height}
                  </Text>
                </View>
                <Text className="text-white text-justify text-base">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non risus. Suspendisse lectus tortor, dignissim sit amet,
                  adipisicing nec, ultricies sed, dolor. Cras elementum
                  ultricesdiam. Maecenas ligula massa, varius
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
