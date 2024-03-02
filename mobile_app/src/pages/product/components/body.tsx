import { Product } from "model/product";
import { View, StyleSheet, Text } from "react-native";

export default function ProductBody(props: { product: Product }) {
  const product = props.product;

  return (
    <View style={styles.bodyContainer}>
      <View style={{ padding: 20 }}>
        <Text>
          {product.name} {product.weight.value}
          {product.weight.unit}
        </Text>
      </View>
      <View>
        <Text style={styles.codeBar}>
          {"Code bar: "}
          {product.code}
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{"Description: "}</Text>
        <Text style={styles.descriptionDetail}>{product.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
  },
  codeBar: {
    paddingTop: 80,
    paddingBottom: 80,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    width: "100%",
    backgroundColor: "#EDB346",
    padding: 20,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  descriptionDetail: {
    color: "#fff",
    paddingLeft: 10,
    lineHeight: 20,
  },
});
