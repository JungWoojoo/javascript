// 함수 선언문: function name(){}
// 함수 표현식: const name = fucntion(){}              * 표현식 : 문 중에서도 값으로 표현할 수 있는

let add = function (a,b){
    return a+b;
}

console.log(add(1,2));

// 화살표 함수 const name = () =>{}
add = (a,b) =>{
    return a+b;
}
console.log(add(1,2));

// 생성자 함수 const object - new Fucntion(); // 객체편에서 다룸,,,

// IIFE (Immediately-Invoked Function Expressions) : 즉각적으로 호출하는 함수 
(function run(){
    console.log("hi");
})();