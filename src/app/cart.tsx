import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, FlatList } from "react-native";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartItemsList";
import Button from "../components/Button";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        contentContainerStyle={{ gap: 10, marginBottom: 10 }}
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <Text style={{ fontWeight: "500", fontSize: 20, marginBottom: 10 }}>
        Total price $: {total}
      </Text>
      <Button text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
