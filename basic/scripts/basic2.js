//1일차 복습 (가계부앱 변수생성과 출력)
//커피 1500원
//도시락 6000원
//대중교통 3000원
//결과) 오늘 총 지출액은 000원입니다.
let coffee = 1500;
let lunchBox = 6000;
let pTransport = 3000;
let total = coffee + lunchBox + pTransport; //최종 출력은 단순하게
console.log(`커피 ${coffee}원`);
console.log(`도시락 ${lunchBox}원`);
console.log(`대중교통 ${pTransport}원`);
console.log(`오늘 총 지출액은 ${total.toLocaleString('ko-kr')}원입니다.`);
console.log(`오늘 총 지출액은 ${(coffee + lunchBox + pTransport).toLocaleString('ko-kr')}원입니다.`);
//숫자에 3자리 간격 콤마(,)표시
// 10000숫자 10,000문자 (최종 결과 처리)
// 위 기능 함수 : 객체.함수(); 변환객체.toLocaleString();

// 문자데이터 연습
// 리뷰 작성 기준 50자 이상 
// 콘솔 출력- 현재 작성 리뷰 글자 수는 000 입니다.
// let review = prompt('리뷰를 작성하세요.'); //prompt는 원래 window.prompt인데 window가 기본이라 안붙임(body #wrap 중 body 안쓰는 것과 같음) 
// console.log(review);
// 객체.함수();
// 객체.속성;
// 글자 수 체크 속성 lenght
// let review_length = review.length;
// console.log(review, typeof(review)); //ㅋㅋ string 
// console.log(`현재 작성 글자 수는 ${review_length}자 입니다.`);

// 오브젝트형 데이터 - 객체
// 변수생성키워드 변수명 = {키:값, 키:값, 키:값...}
let rectagle = {
    width:300,
    height:200,
    x:0,
    y:-100,
};
console.log(rectagle.height + 'px'); //200px
console.log(rectagle.height, 'px'); //200px
console.log(`${rectagle.height}px`); //200px
//Q.300px, 200px
console.log(`${rectagle.width}px, ${rectagle.height}px`)
console.log(rectagle.width + 'px, ' + rectagle.height + 'px')
console.log(rectagle.width, 'px,', rectagle.height, 'px')
//-------------------------------
// 회원 정보 저장
let user_info = {name:'가을', age:3, gender:'female', area:'서울'}
// 쇼핑몰 상품 저장
let product = {name:'마스크', price:1000, quantity:999,color:'white'}
// 영화관 좌성 지정 저장  
let movie_theater = {name:'VIP', position:'F1',price:14500}

// 상품명 : 마스크(white)
// 상품가 : 1000원
// 수량 : 999개

console.log(`상품명 : ${product.name}(${product.color})`);
console.log('상품가 :', product.price,'원');
console.log('수량 : '+ product.quantity+'개');

//오브젝트 데이터 타입 2. 배열 
// 변수생성키워드 변수명 = [배열값, 값2, 값3D]
// 변수생성키워드 변수명 = new Array(값,값2,값3)
// 변수생성키워드 변수명 = new Array(자리값)
const yoil = ['월','화','수','목','금','토','일']
console.log(yoil);
console.log(`오늘은 ${yoil[2]}요일`);

const en = new Array('a','b','c','d','e','f',);
console.log(en);


const year = new Array(4);
console.log(year);
year[0] = 2025
year[1] = 2024
year[2] = 2023
year[3] = 2022
console.log(year);

//Q1. 좋아하는 색상 6개를 배열로 정하고 그 중 가장 좋아하는 색상 2개를 콘솔에 출력하기
let favoriteColor = ['빨강','검정','흰색','하늘색','마젠타','청록색'];
console.log(favoriteColor[0], favoriteColor[2]);
//Q2. 좋아하는 과일 5개 배열로 저장하고 역순으로 모두 출력하기
let favoritefruit = ['사과','딸기','멜론','복숭아','자몽'];
console.log(favoritefruit[4]+favoritefruit[3] + favoritefruit[2] + favoritefruit[1] + favoritefruit[0]);


// Q3. 요일-날씨정보 출력
// 월 - 맑음
// 화 - 비
// 수 - 흐림
// 목 - 맑음
// 금 - 맑음
// 토 - 비
// 일 - 흐림
let week_day = new Array('월','화','수','목','금','토','일');
let week_weather = ['맑음', '비', '흐림'];
console.log(`${week_day[0]} - ${week_weather[0]}`);
console.log(`${week_day[1]} - ${week_weather[1]}`);
console.log(`${week_day[2]} - ${week_weather[2]}`);
console.log(`${week_day[3]} - ${week_weather[0]}`);
console.log(`${week_day[4]} - ${week_weather[0]}`);
console.log(`${week_day[5]} - ${week_weather[1]}`);
console.log(`${week_day[6]} - ${week_weather[2]}`);

