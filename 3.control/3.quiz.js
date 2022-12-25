// 퀴즈

let num = 2;
// num의 숫자가 짝수면 굿, 홀수면 우~ 출력
num =3;
// 1. if
if(num%2==0){
    console.log('굿');
}else{
    console.log('우~');
}

// 2. ternary
let result = num%2==0 ? '굿':'우~';
console.log(result);