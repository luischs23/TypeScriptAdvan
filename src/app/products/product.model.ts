import { Category } from "./../categories/categorie.model";
import { BaseModel } from "./../base.model";

export type Sizes = 'S'|'L'|'M'|'XL';
export interface Product extends BaseModel {
  title: string,
  image: string,
  description: string,
  stock: number,
  size?: Sizes,
  color: string,
  price: number,
  category: Category,
  isNew: Boolean,
  tags: string[],
};
