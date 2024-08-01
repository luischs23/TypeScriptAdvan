type Sizes = 'S'|'L'|'M'|'XL';
type userId = string | number;
// type Product = {
//   id: string | number
//   title: string,
//   createAt: Date,
//   stock: number,
//   size?: Sizes
// };

interface Product {
  id: string | number
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
};

const products: Product[]=[];

products.push({
  id: '1',
  title: 'P1',
  createAt: new Date,
  stock: 19,
  size: 'S'
})

const addProduct = (data: Product)=>{
  products.push(data)
}

addProduct({id:2, title:'p2', createAt: new Date, stock:21, size: 'M'});

console.log(products);
