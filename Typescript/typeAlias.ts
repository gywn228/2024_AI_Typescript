type person = { name: string; age: number; gender: string };
type college = { id: Number; grade: number; major: string };
type collegeStudent = person & college;

const c1: person = {
  name: "김효주",
  age: 26,
  gender: "여",
};

const c2: person[] = [];

const c3: collegeStudent = {
  age: 21,
  id: 12345,
  gender: "여성",
  grade: 1,
  major: "철학과",
  name: "주효",
};

type product = { name: string; price: number };

type meal = {
  calories: number;
  category: string;
};
type dessert = {
  calories: number;
  sweetnessLevel: number;
};

const saltBread: product & meal = {
  name: "소금빵",
  calories: 150,
  category: "빵",
  price: 1500,
};

const eggTart: product & dessert = {
  name: "에그타르트",
  calories: 200,
  sweetnessLevel: 3,
  price: 2500,
};
