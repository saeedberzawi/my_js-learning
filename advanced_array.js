console.log("%c'*** Advanced array ***'", "color:red;font-size:20px");

console.log('"--------------------------------"');
console.log('%c"1"', "color:red;font-size:15px");
console.log('%c"** forEach **"', "color:red;font-size:15px");
// المرور على كل عنصر على حدا للقيام بعملية محددة

const colors01 = ["red", "green", "blue"];
colors01.forEach(function (currentValue, index, array) {
  console.log(currentValue, index);
});

console.log('"--------------------------------"');
console.log('%c"2"', "color:red;font-size:15px");
console.log('%c"** some **"', "color:red;font-size:15px");
// التاكد من ان عنصر ما موجود او لا

const ages = [11, 13, 26, 15, 12];
const hasAdult = ages.some(function (element) {
  return element >= 18;
});
console.log(hasAdult); // true

console.log('"--------------------------------"');
console.log('%c"3"', "color:red;font-size:15px");
console.log('%c"** every **"', "color:red;font-size:15px");
//   التاكد من ان كل الاعمار توافق الشرط او لا

const ages02 = [21, 23, 27, 25, 22];
const hasAdult01 = ages02.every(function (element) {
  return element >= 18;
});
console.log(hasAdult01); //true

console.log('"--------------------------------"');
console.log('%c"4"', "color:red;font-size:15px");
console.log('%c"** includes **"', "color:red;font-size:15px");
// التاكد من ان المصفوفة تحتوي عنصر معين او لا

const colors02 = ["red", "green", "blue"];
const isContainRed = colors02.includes("red");
console.log(isContainRed); // true
const isContainRed02 = colors02.includes("red", 1);
console.log(isContainRed02); // false

console.log('"--------------------------------"');
console.log('%c"5"', "color:red;font-size:15px");
console.log('%c"** indexOf **"', "color:red;font-size:15px");
// البحث لايجاد عنصر معين من بداية المصفوفة الى نهايتها
//       index     -4     -3      -2       -1
//       index      0      1       2        3
const colors03 = ["red", "green", "blue", "green"];
const index = colors03.indexOf("green");
console.log(index);
const index02 = colors03.indexOf("black");
console.log(index02);
const index03 = colors03.indexOf("green", -2);
console.log(index03);

console.log('"--------------------------------"');
console.log('%c"6"', "color:red;font-size:15px");
console.log('%c"** lastIndexOf **"', "color:red;font-size:15px");
// البحث لايجاد عنصر معين من نهاية المصفوفة الى بدايتها
//       index     -4     -3      -2       -1
//       index      0      1       2        3
const colors04 = ["red", "green", "blue", "green"];
const lastindex = colors03.lastIndexOf("green");
console.log(lastindex);
const lastindex02 = colors03.lastIndexOf("black");
console.log(lastindex02);
const lastindex03 = colors03.lastIndexOf("green", -2);
console.log(lastindex03);

console.log('"--------------------------------"');
console.log('%c"7"', "color:red;font-size:15px");
console.log('%c"** findIndex **"', "color:red;font-size:15px");
//كيفية استخدام دالة  وطريقة إرجاعها لعنصر معين في مصفوفة

const ages01 = [12, 14, 19, 21];
const coco = ages01.findIndex(function (element) {
  return element >= 18;
});
console.log(coco);
const coco01 = ages01.findIndex(function (element) {
  return element >= 25;
});
console.log(coco01);

console.log('"--------------------------------"');
console.log('%c"8"', "color:red;font-size:15px");
console.log('%c"** find **"', "color:red;font-size:15px");
// كيفية استخدام دالة  وطريقة إرجاعها لقيمة أول عنصر مطابق للشرط

const numbers = [11, 7, 9, 15];
const el = numbers.find(function (element) {
  return element % 3 === 0;
});
console.log(el);
const el01 = numbers.find(function (element) {
  return element % 4 === 0;
});
console.log(el01);

console.log('"--------------------------------"');
console.log('%c"9"', "color:red;font-size:15px");
console.log('%c"** filter **"', "color:red;font-size:15px");
// سنتعرف في هذا الدرس على كيفية استخدام دالة  وطريقة إرجاعها لمصفوفة جديدة تطابق شرط معين.

const numbers01 = [2, 3, 7, 4, 9];
const il = numbers01.filter(function (currentValue, index, array) {
  return currentValue % 2 === 0;
});
console.log(il);

console.log('"--------------------------------"');
console.log('%c"10"', "color:red;font-size:15px");
console.log('%c"** concat **"', "color:red;font-size:15px");
// كيفية استخدام دالة  وطريقة دمجها لمصفوفتين

const primaryColors = ["red", "yellow", "blue"];
const secondaryColors = ["green", "orange", "violet"];

