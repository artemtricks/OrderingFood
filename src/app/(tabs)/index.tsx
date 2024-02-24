import { Text, View, Image, FlatList } from "react-native";
import ProductListItem from "@/src/components/ProductListItem";
import products from "@/assets/data/products";

export default function MenuScreen() {
  return (
    <View>
      {/* {products.map((item) => (
        <ProductListItem {...item} key={item.id} />
      ))} */}
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => <ProductListItem product={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
