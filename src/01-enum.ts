export enum ROLES{
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export type user = {
  username: string,
  role: ROLES
};

// La ventaja que tiene es que es una forma mas directa de asignacion de variables
const luisUser: user={
   username: 'Luishs28',
   role: ROLES.ADMIN,
};

const mover = ()=> {enum Direction {
    Up = 1,
    Down,
    Left,
    Right
};
  let move: Direction = Direction.Up;
  console.log(move); // Output: 1
  console.log(Direction.Down); // Output: 2
  console.log(Direction.Left); // Output: 3
  console.log(Direction.Right); // Output: 4
}
