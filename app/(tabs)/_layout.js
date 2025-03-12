import { Tabs } from "expo-router";
import { HomeIcon, AboutIcon, CharacterIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "yellow",
        headerTransparent: true,
      }}
    >
      {/* <Tabs.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <HomeIcon />,
          headerRight: () => <InfoIcon />,
        }}
      > */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="about"
        options={{
          title: "Historia",
          tabBarIcon: ({ color }) => <AboutIcon color={color} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="character"
        options={{
          title: "Personajes",
          tabBarIcon: ({ color }) => <CharacterIcon color={color} />,
        }}
      ></Tabs.Screen>

      {/* </Tabs.Navigator> */}
    </Tabs>
  );
}
