const apple={
    name:'apple',
    display: function(){
        console.log(`${this.name}: 사과`); // 객체 안에서 자신의 데이터 접근 시 this 사용
    },
}

apple.display();