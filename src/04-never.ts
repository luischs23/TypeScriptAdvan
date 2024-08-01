const withoutEnd = ()=>{
  while(true){
    console.log('Nunca papar de aprender')
  }
} ;

const fail = (message: string): never=>{
  throw new Error(message);
};

const example = (input: unknown)=>{
  if(typeof input === 'string'){
    return 'es un string';
  }else if(Array.isArray(input)){
    return 'es un array';
  }
  return fail('not match');
};

console.log(example('Hola'));
console.log(example([1,1,1]));
console.log(example(123));    // Aqui se detiene el programa
console.log(example('Hola despues del fail'));
