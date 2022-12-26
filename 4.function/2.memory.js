function add(a,b){
    console.log(a);
    console.log(b);
    return a+b;
}
const sum = add;
console.log(add(1,2));
console.log(sum(1,2)); // add 함수가 저장된 메모리 heap 주소가 sum변수에 담겨서 결국 그 주소에 있는 처리 똑같이 쓸 수 있다. 
