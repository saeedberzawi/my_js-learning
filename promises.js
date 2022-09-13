// Synchronous
// المتزامن

// Asynchronous
// غير متزامن

console.log("Start");
function userInfo(name) {
  setTimeout(() => {
    console.log("** User info recevied 01 **");
    return name;
  }, 3000);
}
let userName = userInfo("Saeed");
console.log(userName);
console.log("End");

console.log("--------------------");
// استخدم Callback في Promise
//  أحد الحلول المُتاحة لحل مشكلة اعتماد أمر برمجي على أمر آخر متأخر، من خلال استخدام Callback،
// كما سنتعرف على مفهوم Callback Hell

console.log("Start");
function userInf(name, callback) {
  setTimeout(() => {
    console.log("** User info recevied 02 **");
    callback(name);
  }, 3000);
}
let userN = userInf("Saeed", (name) => {
  console.log(`your name is ${name}`);
});
console.log(userN);
console.log("End");

console.log("--------------------");
// Promise
// resolve & reject

console.log("Start");
const newUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const userInfo = {
      name: "Saeed",
      age: 30,
    };
    resolve(userInfo);
  }, 3000);
});
newUser.then((res) => {
  console.log("** User info received 03 **");
  console.log(res);
});
console.log("End");

console.log("--------------------");
// Resolve
// ربط عدد من الدوال ببعضها البعض باستخدام الوعود

console.log("Start");
const newUou = new Promise((resolve, reject) => {
  setTimeout(() => {
    const userInfo = {
      name: "Saeed",
      age: 30,
    };
    resolve(userInfo);
  }, 3000);
});
const addNewUser = (userInfo) => {
  let userAge = userInfo.age;
  let adultAge;
  if (userAge >= 18) {
    adultAge = `${userInfo.name} is an Adult`;
  } else {
    adultAge = `${userInfo.name} is Not an Adult`;
  }
  return Promise.resolve(adultAge);
};
newUser.then(addNewUser).then((res) => {
  console.log("** User info received 04 **");
  console.log(res);
});
console.log("End");

console.log("--------------------");
// Catch
// reject التعامل مع
