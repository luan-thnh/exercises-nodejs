let math: number = 8;
let physics: number = 7.8;
let chemistry: number = 8;

const studentRating = (a: number, b: number, c: number) => {
  let average: number = (a + b + c) / 3;
  let rank: string;

  if (average >= 8) {
    rank = 'A';
  } else if (average >= 7) {
    rank = 'B';
  } else if (average >= 6) {
    rank = 'C';
  } else if (average >= 5) {
    rank = 'D';
  } else {
    rank = 'F';
  }

  console.log(`Average: ${average}`);
  console.log(`Rank: ${rank}`);
};

studentRating(math, physics, chemistry);
