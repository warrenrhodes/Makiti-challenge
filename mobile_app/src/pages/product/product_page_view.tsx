import { View, StyleSheet, Text, StatusBar } from "react-native";
import ProductHeader from "./components/header";
import { Product } from "model/product";
import ProductBody from "./components/body";

const ProductPageView = (props: { product: Product }) => {
  return (
    <View style={styles.container}>
      <ProductHeader product={props.product} />
      <ProductBody product={props.product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProductPageView;
