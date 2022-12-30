const Num1 = 123;
const Num2 = new Number(123);
console.log(typeof Num1);
console.log(typeof Num2);

console.log(Number.MAX_VALUE); // e+308 => 10의 308승
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if(Num1 === Number.NaN){

}
if(Number.isNaN(Num1)){
    console.log('숫자 아닌데');
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02 곱하기 10의 2승 ,, 10의 2승이 100이니까 

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));


// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 지수표기법으로 변환 됨.

console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
if(Number.EPSILON > 0 || Number.EPSILON < 1){
    console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2; 
console.log(num);
