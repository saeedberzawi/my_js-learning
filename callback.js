console.log("%c'*** callback ***'", "color:red;font-size:20px");

//  first method
// تعريف الدالة مسبقا
console.log("%c'*** first method ***'", "color:red;font-size:15px");

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function mul(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function operation(firstNumber, secondNumber, opCallback) {
  // سبب اشارة الدولار حتى لا يكون كل ما كتب من نفس لون الجملة الافتتاحية
  return `[ this is ${opCallback(firstNumber, secondNumber)}]`;
}

// callback(firstNumber, secondNumber) -> string

console.log(sum(2, 4));
console.log(sub(2, 4));
console.log(operation(2, 4, sum));
console.log(operation(2, 4, mul));

//  seconde method to write
// تعريف الدالة اثناء ارسالها وليس مسبقا
// في هذه الطريقة لا تستخدم الدالة اكثر من مرة
// يعني لا نستطيع استدعائها في مكان ثاني3

//  اذا كنا نستخدم الدالة مرة وحدة نكتبها وقت الاستدعاء
// اما اذا اكثر من مرة نستخدم الطريقة السابقة لمقدرة استدعائها المتكرر

console.log("%c'*** seconde method ***'", "color:red;font-size:15px");

console.log(
  operation(5, 4, function (firstNumber, secondeNumber) {
    return firstNumber + secondeNumber;
  })
  );
  
  console.log("%c'*** exercise ***'", "color:red;font-size:15px");
function opesDb(f, f, opesDb) {
  return `this is test = ${opesDb(f, f)}`;
}
console.log(
  opesDb(3, 4, function (f, f) {
    return f * f;
  })
);

// arrow function inside
//  استدعاء الدالة مرة واحدة فقط
console.log("%c'*** arrow inside ***'", "color:red;font-size:15px");

function uber(firstNumber, secondNumber, opCallback) {
  return `result = [${opCallback(firstNumber, secondNumber)}]`;
}

console.log(
  uber(5, 2, (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
  })
);

// arrow outside
//  نستطيع استدعاء الدالة اكثر من مرة
console.log("%c'*** arrow outside ***'", "color:red;font-size:15px");

function dada(firstNumber, secondNumber, opCall) {
  return `result = [${opCall(firstNumber, secondNumber)}]`;
}

const terror = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(dada(4, 5, terror));

// function mul(firstNumber, secondNumber) {
  //   return firstNumber * secondNumber;
  // }
  
  //  callback for string
  
  // function operation(firstNumber, secondNumber, opCallback) {
    //   return `[${opCallback(firstNumber, secondNumber)}]`;
    // }
    console.log("%c'*** callback style ***'", "color:red;font-size:15px");

function format(message, formatCallback) {
  return formatCallback(message);
}
function htmlFormat(message) {
  return `<div>${message}<div>`;
}
function jsonFormat(message) {
  return `{"message": "${message}"}`;
}

console.log(format("Welcome to JaveScript", htmlFormat));
console.log(format("Welcome to JaveScript", jsonFormat));
