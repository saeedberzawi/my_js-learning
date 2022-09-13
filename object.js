console.log("%c'*** object ***'", "color:red;font-size:20px");

//  البرمجة الكائنية | Object Oriented Programming

// let name = "camry"
// let color = "white"
// let currentSpeed = 0
/*
  function move(speed) { 
      currentSpeed = speed
      return `The ${name} is moving at speed of ${currentSpeed}km per hour`
  }
  function stop() {
      currentSpeed = 0
      return `The ${name} stopped`
  }
*/

//  *** 1 ***
//  creat object

// This keyword
// سنتعرف في هذا الدرس على الكلمة المفتاحية  وعلى الفائدة منها والحلول التي تضيفها لنا

const cairo = {
  // key: value
  name: "camry",
  color: "white",
  currentSpeed: 0,
  move: function (speed) {
    console.log(this);
  },
  stop: function () {
    console.log("stop method");
  },
};

// تم طباعة الصفة كار و السبب ان ذيس تشير الى الصفة كار
cairo.move(100);
cairo.stop();

let bop = cairo.move(100);
console.log(bop);

const car = {
  // key: value
  name: "camry",
  color: "white",
  currentSpeed: 0,
  // method  || functions
  move: function (speed) {
    // this => objectName.key = value
    // car.currentSpeed = speed
    // this نابت عن الصفة car
    this.currentSpeed = speed;
    return `The ${this.name} has color ${this.color} is moving at speed of ${this.currentSpeed}.km per hour`;
  },
  stop: function () {
    this.currentSpeed = 0;
    return `The ${this.name} stopped`;
  },
};

// this هو عبارة عن مفتاح يشير الى الاوبجيكت الذي ينتمي له
// يعني لما تكون في فانكشون داخل الاوبجيكت سوف تشير الى الاوبجيكت

//  استدعاء عناصر الاوبجكيت
//  objectName.key
console.log(car.name);
car.stop(); // لم يتم الاستدعاء
console.log(car.stop()); // تم الاستدعاء

console.log(car.move(100));
console.log(car.move());

//  *** 2 ***
//  creat class
// يفضل ان يكون اول حرف في اسم الكلاس حرف كبير

class Jamel {
  // constructor => is a method
  constructor(name, color, currentSpeed) {
    this.name = name;
    this.color = color;
    this.currentSpee = currentSpeed;
  }
}

//  new تسخدم لانشاء صفة التي يقال لها الاوبجيكت
// creat object from class jamel
const jamel1 = new Jamel("camry", "white", 0);
const jamel2 = new Jamel("corella", "black", 0);
console.log(jamel1);
console.log(jamel2);

// *** 3 ***
// add a method || functions to the class

class Jamela {
  constructor(name, color, currentSpeed) {
    this.name = name;
    this.color = color;
    this.currentSpeed = currentSpeed;
  }
  move(speed) {
    this.currentSpeed = speed;
    return `The ${this.name} is moving at speed of ${this.currentSpeed}km per`;
  }
  stop() {
    this.currentSpeed = 0;
    return `The ${this.name} stopped`;
  }
}

const jamela1 = new Jamela("camry", "white", 0);
const jamela2 = new Jamela("corella", "black", 0);
console.log(jamela1.move(50));
console.log(jamela2.move(70));

console.log(jamela2.stop());

//  *** 4 ***
//  creat static members

class Hadi {
  static numberOfCars = 0;
  constructor(name, color, currentSpeed) {
    this.name = name;
    this.color = color;
    this.currentSpeed = currentSpeed;
    // تتبع الكلاس و ليس الاوبجيكت
    Hadi.incrementNumberOfCars();
  }
  move(speed) {
    this.currentSpeed = speed;
    return `The ${this.name} is moving at speed of ${this.currentSpeed}km per`;
  }
  stop() {
    this.currentSpeed = 0;
    return `The ${this.name} stopped`;
  }
  static incrementNumberOfCars() {
    Hadi.numberOfCars++;
  }
}

const Hadi1 = new Hadi("camry", "white", 0);
const Hadi2 = new Hadi("corella", "black", 0);
const Hadi3 = new Hadi("merceds", "gold", 0);
console.log(Hadi3.move(50));
// static
console.log('"*** static ***"');
console.log(Hadi.numberOfCars);

// puplic and private

// *** puplic ***

class Huda {
  static numberOfCars = 0;
  constructor(name, color, currentSpeed) {
    this.name = name;
    this.color = color;
    this.currentSpeed = currentSpeed;
    Huda.incrementNumberOfCars();
  }
  move(speed) {
    this.currentSpeed = speed;
    return `The ${this.name} is moving at speed of ${this.currentSpeed}km per`;
  }
  stop() {
    this.currentSpeed = 0;
    return `The ${this.name} stopped`;
  }
  static incrementNumberOfCars() {
    Huda.numberOfCars++;
  }
}

const huda = new Huda("camry", "white", 0);
// method => move من دون استدعاء object نستطيع كتابة
// public نستطيع هذا لانه
huda.currentSpeed = 100;
// ------------
console.log(huda);
console.log(huda.move(99));

//  *** private ***

class Hudad {
  static numberOfCars = 0;
  // نجعله خاص باضافة #
  #currentSpeed; // #
  constructor(name, color, currentSpeed) {
    this.name = name;
    this.color = color;
    this.#currentSpeed = currentSpeed; // #
    Hudad.incrementNumberOfCars();
  }
  move(speed) {
    this.#currentSpeed = speed;
    return `The ${this.name} is moving at speed of ${this.#currentSpeed}km per`; // #
  }
  stop() {
    this.#currentSpeed = 0;
    return `The ${this.name} stopped`;
  }
  static incrementNumberOfCars() {
    Hudad.numberOfCars++;
  }
}

const hudad = new Hudad("camry", "white", 0);
console.log(hudad.move(100));
console.log(hudad);

//  مفهوم الوراثة | *** inheritance ***
// private members note: لا يرث

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.Speed = 0;
  }
  run(speed) {
    this.speed = speed;
    return `The ${this.name} runs with speed ${this.speed}`;
  }
}

// تتم الوراثة بخطوتين
// 1- we write => extends
// 2- we write after extends => The name of "Class"

// Class Animal => parent
// Class Cat/Fox => child/subClass

class Cat extends Animal {
  makeSound() {
    return "ooowoo...";
  }
}

class Fox extends Animal {
  makeSound() {
    return "bark...";
  }
}

const cat = new Cat("snowy", "white");
console.log(cat);

// *** overriding method ***

class Animaltrs {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.Speed = 0;
  }
  run(speed) {
    this.speed = speed;
    return `The ${this.name} runs with speed ${this.speed}`;
  }
  makeSound() {
    console.log("sound...");
  }
}

class Cater extends Animaltrs {
  // مفهوم الوراثة بمعنى اذا كنت تريد التعديل على شئ
  // كل ما عليك ان تقوم به هو ان تعيد كتابة الميثود في الابن

  makeSound() {
    console.log("ooowoo...");
  }
}

const cater = new Cater("snowy", "white");
cater.makeSound();
