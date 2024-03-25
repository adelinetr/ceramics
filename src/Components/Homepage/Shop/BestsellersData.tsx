import Photo01 from './01.png'
import Photo02 from './02.png'
import Photo03 from './03.png'
import Photo04 from './04.png'
import Photo05 from './05.png'
import Photo06 from './06.png'
import Photo07 from './07.png'
import Photo08 from './08.png'
import Photo09 from './09.png'

export interface ImageData {
  image: string;
  name: string;
  price: string;
  description: string;
}

export const BestsellersData: ImageData[] = [
  {
    image: Photo01,
    name: "Artistic Vase",
    price: "18,99€",
    description: "Elegantly crafted vase for artistic flair.",
  },
  {
    image: Photo02,
    name: "Beige Vase",
    price: "22,99€",
    description: "Timeless beige vase for subtle elegance.",
  },
  {
    image: Photo03,
    name: "Minimalistic Plates",
    price: "12,99€",
    description: "Our minimalist plates offer a contemporary twist on classic dining essentials.",
  },
  {
    image: Photo04,
    name: "Minimalistic Plates",
    price: "16,99€",
    description: "Stylish and simple plates with a modern touch, perfect for any meal.",
  },
  {
    image: Photo05,
    name: "Brown Vase",
    price: "24,99€",
    description: "A classic brown vase, great for displaying flowers or as a standalone decor piece.",
  },
  {
    image: Photo06,
    name: "Artistic Vase with 2 cups",
    price: "32,99€",
    description: "A pretty pink vase with two matching cups, adding a touch of elegance to your space.",
  },
  {
    image: Photo07,
    name: "Artistic Vase",
    price: "32,99€",
    description: "Beautifully crafted vase with unique artistic details.",
  },
  {
    image: Photo08,
    name: "4 Coffee Cups",
    price: "20,99€",
    description: "Perfect for enjoying your favorite hot beverages with friends or family.",
  },
  {
    image: Photo09,
    name: "Artistic Vase",
    price: "32,99€",
    description: "Stunning artistic vase, featuring intricate designs and a charming silhouette",
  },
];
