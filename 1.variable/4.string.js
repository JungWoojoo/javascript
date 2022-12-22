//문자열 타입
let string = '안녕하세요';
string = `안녕`;
console.log(string);

//이스케이프 표현
string = '안녕\n 내이름은 \t\t 우주야 \\ 하이 \\\u09AC';
console.log(string);

// 템플릿 리터럴 - `` 꺽새 사용
let id='우주';
let greetings = "'안녕!, "+id+"\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕, ${id}
즐거운 하루 보내요!'`;
console.log(greetings);

