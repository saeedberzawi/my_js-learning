console.log("%c'*** Digital Systems ***'","color:red;font-size:20px")
//  أنواع الأنظمة الرقمية  Types of digital systems
// النظام العشري 10
// النظام السادس عشر 16
// 8 النظام الثماني
// 2 النظام الثنائي

/*
|| Decimal:          0   1   2   3   4   5   6   7   8   9  
|+----------------------------------------------------------------------------------
/*
|| Hecadecimal:      0   1   2   3   4   5   6   7   8   9   A   B   C   D   E   F  
|+----------------------------------------------------------------------------------
/*
|| Octal:            0   1   2   3   4   5   6   7   
|+----------------------------------------------------------------------------------
/*
|| Binary:           0   1    
|+----------------------------------------------------------------------------------
*/

//  14 in the 4 way
// Decimal:
let age = 14;
// Hecadecimal:
let agee = 0xe;
// Octal:
let ageee = 0o16;
// Binary:
// 8 4 2 1
// 1 1 1 0
let ageeee = 0b1110;

//  تحويل من نظام الى نظام

const number = 12;  // that is Decimal
console.log(number.toString(2)); // to Binary
console.log(number.toString(8)); // to Octal
console.log(number.toString(16)); // to Hecadecimal
