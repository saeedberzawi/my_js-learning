console.log("%c'*** Function ***'","color:red;font-size:20px")
// function الدوال
console.log('"1"');
console.log('"--------------------------------"');
console.log('"function"');

// 1 - تعريف الدالة
function rightNowk() {
  for (let i = 0; i <= 4; i++) {
    console.log(i);
  }
}
// 2 - استدعاء الدالة
rightNowk();
//  نستطيع استدعاء الدالة اكثر من مرة
// console.log(rightNowk());

// parameter
console.log('"2"');
console.log('"--------------------------------"');
console.log('"parameter"');

function rightNow(a) {
  for (let b = 20; b <= a; b++) {
    console.log(b);
  }
}
console.log('"parameter - 1"');
rightNow(22);
console.log('"parameter - 2"');
rightNow(23);
console.log('"parameter - 3"');
rightNow(24);

// تمرير اكثر من مدخل للدالة
console.log('"3"');
console.log('"--------------------------------"');
console.log('"(_,_)"');

function add(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

console.log(add(2, 7));
console.log(add(838, 383));

let qousa = add(2, 7);
console.log(qousa);

// return
console.log('"4"');
console.log('"--------------------------------"');
console.log('"return"');

function add(firstNumber, secondNumber) {
  // when we use return we don't need write result
  let result = firstNumber + secondNumber;
  return result;
}

let value = add(12, 7);
console.log(value);
console.log(add(12, 15));

// إمكانية استدعاء الدالة بأكثر من موضع
console.log('"5"');
console.log('"--------------------------------"');
console.log('"(_,_),(_,_)"');

let valu = add(2, 7) - add(3, 1);
console.log(valu);

//  تمرير مخرجات دالة إلى دالة أخرى
console.log('"6"');
console.log('"--------------------------------"');
console.log('"from 1 functions to 2 functions"');

function printNumber(ooo) {
  for (let h = 10; h <= ooo; h++) {
    console.log(h);
  }
}
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// let vv = add(7, 8);
// printNumber(vv);
// العملية التالية هي اختصار لما سبق من سطرين

printNumber(add(7, 8));
