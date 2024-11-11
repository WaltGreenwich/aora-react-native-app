import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text className="text-3xl font-pblack">
        Baby mi primera app de celular
      </Text>
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile x 2
      </Link>
    </View>
  );
}
