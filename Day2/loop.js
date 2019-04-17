// looping for array

var nums = [1, 2, 3];
for (var item of nums) {
    console.log(item);
}

// looping for nested obj

var student = {
    name: 'quyen',
    age: 21
}

for (var key in student) {
    console.log(student[key]); // is value, not student['key'] or not student.key
}


