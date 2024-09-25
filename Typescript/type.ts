// | (union) : or
const b: string | number = "1";

// 배열이면서 name[문자],age[문자or숫자]
const c: { name: string; age: string | number }[] = [
  { name: "김효주", age: 26 },
  { name: "오연우", age: "24" },
];

// & (intersection [and])
// const b2 = string & number => never 타입
const b2: { name: string } & { age: number } = {
  age: 21,
  name: "효주",
};

const b3: any = { name: "뭐든지" };

const b4: (x: string) => string = (x) => `${x}맛 아이스크림`;

const b5: (x: number) => number = (x) => x ** 2;
