export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const pv1 = createProduct(0,12,false);
console.log(pv1);
const pv2 = createProduct(3);
console.log(pv2);


export const createProduct2 = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => (
  {id, stock, isNew})

const p1 = createProduct2(11, false, 15)
console.log(p1)
const p2 = createProduct2(13)
console.log(p2)
const p3 = createProduct2(1, false, 0)
console.log(p3)


export const createProductV2 = (data: {
  id: string | number;
  stock?: number; // Aqui no se puede definir un valor por defecto
  isNew?: boolean;
}) => {
  // Desestrcturamos data y aqui mismo asignamos los valores por defecto.
  const { id, stock = 0, isNew = true } = data;
  return {
    id,
    stock,
    isNew,
  };
};

const p11 = createProductV2({ id: 4, isNew: true})
console.log(p11);
// De esta forma podemos asignar los parametros a gusto, sin ir en un orden.
