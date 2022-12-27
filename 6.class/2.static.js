// static 정적 프로퍼티, 메소드

// 클래스
class Fruit{ //함수 정의시 대문자 사용하면 생성자 함수 생성
   
    static maxFruit = 4;

    constructor(name, emoji){
        this.name = name; 
        this.emoji = emoji;
    }
    
    // 클래스 레벨의 메소드
    static makeRandomFruit(){
        // 클래스 레벨의 메소드에서는 this를 참조할 수 없음 -> 클래스 처럼 템플릿일 뿐
        return new Fruit('banana', '바나나');
    }

    // 인스턴스 레벨의 메소드
    display = () =>{ // 클래스 안에서는 function 키워드 제외해야 함
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this;
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.maxFruit);

// apple과 orange는 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);

// 이 경우는 그냥 객체 obj이다.   <-->  인스턴스는 클래스를 통해 만들어진 객체
const obj = {name:'ellie'}