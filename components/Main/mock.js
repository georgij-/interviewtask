import ProductCardImage from "../../public/images/tv-product.png";

const Categories = ["samsung", "xiaomi", "lg", "tcl", "phillips"];

const Products = [
  {
    id: 1,
    title: "Samsung",
    category: "samsung",
    rating: 4.8,
    reviews: "12",
    description: "• M.2 80mm \n• 3d v-nand (TLC) \n• PCI-e 3.0 x4",
    price: "328,90",
    image: ProductCardImage,
  },
  {
    id: 2,
    title: "Phillips",
    category: "phillips",
    rating: 3.3,
    reviews: "34",
    description: "• M.2 80mm \n• 3d v-nand (TLC) \n• PCI-e 3.0 x4",
    price: "196,33",
    image: ProductCardImage,
  },
  {
    id: 3,
    title: "LG",
    category: "lg",
    rating: 2.4,
    reviews: "25",
    description: "• M.2 80mm \n• 3d v-nand (TLC) \n• PCI-e 3.0 x4",
    price: "106,53",
    image: ProductCardImage,
  },
  {
    id: 4,
    title: "TCL",
    rating: 4.5,
    category: "tcl",
    reviews: "28",
    description: "• M.2 80mm \n• 3d v-nand (TLC) \n• PCI-e 3.0 x4",
    price: "876,50",
    image: ProductCardImage,
  },
  {
    id: 5,
    title: "Xiaomi",
    category: "xiaomi",
    rating: 3.3,
    reviews: "11",
    description: "• M.2 80mm \n• 3d v-nand (TLC) \n• PCI-e 3.0 x4",
    price: "383,58",
    image: ProductCardImage,
  },
  {
    id: 6,
    title: "Samsung",
    category: "samsung",
    rating: 2.2,
    reviews: "33",
    description: "• M.2 80mm \n• 3d v-nand (TLC) \n• PCI-e 3.0 x4",
    price: "735,37",
    image: ProductCardImage,
  },
];

export {Products, Categories};