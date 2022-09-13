console.log("%c'*** Number ***'", "color:red;font-size:20px");
// date

// 10 / 17 / 2020 - month / day / year
console.log('%c"*** date ***"', "color:blue; font-size:15px");

const de = new Date(2020, 9, 17);
console.log(de);
console.log(de.getDate());
console.log(de.getDay());
console.log(de.getMonth());
console.log(de.getFullYear());

//    1
console.log('"1"');
console.log('"--------------------------------"');
/*
Math Object
- round() تقريب العدد 
- ceil() سقف
- floor() ارضية
- min() القيمة الادنى
- max() القيمة الاعلى
- pow() ** الاس
- sqrt()  الجذر التربيعي
- random() عشوائي
- sign() التحقق من الاشارة
- trunc() [ES6]  الغاء الكسور
*/
console.log('"math object"');

// we can type the simple in two ways
// way 1
// let n = math.round(1.2)
// console.log(n)

console.log('%c"** round **"', "color:blue; font-size:15px");
console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log('%c"** ceil **"', "color:blue; font-size:15px");
console.log(Math.ceil(99.2));

console.log('%c"** floor **"', "color:blue; font-size:15px");
console.log(Math.floor(99.9));
console.log(Math.floor(-99.9));

console.log('%c"** min **"', "color:blue; font-size:15px");
console.log(Math.min(10, 20, 100, -100, 90));

// in this way look at 3 ... inside() like this (...number)
let number = [30, 48, 59, 69];
// let u = Math.min(number); // wrong method to type
let uoho = Math.min(...number); // right method (...number)
console.log(uoho);

console.log('%c"** max **"', "color:blue; font-size:15px");
console.log(Math.max(10, 20, 100, -100, 90));

console.log('%c"** pow **"', "color:blue; font-size:15px");
console.log(Math.pow(2, 4));

console.log('%c"** sqrt **"', "color:blue; font-size:15px");

let amber = 16;
let l = Math.sqrt(amber);
console.log(l);
console.log(Math.sqrt(16));

console.log('%c"** random **"', "color:blue; font-size:15px");
console.log(Math.random());

console.log('%c"** sign **"', "color:blue; font-size:15px");
console.log(Math.sign(3));
console.log(Math.sign(-3));
console.log(Math.sign("a"));

console.log('%c"** trunc **"', "color:blue; font-size:15px");
console.log(Math.trunc(99.5));

//  infinty
console.log('%c"** infinty **"', "color:blue; font-size:15px");
console.log(3 / 0);
console.log(-3 / 0);

//    2
console.log('"2"');
console.log('"--------------------------------"');
/*
  Number Method
  - two dots to call a method
  - tostring()
  - tofixed()
  - parseint()     (Number)&(+)  الفرق بينها و => she تعيد الارقام من الخليط المكتوب على عكس الخاصيتين تعطي (لا=>نان)
  تعيد الرقم الصحيح بمعنى ان كان فواصل لا تعيد ما بعد الفواصل
  لكنها ليست ذكية ان سبق الرقم اسم تعطي (نان)
  - parsefloat()
  تعيد الرقم الصحيح و ما بعده من فواصل بمعنى ان كان فواصل تعيد الفواصل
  - isinteger() [ES6]  => if بمعنى  [isInteger mean عدد صحيح]
  يعني عدد صحيح
  - isnan() [ES6]  => if بمعنى
*/
console.log('%c"Number convert"', "color:blue; font-size:15px");

console.log('%c"** to string **"', "color:blue; font-size:15px");
console.log((100).toString());
console.log((100.1).toString());

console.log('%c"** to fixed **"', "color:blue; font-size:15px");
console.log((100.554555).toFixed());
console.log((100.4354555).toFixed());

console.log('%c"** number / + **"', "color:blue; font-size:15px");
// Number N تكتب كابيتال اول حرف
console.log(Number("100 saeed"));
console.log(+"100 saeed");

//  parseInt [
console.log('%c"** parseInt **"', "color:blue; font-size:15px");
console.log(parseInt("saeed 100 saeed"));
console.log(parseInt("100 saeed"));
console.log(parseInt("100.500 saeed"));

