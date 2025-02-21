import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon, InfoIcon, AboutIcon } from "../../components/Icons";

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
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <AboutIcon color={color} />,
        }}
      ></Tabs.Screen>

      {/* </Tabs.Navigator> */}
    </Tabs>
  );
}
