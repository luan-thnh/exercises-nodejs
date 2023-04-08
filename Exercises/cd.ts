interface ICD {
  id: number;
  title: string;
  singer: string;
  quantity_music: number;
  price: number;
}

const addCD = (CDs: ICD[], cd: ICD): string => {
  if (CDs.some((item) => item.id === cd.id)) throw Error('Error: Id is same!');

  CDs.push(cd);

  return 'Successes';
};

const lengthCDs = (CDs: ICD[]): number => {
  return CDs.length;
};

const sumPriceCDs = (CDs: ICD[]): number => {
  return CDs.reduce((sum, curr) => sum + curr.price, 0);
};

const sortAscendingByPriceCDs = (CDs: ICD[]) => {
  return CDs.sort((a, b) => b.price - a.price);
};

const sortDecreaseByTitleCDs = (CDs: ICD[]) => {
  return CDs.sort((a, b) => a.title.localeCompare(b.title));
};

const CDs: ICD[] = [];
const CD1: ICD = {
  id: 1,
  title: 'Title 1',
  singer: 'Singer 1',
  quantity_music: 10,
  price: 100000,
};
const CD2: ICD = {
  id: 2,
  title: 'Title 2',
  singer: 'Singer 2',
  quantity_music: 12,
  price: 120000,
};

addCD(CDs, CD1);
addCD(CDs, CD2);
console.log(CDs);
console.log(lengthCDs(CDs));
console.log(sumPriceCDs(CDs));
console.log(sortAscendingByPriceCDs(CDs));
console.log(sortDecreaseByTitleCDs(CDs));
