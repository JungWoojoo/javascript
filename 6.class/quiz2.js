// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임직원은 시간당 8000원

class Employ{
    constructor(name, department, workTimeMonth){
        this.name = name;
        this.department = department;
        this.workTimeMonth = workTimeMonth;
    }
}

class Jung extends Employ{
    bonus = () =>{
        return this.workTimeMonth*10000
    }
}

class PartTime extends Employ{
    bonus = () =>{
        return this.workTimeMonth*8000
    }
}

const jwj = new PartTime('우주', 's/w', 30);
const jungwoojoo = new Jung('정우주', 's/w', 20);
console.log(jwj.bonus());
console.log(jungwoojoo.bonus());