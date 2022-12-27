// const apple={
//     name:'apple',
//     display: function(){
//         console.log(`${this.name}: 사과`); // 객체 안에서 자신의 데이터 접근 시 this 사용
//     },
// }

// const orange={
//     name:'orange',
//     display: function(){
//         console.log(`${this.name}: 오렌지`); // 객체 안에서 자신의 데이터 접근 시 this 사용
//     },
// }

// 생성자 함수 (4챕터 함수 참고)
function Fruit(name, emoji){ //함수 정의시 대문자 사용하면 생성자 함수 생성
    this.name = name; 
    this.emoji = emoji;
    this.display = () =>{
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this;
}

const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);