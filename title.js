console.log("%c'*** title ***'","color:red;font-size:20px")
let saeed = "blue";
const agge = 1992;

console.log(saeed);
console.log(agge);

console.log(typeof saeed);
console.log(typeof agge);
// console.log(saeed);

console.log('"title +"');
let title = "mr.";
title += "omar"; // title = title + omar
console.log(title);
console.log(title[2]);
console.log(typeof title);
console.log(title.length);

/*
  string syntax + character escape sequences
  \ escape + line contnue
  \n
 */

console.log('saeed al "berzawi"');
console.log("saeed al 'berzawi'");
// نفس الدالة مع بعض من دون ما يضاف خطا كبير
// console.log("saeed al "berzawi"")
//  هكذا يكتب بنفس الدالة
console.log('saeed al "berzawi"');
console.log("saeed \\ al 'berzawi'");
console.log("saeed \
al \
berzawi");
console.log("saeed\nal\nberzawi");

// مسافات بين الحروف \t
console.log('"\\t"');
console.log("A\tB\tC\tD\tE");

/* 
console methods
- log
- error 
- table

web api
application programing interface
واجهة برمجية تقدم لك خدمات عن طريقها تسخدم ما تريد بلغة الجافا سكريبت

styling console
- directive %c
تكتب قبل العنصر مباشرة من دون فواصل لالحاقه بما تريد من خواص
*/

console.log("log");
// انشاء رسالة خطا
console.error("'-'");
// انشاء جدول
console.table(["saeed", "mhd", "al berzawi"]);
// تخصيص عنصر بلون
console.log(
  "%chello %cfrom %cjs %cfile",
  "color: black; font-size: 20px",
  "color: red;   font-size: 40px",
  "color: blue;  font-size: 40px",
  "color: green; font-size: 30px"
);

/*
  template literals (template strings)
*/

let s = "we love";
let q = "javascript";
let c = "and";
let d = "programming";

//  طرق قديمة
console.log(s + ' "" ' + q + "\n" + c + "''" + d);

// هذا السطر ناب عن الذي فوقه
// طرق جديدة es6
console.log(`${s} " " '' \\ ${q} ${c} ${d}`);

//  2

let tit = "Saeed";
let desc = "Saeed Al_Berzawi";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${tit}</h2>
      <p>${desc}</p>
    </div>    
  </div>
  `;

document.write(markup);

//  انواع البيانات

/*
date types intro
- string
- number
- array => object
boolean (true or false)
*/

// typeof تستخدم لاظهار النوع المكتوب من اي نوع من انواع البيانات

console.log("'**** Type of ****'");
console.log(typeof "saeed al berzawi");

console.log(typeof 5000);
console.log(typeof 5000.99);

console.log(typeof [10, 15, 17]);
console.log(typeof ["sa", "mhd", "al"]);
console.log(typeof { name: "saeed", age: 17, country: "ksa" });

console.log(typeof true);
console.log(typeof false);
// شئ غير موجود
console.log(typeof undefined);
//  قيمة فارغة
console.log(typeof null);
