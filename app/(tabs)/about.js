import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";
export default function about() {
  return (
    <Screen>
      <ScrollView className="px-4">
        {/*  <Link asChild href="/">
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link> */}
        <Text className="text-white font-bold mb-8 text-2xl text-center">
          La Aventura de Ash y Pikachu
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Hace muchos años, un joven llamado Ash Ketchum vivía en la tranquila
          ciudad de Pallet, en el mundo de los Pokémon. Desde pequeño, soñaba
          con convertirse en un Maestro Pokémon. Un día, en su décimo
          cumpleaños, recibió su primer Pokémon, un Pikachu travieso que no
          quería seguir sus órdenes. Aunque al principio no tenían una buena
          relación, Ash y Pikachu pronto se dieron cuenta de que juntos podían
          enfrentar cualquier desafío.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          En su viaje, Ash conoció a muchos entrenadores y Pokémon, y juntos
          viajaron a diferentes regiones para competir en gimnasios y participar
          en torneos. Uno de los encuentros más especiales de Ash fue con un
          Charizard, un Pokémon feroz y poderoso que, al principio, no se
          llevaba bien con él. Pero con el tiempo y mucha perseverancia, Ash
          logró ganarse su confianza, y Charizard se convirtió en uno de sus
          compañeros más fieles.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          A lo largo de su aventura, Ash y Pikachu enfrentaron todo tipo de
          rivales y vivieron innumerables desafíos, pero lo más importante era
          que siempre se apoyaban mutuamente. Su amistad fue la clave para
          superar obstáculos, derrotar a poderosos entrenadores y, sobre todo,
          descubrir que el verdadero espíritu de un Maestro Pokémon no se
          encuentra solo en ganar batallas, sino en el amor y el respeto hacia
          los Pokémon.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          En su viaje, Ash entendió que cada Pokémon es único y especial, y que
          la verdadera magia de ser un entrenador no está solo en atrapar
          Pokémon, sino en formar un vínculo fuerte con ellos. Y así, junto a
          Pikachu y sus amigos, Ash continuó su viaje, sabiendo que aún había
          mucho por descubrir en el mundo de los Pokémon.
        </Text>
      </ScrollView>
    </Screen>
  );
}
