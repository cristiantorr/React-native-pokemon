/* https://pokeapi.co/api/v2/pokemon/{id or name}/*/
import { StyleSheet, Text, View } from "react-native";
export function Score({ stats }) {
  return (
    <View className="mb-4">
      {stats && (
        <View className="flex-row justify-evenly items-center">
          <View className="items-center">
            <Text className="color-gray-400 mb-1">HP</Text>
            <View className="w-8 h-8 bg-green-500 rounded-full justify-center items-center">
              <Text className="text-white text-lg font-bold">{stats.hp}</Text>
            </View>
          </View>

          <View className="items-center">
            <Text className="color-gray-400 mb-1">ATK</Text>
            <View className="w-8 h-8 bg-green-500 rounded-full justify-center items-center">
              <Text className="text-white text-lg font-bold">
                {stats.attack}
              </Text>
            </View>
          </View>
          <View className="items-center">
            <Text className="color-gray-400 mb-1">DEF</Text>
            <View className="w-8 h-8 bg-green-500 rounded-full justify-center items-center">
              <Text className="text-white text-lg font-bold">
                {stats.defense}
              </Text>
            </View>
          </View>
          <View className="items-center">
            <Text className="color-gray-400 mb-1">SP</Text>
            <View className="w-8 h-8 bg-green-500 rounded-full justify-center items-center">
              <Text className="text-white text-lg font-bold">
                {stats.speed}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
    textAlign: "center",
  },

  baseText: {
    fontWeight: "bold",
  },
});
