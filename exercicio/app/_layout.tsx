import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="/paginas/EXCINCO" />
      <Tabs.Screen name="/paginas/EXCOR" />
    </Tabs>
  );
}