const megabox = new Array(8) //빈좌석준비
megabox[0] = 'A1'
megabox[1] = 'A2'
console.log(`현재 예매 좌석 : ${megabox[0]}, ${megabox[1]}`);
megabox[0] = '';
megabox[1] = null
console.log(`현재 예매 좌석 : ${megabox[0]} ${megabox[1]}`);

//cgv 좌석 예매와 취소 
const cgv = [] // 빈 배열 준비
console.log(cgv.length)
//좌석 A1 선택
cgv.push('A1')
console.log(cgv);
cgv.push('A2')
console.log(cgv);
cgv.pop()
console.log(cgv);
cgv.push('A2','F1','F2','F6')
cgv.shift(cgv);
console.log(cgv);
console.log(cgv.length >=8)
// 선택 좌석이 8개일때 좌석 추가 금지
const price = 11000
// 출력결과 예시
// 선택 좌석 수: 00
// 총 결제 금액 : 0000원
let cgv_length = cgv.length;
let cgv_price = (cgv_length * price);
console.log(`선택 좌석 수 : ${cgv.length}`);
console.log(`총 결제 금액 : ${cgv_price}원`);
    
// 연산자 연습
// 1. 산술연산자
let num1 = 5;
let num2 = 2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2); 


// Q. 이항 연산자 활용 두 수를 사용자에게 입력받고 입력받은 값 활용 더하기만 되는 계산기 만들기
/* const firstNum = Number(prompt('첫번째 수'));
const lastNum = Number(prompt('첫번째 수'));
console.log(firstNum, lastNum);
const totalNum = firstNum + lastNum
console.log(`${firstNum} + ${lastNum} = ${totalNum}`) */
//오류 찾기, 데이터 타입 확인 typeof() -> string string

//증감연산자
let x = 5;
let y = 0;
console.log(x,y); //5 0
y = x++;
console.log(x,y); //6 5
x = ++y; // 6 6 
console.log(x,y); 
x++;
console.log(x,y); //7 6


let a = 10
let b = 20
let c = 30
let d = 40
console.log(`1번 a=${a}, b=${b}, c=${c}, d=${d}`);
//1. a=10, b=20, c=30, d=40

a++
b--
c++
d--
//2. a=11, b=19, c=31, d=39
console.log(`2번 a=${a}, b=${b}, c=${c}, d=${d}`);

a = ++b
b = a++
//3. a=20, b=20, c=31, d=39
console.log(`3번 a=${a}, b=${b}, c=${c}, d=${d}`);

c = a+b
d = ++c
//4. a=21, b=20, c=42, d=42
console.log(`4번 a=${a}, b=${b}, c=${c}, d=${d}`);

a = ++c + 10
b = --d + 1
//a=53, b=42, c=43, d=41
console.log(`5번 a=${a}, b=${b}, c=${c}, d=${d}`);

// 연산자3.복합대입연산자
let number = 10;
// number = number + 5;
number += 5;
console.log(number); //15
number -= 5;
console.log(number); //10
number  *=5;
console.log(number); // 50
number /= 5;
console.log(number); //10
number %= 5;
console.log(number); //

console.log('--------함수');
//함수
//1. 내장함수
//prompt('함수는?')
//alert('함수는');
//print();
//2. 사용자정의함수
//function 함수명(인자){반복구문}
//Q1. html, css, js 반복출력
//함수밖 (전역스코프) 
let lang1 = ''
let lang2 = ''
let lang3 = '' //빈문자열초기화
function study_lang(){  /* 함수 대기상태 */
    lang1 = 'html'
    lang2 = 'css'
    lang3 = 'javascript'
    console.log(`배운 언어 : ${lang1+lang2+lang3}`)
}
study_lang(); // 함수호출
/* 함수는 생성과 호출을 별개로 취급한다. */
console.log(lang1, lang2, lang3);
lang2 = lang2 + '3';
console.log(lang2);

console.log('지역변수와 전역변수')
let xx = 1;
let yy = ''
function func1(){
    let yy = 5;
    console.log(xx+yy)
}

function func2(){
    let zz = 10;
    console.log(xx+yy+zz)
}
func1()
func2()