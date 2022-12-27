// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스

// 클래스
class Fruit{ //함수 정의시 대문자 사용하면 생성자 함수 생성
   
    // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji){
        this.name = name; 
        this.emoji = emoji;
    }
   
    display = () =>{ // 클래스 안에서는 function 키워드 제외해야 함
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this;
}

// apple과 orange는 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);

// 이 경우는 그냥 객체 obj이다.   <-->  인스턴스는 클래스를 통해 만들어진 객체
const obj = {name:'ellie'}