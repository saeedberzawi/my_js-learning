/*
regular expression
عبارة عن اداة او طريقة تستخدم للتعامل مع النصوص و البحث
فيها سواء كان ذلك لعمل مقارنة عليها او استخراجها او استبدالها
*/

// regular يطلق عليها ايضا regex
//  استخدام ادوات البحث عن النصوص

/*
امثلة على استخدامات الريجكس
البحث عن كلمة في نص
التحقق من صحة صيغة الايميل
التحقق من ان عدد الارقام صحيح
احصاء عدد المرات التي اتت فيها الكلمة متبوعة بكلمة اخرى معينة
*/

// ريجكس ليست لغة برمجية
// هي اداة لوصف نص معين او عبارة التي نبحث عنها و نحدد النص المراد البحث عنه

// we chose the website to do that
// www.regexr.com

// flags
//  هي طريقة للوصول لما نريد البحث عنه

/*
    name             simple

    global            /re/g
case insensitive     /re/i
*/

// global flag
//  نستطيع تحديد كل ما نريد البحث عنه global flag باستخدام

// case insensitive flag
// البحث عن النصوص بغض النظر عن حالة الأحرف سواءً كُتبت بالأحرف الصغيرة أم الكبيرة

// literal characters
// طريقة المطابقة الحرفيّة في البحث

// metacharacters
// استخدام الرموز في البحث
// قد يكون للرمز الواحد اكثر من معنى
//  عددها ليس كبير

//  wildcard => .
// الرموز الخاصة

/*
يتطابق مع /.at/ الوصف
Cat
Bat
Rat
Hat
but not like this Heat
لان النقطة تحل مكان حرف واحد فقط
*/

// من اكثر الرموز التي يتم استخدامها و اكثر الناس يخطاؤن بيها لانها شاملة

// escaping metacharacters
//  استخدام الرمز المهرب \ ودوره في عملية البحث
/*
for example:
we need serch for . in the charaacters
6.00
6500
6j00
we type /\./ to get the .
//
*/

// الرمز slash /
//  هما اثنان الاول يعبر عن البداية و الثاني يعبر عن النهاية

//  characters

/*
الرمز       المعنى  
مسافة          //
Tab            \t
سطر جديد      \n
*/

// المسافة بين الحروف يعد حرف

// Characters Sets
// الاقواس المربعة []

// range
//  -
// تستخدم لتحديد النطاق

// Negative Character
//   الرمز ^ للنفي
//  بمعنى استثناء

// كتابة الرموز داخل Sets الاقواس المربعة
// اغلب الرموز لما تنكتب داخل الاقواس المربعة فانها تفقد خاصيتها و تتحول الى الى حرف
// هناك رموز لا تتاثر حتى داخل المجموعات
/*
الرمز    طريقة تحويله
  \-              -
  \^              ^
  \\              \
*/

// اختصارات الاقواس المربعة
/*
الرمز            المعنى         البديل

[0-9]           اي رقم             \d
[A-Za-z0-9]    اي حرف او رقم       \w
[\t\r\n]        فراغ واحد          \s
[^0-9]           ليس رقم           \D
[^A-Za-z0-9]    ليس حرف او رقم     \W
[^\t\r\n]         ليس فراغ         \S
*/

//  Repetition
// رموز التكرار + \ * \ ? \ {_} \ {_,_}
// تستخدم لتحديد عدد مرات تكرار وجود حرف محدد

// Grouping
// رمز التجميع ()
//  تستخدم لجعل ما بداخلها عبارة عن مجموعة او فئة مستقلة عن ما قبلها و ما بعدها

// Alteration
// الخيارات و البدائل (____ __|__|__)
//  (____ (__|__|__))
// إضافة خيارات متعددة ليتم البحث عن أحدها ومطابقتها

// conditional regular expressions
// الانماط التعبيرية الشرطية (?=)
// يستخدم لاشتراط قيمة معينة تكون موجودة

// الانماط التعبيرية الشرطية (?!)
// كتابة وصف يشترط عدم وجود قيمة محددة باستخدام الرموز الشرطية
//  (____(?!____))

/*
الدوال التي تتعامل مع Regular Expressions في JavaScript
Test
Replace
Match
Search
*/

// Test
// تستخدم للتحقق من وجود النص المحدد

let myString = " I love JavaScript";
let regex = /JavaScript/;
let containsRegex = regex.test(myString);
console.log(containsRegex);

let regex1 = /Kotlin/;
let containsRegex1 = regex1.test(myString);
console.log(containsRegex1);

// Replace
// تستخدم لاستبدال القمية الموصوفة بقيمة اخرى

let myStrink = "I love JavaScript";
let regek = /JavaScript/;
let newString = myStrink.replace(regek, "Kotlin");
console.log(newString);

// Search
// تستخدم لمعرفة موقع النص الموصوف
// index او رقم

let myLove = "I love JavaScript";
let newBoy = myLove.search(/JavaScript/);
console.log(newBoy);

// Match
// تقوم بارجاع القيم المطابقة للوصف في مصفوفة
// حفظ و تخزين القيم المطابقة للوصف في مصفوفة

const str = ` how are you how are you and how are you how are you how are you
how are you how are you how are you how are you how are you how are you
how are you and how are you how are you how are you and how are you how are you 
how are you and how are you how are you how are you how are you `;

let myRe = str.match(/and/g);
console.log(myRe);
console.log(myRe.length);
