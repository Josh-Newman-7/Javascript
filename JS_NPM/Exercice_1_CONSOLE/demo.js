console.log;
console.warn;
console.debug;
console.error;
console.table;

const friend = { firstname: "coco", mail: "coco@mail.fr" };
const { firstname, mail } = friend;

console.log(`${firstname} a ${mail}`);
console.log("Détails de l'objet: %o", friend);

const users = [
  { name: "Alice", age: 56 },
  { name: "Bob", age: 34 },
  { name: "Carol", age: 99 },
];
console.table(users);

console.time("test");
for (let i = 0; i < 1_000_000; i++);
console.timeEnd("test");