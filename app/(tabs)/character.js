import { View, ScrollView, Text } from "react-native";
import { Screen } from "../../components/Screen";
import { Stack } from "expo-router";
import { CharacterCard } from "../../components/CharacterCard";
export default function character() {
  // Array donde se guardarán los componentes generados por el bucle
  const characterCards = [];

  // Bucle for para generar 30 componentes CharacterCard
  for (let i = 1; i <= 32; i++) {
    characterCards.push(
      <CharacterCard
        key={i}
        name={`Character ${i}`}
        description={`This is the description of character number ${i}`}
        image={`nombre-${i}`}
      />
    );
  }
  return (
    <Screen>
      <Stack />
      <View>
        <ScrollView className="flex-column px-4">
          <Text className="text-white text-2xl font-bold mb-4 text-center">
            Personajes
          </Text>
          <View className="flex-row flex-wrap align-center justify-evenly gap-4">
            {characterCards} {/* Renderizamos los 30 CharacterCard generados */}
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}
