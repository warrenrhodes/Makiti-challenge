import ProductPageView from "pages/product/product_page_view";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Product } from "model/product";

const product: Product = {
  name: "Nutella",
  description:
    "Sugar, Palm Oil, Hazelnuts (13%), Skimmed Milk Powder (8.7%), Fat-Reduced Cocoa (7.4%), Emulsifier: Lecithins (Soya), Vanillin. Nutella® est sur les tables du petit-déjeuner de millions de personnes dans le monde depuis plus de 50 ans, offrant de bons moments pour commencer la journée. Une tranche de pain avec du Nutella® a un goût délicieux. Grâce à notre recette unique et inimitable, Nutella® est devenu la pâte à tartiner aux noisettes et au cacao la plus populaire et emblématique du monde.",
  code: "4008400401829",
  price: "5000 XAF",
  weight: {
    unit: "kg",
    value: 1,
  },
  imageName: "nutella",
};
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor={"#000"} />
      <ProductPageView product={product} />
    </SafeAreaView>
  );
}
