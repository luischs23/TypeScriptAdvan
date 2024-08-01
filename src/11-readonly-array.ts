const numbers: ReadonlyArray<number> = [1,2,3,4,5];

// Estos metodos modificarian el array original pero con el Utility no se puede modificar
// numbers.push(3);
// numbers.pop();
// numbers.unshift(4);

// Estos metodos no mutan o modifican el array original, creando copias.

numbers.filter(()=>{});
numbers.reduce(()=>0);
numbers.map(()=>0);

