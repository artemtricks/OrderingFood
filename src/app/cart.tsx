import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, FlatList } from "react-native";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartItemsList";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      {/* <Text>Cart {items.length}</Text> */}
      <FlatList
        contentContainerStyle={{ gap: 10, padding: 10 }}
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
