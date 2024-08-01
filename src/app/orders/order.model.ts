import { Product } from "./../products/product.model";
import { user, ROLES } from "./../users/user.model";
import { BaseModel } from "./../base.model";

export interface Order extends BaseModel{
  products: Product[],
  user: user
}
