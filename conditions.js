console.log("%c'*** conditions ***'","color:red;font-size:20px")
// if Conditions الجمل الشرطية

console.log('%c"** if & else **"',"color:brown;font-size:15px");


let age = 11;
if (age < 12) {
  console.log("Sorry, you are not old enough to play this game.");
} else {
  console.log("Welcome to the game");
}

//
console.log('%c"** else if **"',"color:brown;font-size:15px");

let numbe = 3;
if (numbe > 3) {
  console.log("+");
} else if (numbe < 3) {
  console.log("-");
} else {
  console.log("zero");
}

//  -------------------
console.log('%c"** if,else if,else **"',"color:brown;font-size:15px");

let souad = ["taha", "mohamad", "majida"];
let numberor = 6;

if (numberor == 1) {
  console.log(souad[0]);
} else if (numberor == 2) {
  console.log(souad[1]);
} else if (numberor == 3) {
  console.log(souad[2]);
} else {
  console.log(`hello there ${souad}`);
}

// switch

console.log('%c"** switch **"',"color:brown;font-size:15px");

let sad = ["taha", "mohamad", "majida"];
let numr = 6;

switch (numr) {
  case 1:
    console.log(sad[0]);
    break;
  case 2:
    console.log(sad[1]);
    break;
  case 3:
    console.log(sad[2]);
    break;
  case 4:
  case 5:
    console.log(sad[2]);
    break;
  default:
    console.log(`no one here ${numr} *-*` );
    break;
}
