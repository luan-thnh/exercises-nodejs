const r: number = 5.5;

const calcPerimeterCircle = (radius: number) => {
  return 2 * Math.PI * radius;
};

const calcAreaCircle = (radius: number) => {
  return radius ** 2 * Math.PI;
};

console.log(calcPerimeterCircle(r));
console.log(calcAreaCircle(r));
