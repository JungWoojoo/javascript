// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다. 

const number = 123; // number 원시타입
console.log(number.toString()); // . 찍는순간 number 원시타입을 감싸고 있는 Number 객체로 감싸짐

const text = 'text';
console.log(text);
text.length;
text;