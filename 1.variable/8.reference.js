// 원시타입은 값이 복사되어 전달 call by value
let a = 1;
let b = a; //1 
b = 2; 
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple={
    name:'apple',
};

let orange = apple;
orange.name = '오렌지'; // 참조하는 주소가  복사되기 때문에 어느 한 곳에서 수정하더라도 같이 값 변함

console.log(apple);
console.log(orange);