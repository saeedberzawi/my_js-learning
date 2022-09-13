console.log("%c'*** Advanced function ***'", "color:red;font-size:20px");

//  1
// call method

// تطبيق دالة معينة على كائن معين
//  تطبق على الدوال فقط
// يتم استدعاء الدالة وقت استخدام الكول ميثود فقط
// use functions for object

let user1 = {
  firstName: "Fatimah",
  lastName: " Khaalid",
};

let user2 = {
  firstName: "Asmaa",
  lastName: " Mohammed",
};

let printFullName = function (age) {
  console.log(
    "Hello, " + this.firstName + " " + this.lastName + ". your age is:" + age
  );
};

printFullName();
// I use the call method & The name of object
printFullName.call(user1, "25");
printFullName.call(user2, "20");

//  2
//  apply method
// تختلف عن ما قبلها ان ال 2 تاخذ مصفوفة
// call => تاخذ العناصر بشكل عادي
// apply => تاخذ العناصر بشكل مصفوفة

printFullName.apply(user2, [40]);

//  3
//  bind method
// تتشابه مع الكول ميثود من ناحية قيم ذيس
//  تتميز و تختلف عنها بانها تقوم بعمل ريتورن لدالة جديدة تحتوي على قيم ذيس

let newfunction = printFullName.bind(user2, "30");
// يتطلب استدعاء الدالة من دون استدعاء لن يظهر اي نتيجة
// في السطر الاول bind بعد كتابة
// newfunction() <= نستدعي الدالة عن طريق
newfunction();

// من المميزات ايضا نستطيع تمرير معطيات في الدالة الجديدة
let newfunction1 = printFullName.bind(user2);
newfunction1("35");
// newfunction1(35);

//  4

//  arrow function
//  طريقة مختصرة لكتابة الدالة التقليدية
//  ES6 تم تقديمها في الاصدار

// تختلف اشكال كتابتها باختلاف
// الدالة parameters عدد
// expressions التعبيرات البرمجية
// statements الجمل البرمجية

/*
(parameter1, parameter2) => {
    return exprission
}
*/

// (parameter1, parameter2) => {return exprission}

// (parameter1, parameter2) => exprission

// (parameter1, parameter2) => {statements}

let add1 = (num1, num2) => {
  return num1 + num2;
};

let add2 = (num1, num2) => {
  return num1 + num2;
};

let add3 = (num1, num2) => num1 + num2;

let usully = (num1, num2) => {
  let usully = num1 + num2;
};

// (parameter1, parameter2, parameterN) => {...}
// single parameter => {...}
// () => {...}

let odd = (num1, num2, num3) => num1 + num2 + num3;

let oddo1 = (num1) => {
  let oddo1 = num1;
};

let printed = () => {
  console.log("THis arrow function han no parameter");
};

// 5
//  IIFEs
// Immediately Invoked Function Expression
//  يقوم هذا النمط باستدعاء الدالة مباشرة بمجرد انشائها

(function (n) {
  console.log(n);
})("Reem");

// 6
// function in object

let obj = {
  title: "how to write a function in an object",
  //  simple way
  function1: function () {
    return console.log("first functioin");
  },
  //   arrow way
  function2: () => {
    return console.log("second functioin");
  },
  //   direct way
  function3() {
    return console.log("third functioin");
  },
};

obj.function1();
obj.function2();
obj.function3();

//  7
// تمرير Arguments أقل أو أكثر من المطلوب
