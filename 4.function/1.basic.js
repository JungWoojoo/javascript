function add(num1, num2){
    console.log('function');
    return num1+num2;
}
const result = add(1,2);
console.log(result);

// 사용예제 2
let lastName = '김';
let firstName = '지수';
let fullName = `${lastName} ${firstName}`;
console.log(fullName);

let lastName2 = '박';
let firstName2 = '철수';
let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName2);

function fullname(firstname, lastname){
    return `${firstname} ${lastname}`
}
console.log(fullname('김','지수'));
console.log(fullname('박','철수'));
