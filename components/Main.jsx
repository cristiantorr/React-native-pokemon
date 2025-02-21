import { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { getPokemons } from "../lib/pokemon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";
// Se puede utilizar ell import o required
/* import icon from "./assets/icon.png";
 */
/* const icon = require("./assets/icon.png"); */

export function Main() {
  // Definimos un estado que cada vez que cambia de valor se vuelve a renderizar el componente y así refleja los cambios
  const [games, setGames] = useState([]);

  const insets = useSafeAreaInsets();
  // Cada vez que cambian las dependencias -> }, []); si existen, o cada vez que se renderiza el componente este useEffect se ejecuta 1 vez. Como no hay dependencias en el array solo se ejecutara 1 vez

  useEffect(() => {
    /* getPokemons().then((games) => {
      setGames(games);
    }); */
    const fetchData = async () => {
      const games = await getPokemons();
      setGames(games);
    };
    fetchData();
  }, []);

  return (
    <Screen className="bg-black">
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.url}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
