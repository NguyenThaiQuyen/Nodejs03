let isTrue = true;
let grade = 8;
switch (isTrue) {
    case (grade <= 4):
        console.log('Trung binh');
        break;
    case (grade <= 8):
        console.log('Kha');
        break;
    case (grade <= 10):
        console.log('Gioi');
        break;
    default: 
        console.log('Grade is invalid');
}

