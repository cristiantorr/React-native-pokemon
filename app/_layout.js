import { View, Text, Pressable } from "react-native";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="bg-black flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          /*  headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                {({ pressed }) => (
                  <AboutIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ), */
        }}
      />
    </View>
  );
}
