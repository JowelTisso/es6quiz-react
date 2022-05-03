import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Arrow function",
    description: "() => {}",
  },
  {
    _id: uuid(),
    categoryName: "Destructuring",
    description: "{name, className}",
  },
  {
    _id: uuid(),
    categoryName: "Variables",
    description: "let/const/var",
  },
  {
    _id: uuid(),
    categoryName: "Rest parameters",
    description: "...rest",
  },
  {
    _id: uuid(),
    categoryName: "Template literals",
    description: "${name}",
  },
  {
    _id: uuid(),
    categoryName: "Temporal Dead Zone",
    description: "TDZ",
  },
];
