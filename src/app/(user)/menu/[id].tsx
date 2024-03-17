import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImg } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = React.useState<PizzaSize>("M");
  const handleSize = (size: PizzaSize) => {
    setSelectedSize(size);
  };

  const { addItem } = useCart();

  const product = products.find((item) => item.id.toString() === id);
  const addedToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image ?? defaultPizzaImg }}
        style={styles.image}
      />
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((item, index) => (
          <Pressable
            onPress={() => handleSize(item)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === item ? "gainsboro" : "white",
              },
            ]}
            key={index}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === item ? "black" : "gray" },
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to card" onPress={addedToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 10 },
  image: { width: "100%", aspectRatio: 1 },
  price: { fontSize: 18, fontWeight: "bold", marginTop: "auto" },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ProductDetailScreen;
