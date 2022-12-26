// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음

function print(max){
    for(let i = 0; i<=max; i++){
        console.log(i);
    };
}

function multiply(max){
    for(let i = 0; i<=max; i++){
        console.log(i*2);
    };
}

function iterate(max, action){
    const result = action(max);
    return result;
}

console.log(iterate(5,print));
console.log(iterate(5,multiply));


setTimeout(()=>{
    console.log('3초 뒤 이 함수가 실행될겁니다.');
}, 3000);