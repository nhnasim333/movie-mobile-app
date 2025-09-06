import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold text-dark-200">
        Welcome to Movie App!
      </Text>
      <Link href="/onboarding">
        <Text>Go to Onboarding</Text>
      </Link>
    </View>
  );
}
