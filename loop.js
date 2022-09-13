console.log("%c'*** loop ***'","color:red;font-size:20px")
// loop التكرار
// مقدار الزيادة / الشرط / القيمة المبدئية للعداد
// console.log

// for

// increment ++
console.log('"for ++"');

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// decrment  --
console.log('"for --"');

for (let i = 10; i >= 5; i--) {
  console.log(i);
}

// array
// length نستخدمها لتكرار عناصر المصفوفة لاننا لا نعلم العدد في حال كانت كبيرة
// الشرط i < 4 || تم استبداله ب gml.length
console.log('"for array"');

let gmail = ["ahmad", "samer", "belal"];
for (let e = 0; e < gmail.length; e++) {
  console.log(gmail[e]);
}

// for of
// اسهل من الطريقة السابقة

console.log('"for of"');

for (let mal of gmail) {
  console.log(mal);
}

//  while

//  القيمة المبدئية للعداد

// الشرط
// console.log
// مقدار الزيادة

console.log('"while"');

const ll = ["hamza", "raeed", "hamed", "taha", "mohamad"];

let m = 0;
while (m < ll.length) {
  console.log(ll[m]);
  m++;
}

// do while

// for if break
console.log('"for if break"');

let mom = [1, 2, 3, 0, 4, 5, 6];
for (let i = 0; i < mom.length; i++) {
  if (mom[i] == 0) {
    break;
  }
  console.log(mom[i]);
}

// for if continue
console.log('"for if continue"');

let moma = [1, 2, 3, 0, 4, 5, 6];
for (let i = 0; i < moma.length; i++) {
  if (moma[i] == 0) {
    continue;
  }
  console.log(moma[i]);
}

// for (let k = 0; k < moma.length; k++) {
//   if (moma[k] == 0) {
//     continue;
//   }
//   console.log(moma[k]);
// }
