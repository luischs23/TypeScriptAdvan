// Array normal
const prices: (string|number)[] = [1,2,3,4];
prices.push(1);
prices.push("1");

// Array tupla
let user: readonly[string, number, boolean];
// user = ["Hello",4]
user = ["LuisH28", 17, true];

// Destrcuturación: ignora los otros elementos
const [username,age] = user;
console.log(username);
console.log(age);
// user.push();
console.log(user);
