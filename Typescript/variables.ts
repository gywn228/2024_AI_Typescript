const a = "아메리카노";
const a1 = "라떼";

// 타입 어노테이션
const a2: string = "1";
const a3: boolean = !!"";
const a4: number[] = [1, 2, 3, 4, 5];
const a5: { name: string; isIce: boolean; price: number }[] = [
  { name: "아아", isIce: true, price: 2000 },
  { name: "민트", isIce: true, price: 2500 },
];

// age, isMan, nation []
const a6: { age: number; isMan: boolean; nation: string }[] = [
  { age: 20, isMan: true, nation: "한국" },
  { age: 30, isMan: false, nation: "일본" },
  { age: 40, isMan: true, nation: "중국" },
];
