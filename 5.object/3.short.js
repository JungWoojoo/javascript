const x = 0;
const y = 0;
const coordinate = {x, y}; // {x: x, y: y} 키와 밸류가 다음과 같이 같을 경우엔 {x, y}로 축약할 수 있다.
console.log(coordinate);

function makeObj(name, age){
    return {
        // name: name,
        // age: age,
        // 위와 같은 형태를 아래처럼 표기 가능
        name,
        age, 
    };
}