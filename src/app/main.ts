import { faker } from "@faker-js/faker";

import { addProduct, products, updateProduct, findProduct} from "./products/product.servicio";

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({min: 10, max:100}),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(),10),
    categoryId: faker.string.uuid(),
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80
});

findProduct({
  stock: 10,
  color: 'red',
  createAt: new Date(),
  isNew: true
})
