// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
function add(a = 1 ,b = 1){ // 매개변수 undefined시 매개변수 기본값 설정(Default Parameters): a = 1, b = 1로 원하는 값을 파라미터에서 정해줄 수도 있다. 
    // console.log(a);         // 저렇게 설정하여도 어디선가 받는 값이 있다면 그 값으로 함수가 적용됨
    // console.log(b);
    // console.log(arguments);
    return a+b;
}
// console.clear();
console.log(add());
console.log(add(1,2));

// Rest 매개변수 Rest Parameters
function sum(a,b, ...numbers){ // ...: 원하는 인자의 수를 몰라서 배열로 받고싶을 때
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1,2,3,4,5);