console.log('%c"** another way \\ paresInt **"', "color:blue; font-size:15px");

const tark = "9090";
const moj = parseInt(tark);
console.log(moj + 4);
//  parseInt ]

console.log('%c"** Parasefloat **"', "color:blue; font-size:15px");
console.log(parseFloat("100.500 saeed"));

console.log('%c"** isInteger **"', "color:blue; font-size:15px");
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log('%c"** isNaN **"', "color:blue; font-size:15px");
console.log(Number.isNaN("saeed"));
console.log(Number.isNaN(1));
// isNaN => is not a number

console.log('%c"** isNaN **"', "color:blue; font-size:15px");
console.log(Number.isNaN("saeed" / 20));

// التحقق من أن نوع القيمة غير رقمية

function tiger(mwe) {
  if (isNaN(mwe)) return "Invalid 'typing' input";
  return mwe * mwe;
}

console.log('%c"** function, number **"', "color:blue; font-size:15px");
console.log(tiger(3));
console.log('%c"** function, not a number **"', "color:blue; font-size:15px");
console.log(tiger("a"));
console.log(tiger("saeed" / 20));

//    3
console.log('"3"');
console.log('"--------------------------------"');
/*
  arithmtic operators
  + addition
  - subtraction
  * multiplication
  / division
  ** exponentiation (es7)
  % modulus (division remainder)
  ++ increment [ post / pre ]
  -- decrement [ post / pre ]
*/
console.log('%c"arithmtic operators"', "color:blue; font-size:15px");

console.log('%c"** addition **"', "color:blue; font-size:15px");
console.log(10 + 20);
console.log(10 + "saeed");

console.log('%c"** subtraction **"', "color:blue; font-size:15px");
console.log(10 - 20);
console.log(10 - "saeed"); // nan
console.log(typeof NaN); // number

console.log('%c"** multiplication **"', "color:blue; font-size:15px");
console.log(10 * 20);
console.log(10 * -20);

console.log('%c"** division **"', "color:blue; font-size:15px");
console.log(20 / 5);
console.log(20 / 3);

console.log('%c"** exponentiation **"', "color:blue; font-size:15px");
console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log('%c"** modulus **"', "color:blue; font-size:15px");
console.log(10 % 2);
console.log(11 % 2); // remove 1

console.log('""');

//    4
console.log('"4"');
console.log('"--------------------------------"');
console.log('%c"** read in easy way **"', "color:blue; font-size:15px");
/*
  number
  - double precision دقة مزدوجة
  - syntactic sugar "_" التجميل اللغوى
  - e
  - **
  - with decimal مع النظام العشري
  - number + bigint
  - number min value
  - number max value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 268902356);

//    5
console.log('"5"');
console.log('"--------------------------------"');
console.log('%c" + // - "', "color:blue; font-size:15px");
/*
  - + unary plus [return number if its not number] 
  - - unary negation [return number if its not number + negates it]
  tests
  - normal number
  - string number
  - string negative number
  - string text
  - float
  - hexadecimal numeral system => 0xff
  - null 
  - false
  - true

  Number
  
*/

console.log("%c'** + **'", "color:blue; font-size:15px");
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"saeed");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log("%c'** - **'", "color:blue; font-size:15px");
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"saeed");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

// Number N تكتب كابيتال اول حرف
console.log(Number("100"));

//    6
console.log('"6"');
console.log('"--------------------------------"');
console.log('%c"** coercion **"', "color:blue; font-size:15px");
/* 
  type coercion (type casting)
  - +
  - "" - 2
  - false - true
*/

let w = "10";
let e = 20;
let r = true;

// هذا الدمج خاطى شيل الملاحظة لتشوف
// console.log(a + b + c);

console.log(+w + e + r);

//    7
console.log('"7"');
console.log('"--------------------------------"');
console.log('%c"** assignment operators **"', "color:blue; font-size:15px");
/* 
  assignment operators عوامل التخصيص
*/

let o = 10;

o = o + 20; // 30

o = o + 70; // 100

o += 100; // o = o + 100 => 200

o -= 50; // o = o - 50 => 150

o /= 50; // o = o / 50 => 3

console.log(o);
