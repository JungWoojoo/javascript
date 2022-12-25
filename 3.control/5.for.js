// 반복문 Loop Statemnet
// for(변수선언문; 조건식; 증감식){}
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행
// 4.조건식이 거짓이 될때까지 2번과 3번을 반복 수행

for(let i = 0; i<5; i++){
    console.log(i);
}

for(let i = 0; i<5; i++){
   for(let j = 0; j<5; j++){
    console.log(i,j);
   }
}

// 무한루프 
    //  for(;;){

    //  } 

// 반복문 제어 : continue, break
for(let i=0; i<20; i++){
    if(i===10){
        continue; // 컨티뉴를 사용하면 컨티뉴 밑에 로직은 무시가 되고 다시 for문의 맨 처음이 시작된다. 따라서 10은 출력이 되지 않고 다음 11이 바로 나옴.
        console.log('i가 드디어 10이 되었다!');
        break; // 반복문이 특정 조건에 멈춤 : 10이되면 반복문 멈춤 
    }
    console.log(i);
}