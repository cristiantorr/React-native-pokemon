import { View, ScrollView, Text } from "react-native";
import { Screen } from "../../components/Screen";
import { Stack } from "expo-router";
import { CharacterCard } from "../../components/CharacterCard";

export default function Character() {
  // Array donde se guardarán los componentes generados por el bucle
  const characterCards = [];

  // Bucle for para generar 32 componentes CharacterCard
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
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Personajes
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              gap: 16,
            }}
          >
            {characterCards} {/* Renderizamos los 32 CharacterCard generados */}
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}
