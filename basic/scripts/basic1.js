// basic1.js
// var 변수명; //변수생성
// var 변수명 = 대입값; //변수생성과 대입
// 변수명 = 대입값; //변수대입(이미 생성된 변수)

// 변수 연습
var a;//undefined: 값이 정의되지 않음 (이후 a에 정의해주지 않으면 오류)
var b =10;
a = 20; //값이 정의됨
var c1; // undefined 값이 정의되지 않음 (오류)

c1 = 30; //30정의됨
c1 = 40; //기존값 30제거 .>40 새로 정의
c1 = b; //b가 가진 10을 c1에 대입해라 = 10
console.log(c1); 
//데이터타입 구분함수 typeof()
//콘솔에 로그를 출력하는 객체와 함수 console.log()
// 콘솔 로그에 변수 a의 데이터 타입을 출력해라
console.log(typeof(a));
// 출력 형식: a의 데이터타입은 number이다.
console.log('a의 데이터 타입은', typeof(a),'다.');
// Q. a와 b를 더한 결과는 30이고 데이터타입은 number다.
console.log('a와 b를 더한 결과는',(a+b),'이고 데이터타입은',typeof(a+b),'다.');
// Q. a와 v를 더한 결과는 25이고 데이터타입은 number다. 
console.log('a와 b를 더한 결과는',(a+b),'이고 데이터타입은',typeof(a+b),'다.');
b=5;
console.log('a와 b를 더한 결과는',(a+b),'이고 데이터타입은',typeof(a+b),'다.');
// Q. a와 v를 더한 결과는 201이고 데이터타입은 string다. 
b = '1'; //20+'1'
console.log('a와 b를 더한 결과는',(a+b),'이고 데이터타입은',typeof(a+b),'다.');
console.log('====================');

// 사용자 정보 변수
// 김가을/10/130/인천
var user_name = '김가을';
var user_age = 10;
var user_height = 130;
var user_area = '인천';
const plus = 1;
console.log(user_name, user_age, user_height, user_area);
//Q. 김가을은 내년에 11살입니다.
/* console.log(`${user_name}은 내년에 ${user_age+1}살입니다.`) */
console.log(`${user_name}은 내년에 ${user_age+plus}살입니다.`);
console.log(user_name, '은 내년에', user_age+1, '살입니다.');
//Q.현재는 인천에 살지만
//Q.다음 달 서울로 이사갑니다.
console.log('현재는 ', user_area, '에 살지만');
user_area = '서울';
console.log(`다음 달 ${user_area}로 이사갑니다.`);

//장바구니 변수
var cart = ''; //장바구니 초기상태
cart = '사과';
cart = cart+'바나나'; //기존 사과 유지, 바나나 추가
cart = null; //cart = ''; 장바구니 비우기(삭제버튼 클릭 시)
console.log(cart);

console.log('-------------------')
//ES6 새로운 변수 let, const
var webStudy = 'html';
var webStudy = webStudy + 'css';
console.log(webStudy);

let webStudy2 = 'sass';
webStudy2 = webStudy2 + 'javascript';
console.log(webStudy2);

const webStudy3 = 'figma'; //생성&대입 동시처리 
console.log(webStudy3);

// 자바 스크립트 기초 함수
// 1. log(); 기록 실행 함수
// 2. typeof(); 데이터타입 실행 함수
// 3. print(); 인쇄 실행 함수
// 4. prompt(); 질문답변 실행 함수  
// 5. confirm(); 확인취소창 실행 함수

// print();
//prompt('1+1은?')
//confirm('html은 동적언어다.');

//const que1 = Number(prompt('1+1은?'));
//console.log(que1);
//console.log(typeof(que1)); //string
//comfirm(que1);

//const kurly_order_num = Number(prompt('주문수량은?'));
//const kurly_price = 10000;
//const kurly_total = kurly_order_num * kurly_price;
//console.log(typeof(kurly_order_num));
//console.log(`주문수량은 ${kurly_order_num}, 총 주문가는${kurly_total}원입니다.`);


//구구단
const dan99 = Number(prompt('구구단 몇단이 궁금해요?'));

console.log(`${dan99}X1=${dan99*1}`);
console.log(`${dan99}X2=${dan99*2}`);
console.log(`${dan99}X3=${dan99*3}`);
console.log(`${dan99}X4=${dan99*4}`);
console.log(`${dan99}X5=${dan99*5}`);
console.log(`${dan99}X6=${dan99*6}`);
console.log(`${dan99}X7=${dan99*7}`);
console.log(`${dan99}X8=${dan99*8}`);
console.log(`${dan99}X9=${dan99*9}`);


const dan9 = Number(prompt('구구단 몇단이 궁금해요?'));
