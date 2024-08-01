import { BaseModel } from "./../base.model";

export enum ROLES{
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export interface user extends BaseModel{
  username: string,
  role: ROLES
};
