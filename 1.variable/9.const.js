// let 재할당 가능 
let a = 1;
a=2;
console.log(a);

// const 재할당 불가능한 상수 변수
const b = 3;
// b = 'hi';
console.log(b);

// 객체타입의 참조 주소값은 변경 못하지만 해당 주소의 value값은 변경 가능
const orange = {
    name: 'apple',
};

const apple = orange;
console.log(orange);
console.log(apple);

apple.name = 'watermelon';
console.log(orange);
console.log(apple);