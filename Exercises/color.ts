const color: string[] = [
  'Blue ',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow ',
];
const o: string[] = ['th', 'st', 'nd', 'rd'];

const followingColors = (arr1: string[], arr2: string[]) => {
  arr1.forEach((value, index) => {
    let ordinal: string;

    index < 3 ? (ordinal = arr2[index + 1]) : (ordinal = arr2[0]);

    console.log(`${index + 1}${ordinal} choice is ${value}.`);
  });
};

followingColors(color, o);
