let currentAge: number = 20;
let maxAge: number = 100;
let amountPerDay: number = 3;

let totalSnacks: number = (maxAge - currentAge) * amountPerDay * 365;
console.log(
  `You will need ${totalSnacks} to last you until the ripe old age of ${maxAge}.`
);
