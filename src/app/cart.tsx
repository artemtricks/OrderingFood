import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, FlatList } from "react-native";
import { useCart } from "../providers/CartProvider";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <Text>Cart {items.length}</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View>
            <Text>{item.quantity}</Text>
          </View>
        )}
      />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
