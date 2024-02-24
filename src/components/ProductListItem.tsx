import Colors from "@/src/constants/Colors";
import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Product } from "../types";

type ProductListItemProps = {
  product: Product;
};
const defaultPizzaImg =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product?.image ?? defaultPizzaImg }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    borderRadius: 20,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
