export const createProductV2 = (data: {
  id: string | number;
  stock?: number; // Aqui no se puede definir un valor por defecto
  isNew?: boolean;
}) => {
  const { id, stock = 0, isNew = true } = data;
  // Desestrcturamos data y aqui mismo asignamos los valores por defecto.
  // Existen muchas formas de asignar parametros por defecto en un parametro de tipo objeto.
  return {
    id,
    stock,
    isNew,
  };
};

console.log(createProductV2({ id: 1, isNew: false }));
// De esta forma podemos asignar los parametros a gusto, sin ir en un orden.
