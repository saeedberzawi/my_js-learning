console.log("%c'*** String ***'", "color:red;font-size:20px");
/*
  String Methods
  - Access With Index  تبدا بالعد من 0
  - Access With charAt()  تبدا بالعد من 0 لكن لا تاخذ عدد المسافات تتجاهلها
  - length عدد العناصر
  - trim() تلغي المسافات
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// السيكونس يعني البيانات المتسلسلة
// هي سيكونس saeed
//  كل فرع منها index
//  انديكس تمثل الرقم الخاص بالموقع او البوسيشن داخل السيكونس
// index start from 0
// العد يبدا من 0

// length start from 1
// تبدا العد من 1 دائما تسبق انديكس ب رقم لانها تبدا من 1 على عكس انديكس تبدا من 0

let theName = "  saied  ";

console.log(theName);
console.log(theName[6]);
console.log(theName[5]);

console.log(theName.charAt(6));
console.log(theName.charAt(5));

console.log(theName.length);

console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log('"*** charAt ***"');
console.log(theName.trim().charAt(0).toUpperCase());
console.log(theName.trim().charAt(1).toUpperCase());
console.log(theName.trim().charAt(2).toUpperCase());
console.log(theName.trim().charAt(3).toUpperCase());
console.log('"*** index ***"');
console.log(theName[3].trim().toUpperCase());
console.log(theName[2].toUpperCase());

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6] اعداة
  - split(separator [Opt], Limit [Opt]) القص
*/

console.log("'*** String Method P:1***'");
let v = "saeed al berzawi";

console.log(v.indexOf("al"));
console.log(v.indexOf("al", 7));
console.log(v.indexOf("d")); // 5

console.log(v.slice(2, 4));
console.log(v.substring(2, 4));

console.log(v.slice(-5, -3));

console.log(v.repeat(5));

console.log(v.split("", 16));

/*
String Methhods
- substring(Starrt [Mand], End [Opt] Not Including End)
Mand => اجباري & Opt =>  اختياري
--- Start > End Will Swap
--- Start < 0 It Start from 0
--- Use Length To Get Last Characters
- substr(Start [Mand], Characters To Extract)
--- Start >= Length =""
--- Negative Start From End
- includes(Value [Mand], Start [Opt] Default 0) [ES6]
- startsWith(Value [Mand], wStart [Opt] Default 0) [ES6]
- endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

console.log("'*** String Method P:2***'");
let u = "Elzero Web School";

console.log(u.length);

console.log(u.substring(2, 8)); // الرقم الاخير لا يؤخذ بل يتم اخذ ما قبله
console.log(u.substring(2, 6));
console.log(u.substring(6, 2));
console.log(u.substring(-10, 6)); // 0 - 6  القيمة السالبة لم تؤخذ
console.log(u.substring(u.length - 5, u.length - 3));

console.log(u.substr(0, 6));
console.log(u.substr(17));
console.log(u.substr(-3));
console.log(u.substr(-5, 2));

console.log('"*** includes ***"');
console.log(u.includes("web"));
console.log(u.includes("Elzero Web School")); // it's need full name
console.log(u.includes("web", 8));

console.log('"*** startwith ***"');
console.log(u.startsWith("E"));
console.log(u.startsWith("E", 2));
console.log(u.startsWith("o", 5));
console.log(u.startsWith("z", 2));

console.log('"*** endwith ***"');
console.log(u.endsWith("o", 6));
console.log(u.endsWith("o"));
console.log(u.endsWith("r", 5)); // it's look he dosn't start from index 0 , it's start with 1
