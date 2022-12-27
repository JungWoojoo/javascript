// class Tiger {
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다!');
//     }
// }

// class Dog {
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다!');
//     }
//     play(){
//         console.log('놀자!');
//     }
// }

// 동물이라는 공통 클래스
class Animal{
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다!');
    }
}

class Tiger extends Animal{

}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();


class Dog extends Animal{
    constructor(color, ownerName){
        super(color);
        this.ownerName = ownerName;
    }

    play(){
        console.log('놀자!');
    }

    //오버라이딩
    eat(){
        console.log('강아지가 먹는다!');
    }
}

const dog = new Dog('빨강이', '우주');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