const coloree = primaryColors.concat(secondaryColors, "black", "white");
console.log(coloree);
// يتطلب تمرير اسم المصفوفة التي نريد داخل الاقواس
const coloree01 = primaryColors.concat();
console.log(coloree01);

console.log('"--------------------------------"');
console.log('%c"11"', "color:red;font-size:15px");
console.log('%c"** slice **"', "color:red;font-size:15px");
// استخدام دالة  وطريقة نسخها لجزء من مصفوفة معينه من بداية  محددة إلى نهايتها.

const choclate = ["green", "orange", "violet", "red", "white"];
const rgbcolor = choclate.slice(1, 4);
console.log(rgbcolor);
const rgbcolor01 = choclate.slice();
console.log(rgbcolor01);

console.log('"--------------------------------"');
console.log('%c"12"', "color:red;font-size:15px");
console.log('%c"** splice **"', "color:red;font-size:15px");
// اضافة حذف تبديل عنصر
//  I have a error when i used

const jihan = ["red", "green", "blue", "black", "white"];
jihan.splice(3);
console.log(jihan);
//  الرقم الثاني هو عدد العناصر التي نريد حذفها و سيكمل عرض الذي بعده
jihan.splice(2, 2);
console.log(jihan);
//  استبدال العناصر المحذوفة
jihan.splice(2, 2, "gray", "yellow");
console.log(jihan);
// اضافة عناصر من دون حذف
// الرقم الاول من اين نريد الاضافة
// الرقم الثاني لا نريد استبدال اي عناصر
jihan.splice(2, 0, "gray", "yellow");
console.log(jihan);

console.log('"--------------------------------"');
console.log('%c"13"', "color:red;font-size:15px");
console.log('%c"** join **"', "color:red;font-size:15px");
// إرجاعها لعناصر مصفوفة على شكل سترينغ أو نص مفصول بعلامة الفاصلة أو أي علامة يتم تحديدها

const choclata = ["red", "green", "blue"];
const sara = choclata.join();
console.log(sara);
const sara01 = choclata.join("-");
console.log(sara01);

console.log('"--------------------------------"');
console.log('%c"14"', "color:red;font-size:15px");
console.log('%c"** sort **"', "color:red;font-size:15px");
//ترتيبها لعناصر المصفوفة بشكل تصاعدي.

const fadi = ["red", "green", "blue", "black", "white"];
const fatima = [921, 735, 840];
fadi.sort();
console.log(fadi);
fatima.sort();
console.log(fatima);

console.log('"--------------------------------"');
console.log('%c"15"', "color:red;font-size:15px");
console.log('%c"** reverse **"', "color:red;font-size:15px");
//إرجاعها لعناصر مصفوفة بشكل عكسي

const easha = ["red", "green", "blue"];
easha.reverse();
console.log(easha);

console.log('"--------------------------------"');
console.log('%c"16"', "color:red;font-size:15px");
console.log('%c"** map **"', "color:red;font-size:15px");
//سنتعرف في هذا الدرس على كيفية استخدام دالة  وطريقة إنشائها لمصفوفة جديدة تحتوي على عناصر المصفوفة الأصلية والتي تم التعديل عليها

const papa = [3, 7, 9];
const mrpap = papa.map(function (currentValue, index, array) {
  return currentValue * currentValue;
});
console.log(mrpap);

console.log('"--------------------------------"');
console.log('%c"17"', "color:red;font-size:15px");
console.log('%c"** split **"', "color:red;font-size:15px");
// تقسيمها لعناصر مصفوفة

const raga = "red green blue black";
const arraga = raga.split(" ");
console.log(arraga);
const raga01 = "red ; green ; blue ; black";
const arraga01 = raga01.split(" ; ");
console.log(arraga01);
const arraga02 = raga01.split(" ; ", 3);
console.log(arraga02);
const arraga03 = raga01.split();
console.log(arraga03);

console.log('"--------------------------------"');
console.log('%c"18"', "color:red;font-size:15px");
console.log('%c"** reduce **"', "color:red;font-size:15px");
// ارجاع مجموع من العناصر

const roro = [2, 4, 1, 3, 5];
const total = roro.reduce(function (accumulator, currentValue, index, array) {
  console.log(`index:${index}`);
  console.log(`current value:${currentValue}`);
});
console.log(total);
const total01 = roro.reduce(function (accumulator, currentValue, index, array) {
  console.log(`accumulator:${accumulator}`);
  return accumulator + 1;
});
console.log(total01);
const total02 = roro.reduce(function (accumulator, currentValue, index, array) {
  return accumulator + currentValue;
});
console.log(total02);
const total03 = roro.reduce(function (accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 100);
console.log(total03);
console.log('"--------------------------------"');
