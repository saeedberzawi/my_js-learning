console.log("%c'*** array ***'", "color:red;font-size:20px");
// ----------
// array المصفوفات

console.log('"array"');

let colors = ["red", "green", "blue"];
console.log(colors);
// يمكن الوصول لكل قيمة من قيم المصفوفة من خلال رقم يدعى index
console.log('%c"index"', "color:red;font-size:15px");
console.log(colors[2]);

// قمنا بتغير قيمة عنصر في المصفوفة
console.log('%c"change index"', "color:red;font-size:15px");

colors[1] = "white";
console.log(colors[1]);
console.log(colors);

//  length
console.log('%c"length"', "color:red;font-size:15px");
console.log(colors.length);

// includes
console.log('%c"includes"', "color:red;font-size:15px");
console.log(colors.includes("red"));

/*
نلاحظ في السطر الثاني استخدمنا includes 
وقمنا بحفظ النتيجة التي قام بإعادتها داخل المتغير result
بعدها قمنا بطباعة النتيجة وكانت المخرجات كما هو موضح أدناه
*/
let color = ["red", "green", "blue", "black"];
let result = color.includes("black");
console.log(result);

/*
لإضافة عنصر جديد إلى المصفوفة نقوم باستخدام push
والتي تقوم بإضافة القيمة الجديدة إلى آخر المصفوفة، ويتم استخدامها بالشكل التالي
*/

/*
لحذف عنصر من المصفوفة نقوم باستخدام ()pop 
والتي تقوم بحذف آخر عنصر من عنصاصر المصفوفة، ويتم استخدامها بالشكل التالي
*/
// يمكننا الاستفادة من ()pop أيضا بحفظ القيمة المحذوفة وتخزينها في متغير، وذلك بالطريقة التالية
// تُستخدم unshift مع مصفوفة ما بغرض إضافة عنصر جديد في بداية تلك المصفوفة
// نلاحظ أنه تم إضافة اللون black في بداية المصفوفة، دعنا الآن نقوم بإضافة اللون white أيضًا
// نلاحظ أنه تم إضافة القيمة white في بداية المصفوفة قبل القيمة black
//  نسطيع ايضا جعل الزيادة في سطر واحد عوضا عن سطرين
//تستخدم shift مع مصفوفة ما وذلك لحذف أول عنصر فيها وعمل return لقيمته
// افترض أنك تريد حذف العنصر red من المصفوفة colors كما هو موضح في المثال التالي

console.log('%c"add & remove"', "color:blue;font-size:15px");

// ** in first **
// add 'unshift' - remove 'shift'

// add
//  unshift

let coffe = ["red", "white", "orange"];

console.log('%c"** unshift **"', "color:blue;font-size:15px");

coffe.unshift("green");
coffe.unshift("black");
//  or typing add in one line
// coffe.unshift("pink","gold");
console.log(coffe);

// remove
// shift

console.log('%c"** shift **"', "color:blue;font-size:15px");

let cho = coffe.shift();
console.log(coffe);
console.log(cho);

// ** in end **
// add  'push' - remove 'pop'

// add
// push

console.log('%c"** push **"', "color:blue;font-size:15px");

coffe.push("yellow");
console.log(coffe);

// remove
// pop
console.log('%c"** pop **"', "color:blue;font-size:15px");

let tee = coffe.pop();
console.log(coffe);
console.log(tee);

// تستخدم isArray للتحقق من أن بيانات محددة هي من نوع array، وتكون قيمتها إما true أو false

console.log('%c"Array.isArray"', "color:blue;font-size:15px");

let cr = "black";
let colr = ["red", "green", "blue"];
console.log(Array.isArray(colr));
console.log(Array.isArray(cr));

// 2d array

console.log('%c"** 2d array **"', "color:blue;font-size:15px");

const values = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(values);
console.log(values[0][1]);
console.log(values[1][2]);

// 3d array

console.log('%c"** 3d array **"', "color:blue;font-size:15px");

let soso = [
  [1, 2, 3],
  [4, 5, 6],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
  [13, 14],
];

console.log(soso[0]);
console.log(soso[0][0]);

console.log(soso[1]);
console.log(soso[1][2]);

console.log(soso[2]);
console.log(soso[2][0][2]);

console.log(soso[3]);

console.log(soso[3], soso[1]);

function greet(name = "Re:Coded") {
  println("Hi " + name + "!");
  return true;
}
console.log(greet);
