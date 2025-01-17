import { faker } from "@faker-js/faker";
import { Product } from "./product.model";
import { CreateProductDto, updateProductDto, findProductDto} from "./../products/product.dto"; // Objetos de transferencia automaticas

export const products: Product[]=[];

export const addProduct = (data: CreateProductDto): Product =>{
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: updateProductDto): Product =>{
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index]={
    ...prevData,
    ...changes,
  }
  return products[index];
}

export const findProduct = (dto:findProductDto): Product[] => {
  //code
  // dto.color = 'blue';
  // dto.isNew = true;
  // dto.tags = [];
  // dto.tags?.pop();
  // dto.tags?.push();
  return products;
}

const num = 0; const valB = num ?? "default";
