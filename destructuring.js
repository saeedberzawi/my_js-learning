//  destructuring
//  هي عبارة عن استخراج او استخصلاص البيانات من المصفوفة او الصفة

let mohammad = [25, 30, 40];
// 1
console.log(mohammad[0]);
// 2
let iesa = mohammad[0];
console.log(iesa);
// 3
let [jamel] = mohammad;
console.log(jamel);
// 3  more than one
let [ga, go, ge] = mohammad;
console.log(ga, go, ge);

// تفكيك المصفوفة غير المعرفة

let colors = ["red", "green"];
let [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

// اضافة قيمة افتراضية

let colors01 = ["red", "green"];
let [firstColor01, secondColor01, thirdColor01 = "blue"] = colors01;
console.log(firstColor01, secondColor01, thirdColor01);

// في حال كانت القيمة الافتراضية القيمة الثانية لن تؤثر عليها

let colors012 = ["red", "green", "black"];
let [firstColor012, secondColor012, thirdColor012 = "blue"] = colors012;
console.log(firstColor012, secondColor012, thirdColor012);

// تجاهل القيم

let colors02 = ["red", "green", "black"];
let [firstColor02, secondColor02] = colors02;
console.log(firstColor02, secondColor02);

let colors021 = ["red", "green", "black"];
//  ,
let [, firstColor021, secondColor021] = colors021;
console.log(firstColor021, secondColor021);

let colors022 = ["red", "green", "black"];
//  ,,
let [, , firstColor022] = colors022;
console.log(firstColor022);

// nested arrays

let coco = [1, 2, [3, 4]];

let [first, second, third] = coco;
//  1
console.log(first, second, third);
//  2
console.log(first, second, third[0]);
//  3
let [first0, second0, [firstvalue, secondvalue]] = coco;
console.log(first0, second0, firstvalue, secondvalue);

// تبديل القيم

let vast = 5,
  ceond = 7;
[vast, ceond] = [1, 2];
console.log(vast, ceond);
//
let vast0 = 5,
  ceond0 = 7;
[vast0, ceond0] = [ceond0, vast0];
console.log(vast0, ceond0);
//
let vast1 = 5,
  ceond1 = 7;
[vast1, ceond1] = [vast1, vast1];
console.log(vast1, ceond1);

// L Value & R Value مفهوم

let cal = ["red", "green"];
[cal[0], cal[1]] = ["blue", "black", "white"];
console.log(cal);

// object

let student = {
  name: "Ali",
  age: 25,
};

let { name: yourName, age: yourAge } = student;
console.log(yourName, yourAge);

// object استخراج القيم من

let student01 = {
  name1: "Ali",
  age1: 25,
  gender: true,
};

let { name1, age1, gender } = student01;
console.log(name1, age1, gender);

// المشاكل المحتملة

let student02 = {
  name02: "Ali",
  age02: 25,
};

let name02 = "saleh",
  age02 = 22;
({ name02, age02 } = student02);
console.log(name02, age02);

// nested objects

let pepole = {
  nam: {
    f2nam: "A",
    f2nam: "Nasser",
  },
  agef2: 22,
};

let {
  nam: { f2nam: yourf2nam },
} = pepole;
console.log(yourf2nam);

//  object على string key استخدام
// تسمح لنا باستخدام الرموز و المسافات

let pepo = {
  nam: {
    f1nam: "A",
    f1nam: "Nasser",
  },
  "@my age": 40,
};

console.log(pepo["@my age"]);

// rest declaration
//  ...

let cici = [1, 2, 3, 4, 5];
let [first4, second4, ...others] = cici;
console.log(first4, second4, others);

console.log(first4, second4, others[0]);

// spread operator

let one = [1, 2, 3];
let two = [4, 5];
let three = [one, two];

console.log(three);

//  ...

let one1 = [1, 2, 3];
let two1 = [4, 5];
let three1 = [...one1, two1];

console.log(three1);

//  ... , ...

let one2 = [1, 2, 3];
let two2 = [4, 5];
let three2 = [...one2, ...two2];

console.log(three2);

//  الفرق بين Spread Operator و Rest Declaration
// تجميع قيم او تفكيك قيم

// Rest Declaration
function sum(first, second, ...others) {
  console.log(others);
  return first + second;
}

console.log(sum(1, 2, 6, 80, 75));

// Spread Operator

function ss(first, second, ...others) {
  console.log(...others);
  return first + second;
}

console.log(ss(1, 2, 6, 80, 75));

// rest declaration

let nunh = [1, 2, 3, 4, 5];
let [onh, twh, ...oth] = nunh;
console.log(oth);

// spread operator

let nun = [1, 2, 3, 4, 5];
let [on, tw, ...ot] = nun;
console.log(...ot);

//  عمل RestDeclaration لمصفوفة لا تحتوي على قيم

let nuo = [1, 2];
let [ont, twt, ...ott] = nuo;
console.log(ont, twt, ott);

//  عمل Rest Declaration لعناصر Object

let sara = {
  name21: "Salem",
  age: 18,
  gender: false,
};

let { name21, ...outa } = sara;
console.log(name21, outa);

//   Object يحتوي على قيم افتراضية

let noura = {
  name31: "Salem",
  age: 18,
};

let { name31, nickname = "unknown 525" } = noura;
console.log(name31, nickname);
