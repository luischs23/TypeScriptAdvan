let anyVar: any;
anyVar = "Hola";
anyVar = 123;
anyVar = null;
anyVar = undefined;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;
anyVar.doSomething();

let unknownVar: unknown;
unknownVar = "Hola";
unknownVar = 123;
unknownVar = null;
unknownVar = undefined;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething();
if (typeof unknownVar === 'string'){
  unknownVar.toUpperCase();
}
if (typeof unknownVar === 'boolean'){
  let isNew2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
    return JSON.parse(str);
}

