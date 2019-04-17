// nguyen thuy
var num = 1;
var myString = 'quyen';
var isFemale = true;


// object
var student = {
    name: 'quyen',
    age: 31
};

var listStudents = ['quyen', 'son'];

// convert listStudents to String 
//         JSON.stringify(obj);   obj : array, obj,...

// convert string to obj
//          JSON.parse(string)

// way 1
// var tmp = listStudents.slice(0, listStudents.length);  // copy array

// way 2
// var tmp = JSON.stringify(listStudents);
// tmp = JSON.parse(tmp);

// way 3

// var obj1 = {
//     a: 1,
//     b: 2
// };

// var obj2 = {
//     a: 3,
//     c: 4
// }

// var obj3 = Object.assign(obj1, obj2)  ; // get obj2 assign obj1, obj3 and obj1 point 1 address
//                                         // when same key, it override value obj

// console.log(obj1);
// console.log(obj3);

//var tmp1 = [];
var tmp2 = [...listStudents]; //  == Object.assign(tmp1, listStudents)
listStudents[0] = 'khoa';

console.log(listStudents); // ['khoa', 'son']
console.log(tmp2);  //  ['quyen', 'son']

