import { Product } from "model/product";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const images: Record<string, ImageSourcePropType> = {
  nutella: require("@assets/nutella.jpeg"),
};

const ProductHeader = (props: { product: Product }) => {
  const product = props.product;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.nameAndChevron}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="chevron-left" size={32} color="#ffff" />
          <View style={{ width: 30 }}></View>
          <Text style={styles.name}>{product.name}</Text>
        </View>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.productImage}
          source={images[product.imageName]}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "#EDB346",
  },
  nameAndChevron: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
  },
  image: {
    position: "absolute",
    right: 30,
    bottom: -40,
    borderRadius: 100,
    backgroundColor: "#ffff",
    shadowColor: "#000",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
});

export default ProductHeader;
