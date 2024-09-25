type angryDepth = 1 | 2 | 3 | 4 | 5;
const d1: angryDepth = 5;

type jobType = "전사" | "마법사" | "궁수" | "도적";
const d2: { id: string; level: number; job: jobType } = {
  id: "지존법사령이",
  level: 155,
  job: "도적",
};

type Hamburger = "불고기버거" | "새우버거" | "치즈버거" | "빅맥" | "상하이버거";
type side = "감자튀김" | "치즈스틱" | "콘슬로우" | "해쉬브라운";
type Dirinks =
  | "제로콜라"
  | "콜라"
  | "환타"
  | "물"
  | "스프라이트"
  | "제로스프라이트";
type setMenu = {
  main: Hamburger;
  side: side;
  dirinks: Dirinks;
};
const myMacdonald: setMenu = {
  main: "빅맥",
  side: "치즈스틱",
  dirinks: "제로콜라",
};

// type subway = 빵,메인,치즈,야채,소스1,소스2
type bread = "화이트" | "하티" | "허니오트" | "플랫";
type main = "에그" | "스테이크" | "머쉬룸" | "새우";
type cheese = "모짜렐라치즈" | "아메리칸치즈" | "슈레드치즈";
type vegetable = "양상추" | "토마토" | "오이" | "피망" | "양파";
type sauce = "핫칠리" | "스위트어니언" | "허니머스타드" | "바베큐" | "마요네즈";

type subway = {
  bread: bread;
  main: main;
  cheese: cheese;
  vegetable: vegetable[];
  sauce: sauce[];
};

const shrimp: subway = {
  bread: "플랫",
  cheese: "모짜렐라치즈",
  main: "새우",
  vegetable: ["양상추", "양파"],
  sauce: ["마요네즈"],
};
