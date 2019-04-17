// name function : verbNoun
let student = {
    name: 'quyen',
    age: 21,
    address : ['Danang', 'Hanoi']
}

function validateObject (student) {
    if (typeof student.name !== 'string') {
        console.log('Name is invalid');
    }
    if (isNaN(parseInt(student.age))) {
        console.log('Age is invalid');
    }
    if (!Array.isArray(student.address)) {
        console.log('Address is invalid');
    }
}

validateObject(student);