
function add(a,b){
    return a+b;
}
const result = add(1,2);
console.log(result);

// return을 명시적으로 하지 않으면 자동으로 undefined가 반환 됨.
function print(text){
    console.log(text);
}
const outcome = print('text');
console.log(outcome);

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건에 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function p(n){
    if(n<1){
        return; // return undefined와 같다
    }
    console.log(n);
}

console.log(p(0));
console.log(p(1));