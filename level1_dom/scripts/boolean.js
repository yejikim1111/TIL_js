/* // boolean.js
//거짓으로 평가되는 값
//false, null, undefined, NaN, 0, ""
// 위 제외 모든 값 참으로 평가됨 [], {} 포함
let a = ""
a = []
console.log(Boolean(a))
// 비교 연산자
// == 일치연산, ==데이터타입까지 일치
let b = 10;
let c = "10";
let result = b == c;
console.log(result) // 값만 비교 -> true
result = b === c;
console.log(result) // 값 _ 데이터 타입 비교
result = b != c;
console.log(result); 
c = 2;
result = b < c;
console.log(result);
result = b >= c;
console.log(result);
//논리연산자 %%, ||, !
console.log("A" && null)
console.log('' || {}) // or은 둘 중에 하나만 이어도 ok
console.log(!"A")
let d;
// -------------------------
console.log('조건문')
//if(조건식) {조건식이 참일때 실행문}
let x = []
let y = 0
if(x){ console.log('x는 참이다');}
if(y){ console.log('y는 참이다');}
x = 7;
y = 2;
if(x>y && x==y){alert('참일때 실행되는 문구')}
if (!x){console.log('참일때 실행되는 문구3')}
if (y || !!x){console.log('참일떄 실행되는 문구4')}
if (!y && x){console.log('참일떄 실행되는 문구4')} */

//에버랜드 놀이기구 탑승조건 확인
//나이 입력 후 버튼 클릭 시 10살 이하면 '탑승불가'메세지 출력
const ageInput= document.querySelector('.everland #age')
const ageBtn = document.querySelector('.everland #age_btn')
const ageResult = document.querySelector('.everland .result')
console.log(ageBtn, ageInput, ageResult);

//console.log(ageInput.value)
// 이벤트 함수 밖에 작성하는 건 초기값 확인용 
// 나이 입력 후 버튼 클릭 시 콘솔에 입력한 나이값 표시
// 버튼 클릭 시 특정동작(입력한 나이값)이 일어나야 한다.
ageBtn.addEventListener('click', ()=>{
    console.log(ageInput.value);
    //ageInput변수의 value 값이 숫자 10이라면(조건문)
    //ageResult 변수에 '탑승불가' 문자데이터 출력(조건문 참일때)
    //if(조건식) {조건식 결과가 참일때 실행결과}
    //if(ageInput변수의 value값이 숫자 10 이하){'탐승불가'문자데이터}
    if(ageInput.value <= 10) {
        ageResult.textContent = '탑승불가';
        ageInputReset()
    }
    //10살보다 크면 '탑승가능'메세지 출력
    if(ageInput.value > 10) {
        ageResult.textContent = '탑승가능'}
        ageInputReset()
    //값 입력안하고 클릭 시 '값을 입력하세요' 메세지 출력
    if(ageInput.value == '') {
        ageResult.textContent = '값을 입력하세요'
    } //왜 Null은 안되는지? = Null은 데이터 없음이므로 === 또는 ==에 맞추면 문자열(value가 문자)로 맞춰야 좋음

    console.log(ageResult);
})

function ageInputReset(){
    return ageInput.value = '';
}

//인쇄알고리즘
//인쇄하기 버튼 클릭 시'인쇄 하시겠습니까? 물어보고 확인누르면 인쇄창 실행 (BOM 내장함수 활용할 것 confirm())
/* const printBtn = document.querySelector('#print_btn')
console.log(printBtn)
printBtn.addEventListener('click', printFunc)
function printFunc(){
    let confirmResult = comfirm('인쇄 하시겠습니까?')
    if(confirmResult) {print()}
    // 또는 if(confirm('인쇄 하시겠습니까?)){print()}
    return 
}
 */
//참과 거짓에 따른 결과출력 조건문
//if(조건식){참일때실행}else{거짓일때실행}
console.log('-------------------')
//관리자 로그인
//관리자 (admin) 로그인 사용자 아아디 admin일 경우 ;'관리자님 어서오세요.' 아니면 '관리자페이지 접근불가'
/* const userId = prompt('아이디') */
/* if(userId == 'admin') {
    alert('관리자님 어서오세요')}else { alert('관리자페이지 접근불가')}
 */

/*     if(userId != 'admin') {
        alert('관리자님 접근불가')}else { alert('관리자페이지 어서')}
 */

//로그인 조건문
// 아이디(미입력) 비밀번호(입력) 로그인 클릭 시 - 아이디입력경고 메세지 출력
// 아이디(입력) 비밀번호(미입력) 로그인 클릭 시 - 비밀번호입력경고 메세지 출력
// 아이디(입력) 비밀번호(입력) 로그인 클릭 시 - (맞는 정보 기준) index.html 이동
// 아이디(입력) 비밀번호(입력) 로그인 클릭 시 - (틀린 정보 기준) 정보오류 메세지 출력
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const loginErrorMsg = document.querySelector('#loginFrm .error')

const userDB = [{
    name:'여름',
    age:20,
    pst:'일반회원',
    id:'summer',
    pw:'summer1234'
},
{
    name:'겨울',
    age:21,
    pst:'일반회원',
    id:'winter',
    pw:'winter1234'
}]

loginBtn.addEventListener('click', () => {
    // 아이디 미입력 기준 에러 메세지 출력
    if (userId.value == '') {
        loginErrorMsg.textContent = '아이디를 입력하세요.'
    } else if (userPw.value == '') {loginErrorMsg.innerHTML = '비밀번호를<br>입력하세요';
    } else if (userId.value == userDB[0].id){
        if (userPw.value == userDB[0].pw){
            //location.href = '#';
            //console.log('로그인 성공')
            //isLogin = true;
            //로컬환경에서 확인가능한 브라우저 데이터 저장법
            localStorage.setItem('isLogin2','true')
            //localStorage.setItem('속성','값')
            //localStorage.getItem('가져오는 속성')
        }} else {
            loginErrorMsg.textContent = '아이디 또는 비밀번호가 잘못되었습니다. 다시한번 확인해주세요.';
    }
});

//boolean_common.js 변수 확인
console.log(isLogin)



