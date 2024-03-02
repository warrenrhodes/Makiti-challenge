export interface Product {
  name: string;
  description?: string | null;
  code: string;
  price: string;
  weight: Weight;
  // Only used for testing. in the real world, this would be a URL.
  imageName: string;
}

export interface Weight {
  unit: "kg" | "g";
  value: number;
}
