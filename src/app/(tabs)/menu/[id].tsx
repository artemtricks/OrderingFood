import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: `Details ${id}` }} />
      <Text>Some Text {id}</Text>
    </View>
  );
};

export default ProductDetailScreen;
