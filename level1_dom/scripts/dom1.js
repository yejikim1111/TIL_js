const inputTag = document.querySelectorAll('input');
const buttonTag = document.querySelectorAll('button');
console.log(inputTag, buttonTag);
console.log(inputTag[0], buttonTag[0]);
console.log(inputTag[1], buttonTag[1]);
console.log(inputTag.length, buttonTag.length);

const searchInput  = document.querySelector('input[type="search"]');
/* 대안 예시
const searchInput = document.querySelector('section:first-child input');
// const searchInput = document.querySelector('#s');
// const searchInput = document.querySelector('input[name*=s]');
*/
const searchBtn    = document.querySelector('#search_btn');   // ← 오타 수정 + #추가
const shopNumInput = document.querySelector('#num');          // ← 간단히 #num
const shopCartBtn  = document.querySelector('#cart_btn');     // ← 오타 수정 + #추가
console.log(searchInput, searchBtn, shopNumInput, shopCartBtn);

// 태그 속성, 함수 테스트
console.log(searchInput.type, searchInput.placeholder); // 속성 읽기

searchInput.placeholder = ''; // 속성 쓰기
let checkValue = '';
searchInput.value = '인기검색어 : HTML'; //value 값 변경 
checkValue = searchInput.value; // input 값 읽기
console.log(checkValue); // 출력확인

console.log(shopNumInput.type)
console.log(shopNumInput.name)
console.log(shopNumInput.value + 1)
console.log(typeof(shopNumInput.value))

checkValue = Number(shopNumInput.value) + 1;
console.log(`주문수량 : ${checkValue}`)

shopNumInput.style.backgroundColor = '#eee'
shopNumInput.style.width = '50px'
shopNumInput.style.textAlign = 'center'
searchInput.style.color = '#fff'
searchInput.style.backgroundColor = 'grey'
searchBtn.style.width = '100px'
searchBtn.style.lineHeight = '25px'
searchBtn.style.borderRadius = '20px'
searchBtn.style.backgroundColor = 'lightblue'
searchBtn.style.color = '#fff'
shopCartBtn.style.width = '100px'
shopCartBtn.style.lineHeight = '25px'
shopCartBtn.style.borderRadius = '20px'
shopCartBtn.style.backgroundColor = 'lightpink'
shopCartBtn.style.color = '#fff'

//이벤트 활용 콜백함수 호출
//이벤트 문법
//객체.addEventListener('이벤트종류',콜백함수)
const orderBtn = document.querySelector('#order');
console.log(orderBtn);

//주문 버튼 클릭 시 '상품을 선택하세요' 경고창 출력
//orderBtn.addEventListener('click',)
//이벤트 뒤 함수 작성방식 : 콜백함수호출(추천 권장), 익명함수
/* orderBtn.addEventListener('click',function(){
    alert('상품을 선택하세요')
}) */
/* orderBtn.addEventListener('click', orderFunc)

function orderFunc(){
    return alert('상품을 선택하세요')
} */
//주문하기 클릭 시 '장바구니에 담으세요'
//장바구니 클릭 시 '상품을 담으세요'
// 콜백함수 1개만 활용 각각 DOM 이벤트 클릭 시 다른 메세지 출력하기 
//매개변수의 수정이 필요한 콜백함수는 이벤트 뒤 익명함수 또는 화살표함수 추가 제작으로 수정가능한 함수로 재작성하는게 일반적인 방법이다.
const cartBtn = document.querySelector('#cart');
console.log(cartBtn);

/* orderBtn.addEventListener('click', function(){
    orderFunc(0)
}) //익명함수 (내장) */

/* orderBtn.addEventListener('click', ()=>{
    orderFunc('장바구니에')
}) //화살표함수  */

function orderFunc(data){
    return alert (data + ' 담으세요')
}

orderBtn.addEventListener('click',orderFunc_v2('상품'))

function orderFunc_v2(data){
    return function(){ /* 클로저(Closure) */
        /* 내부 함수는 외부 함수의 매개변수를 기억한다.                                                                                                                                                                                                                                                                              */
    alert (data + ' 담으세요')
    }
}


/* function orderFunc_va(data){
    let select_product = ['장바구니에', '상품을']
    return alert(`${select_product[data]} 담으세요`)
} */

/* cartBtn.addEventListener('click', orderFunc(1)) */


//Q. 아이디, 비밀번호 중복확인 클릭 시 
// 아이디가 중복되었습니다.
// 비밀번호가 중복되었습니다.
// 1.제어 DOM 대상 변수 등록
// 2."클릭 시" 이벤트 콜백함수 제작
// 3. 실행 메세지가 통일된 특징에 맞춰서 콜백함수 1개 제작 
// 3-1. 콜백함수 내에 함수호출 시 다른 내용이 있으면 매개변수 제작 
//4. 3번 콜백함수를 2번 이벤트에서 호출 

// 1번 
const idOverlapBtn = document.querySelector('#id');
const pwOverlapBtn = document.querySelector('#pw');
console.log(idOverlapBtn,pwOverlapBtn)

//2번
idOverlapBtn.addEventListener('click',()=>{overlapFunc('아이디')})
pwOverlapBtn.addEventListener('click',overlapFunc_v2('비밀번호'))

// 3
function overlapFunc(msg){
    return alert(msg+ '가 중복되었습니다')
}

function overlapFunc_v2(msg){
    return function(){
        alert(msg+ '가 중복되었습니다')
    } 
}

// 이벤트 콜백함수 연습
// Q1. textarea 값을 아무거나 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력 
// Q2. textarea를 활성화했을 때 테두리가 빨강색
// Q2. textarea를 비활성화했을 때 테두리 회색

const reviewBox = document.querySelector('textarea#review')
console.log(reviewBox);

reviewBox.addEventListener('keydown', lengthFunc)
function lengthFunc(){
    return console.log('50자 이상 입력하세요')
}
reviewBox.addEventListener('focus', ()=>{reviewBoxColor('#f00')})
function reviewBoxColor(color){
    return reviewBox.style.border = `1px solid ${color}`
}
reviewBoxColor('#aaa')

// 배경버튼에 마우스 올리면 부모 article 배경색 변경하기
const articleTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('button[class*=bg]')
const bgP = articleTag.querySelector('p')
console.log(bgBtn, bgP)
//bgP.textContent = `현재<br>배경색상 : #eee`
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'

/* inputTag = document.querySelector('input'); */

bgBtn[0].addEventListener('mouseover', colorChange('#ffc'))
bgBtn[1].addEventListener('mouseover', colorChange('#0cf'))
bgBtn[2].addEventListener('mouseover', colorChange('#ff02'))
function colorChange(color){
    return function(){
        articleTag.style.backgroundColor = color;
        bgP.textContent= `현재 배경색상 : ${color} `
    }
}