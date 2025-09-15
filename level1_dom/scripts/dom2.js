// 1.변수 section*2, a*2, btn*2 (동적대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section')
const linkCls = document.querySelectorAll('section .link')
const btnCls = document.querySelectorAll('section .btn')
console.log(btnCls, linkCls, linkCls[1], linkCls.length, sectionTag, sectionTag[0])
// 2. 이벤트와 함수, 속성 
// 초기값(즉시실행)
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#0cf'

//이벤트, 콜백함수 추가 생성
//a2 클릭 시 section[1] 배경색 변경
/* linkCls[1].addEventListener('click',bgFunc)
function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#01f'
} */
/* linkCls[1].addEventListener('click',function(e){
    console.log(e)
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#0ff'
}
) */
linkCls[1].addEventListener('click', (e)=>{
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#0ff'
})
//linkCls[0].addEventListener('click',)
//a, button(type=button)
//button 이용 js 진행 시 특정 페이지 이동이 필요할 때 location.href를 사용한다 
// 예) 로그인성공 시 메인페이지로 이동 
//JS 상대경로 작성은 html 위치 기준으로 작성한다.
/* btnCls[0].addEventListener('click',()=>{
    window.location.href = './dom1.html'
})
btnCls[1].addEventListener('click',()=>{
    window.location.href = '../sass_study/project2/index.html'
}) */

btnCls[0].addEventListener('click',sassProjectFunc('project1')) // project1
btnCls[1].addEventListener('click',sassProjectFunc('project2')) // project2
function sassProjectFunc(src){
    return function(){ 
        location.href = `../sass_study/${src}/index.html`
    }
}

//쇼핑몰 수량 변수
const inputNum = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const priceCls = document.querySelector('#numFrm .price em')
console.log(inputNum, plusBtn, minusBtn)
//수량이 1로 시작해서 +클릭하면 수량 증가, - 클릭하면 수량 감소
let count = 1; //수량 초기값 변수
let price = 12900;
//초기값
inputNum.value = count; 
/* priceCls.textContent = price.toLocalsString('ko-kr'); * count;
 */
//이벤트, 함수
// +클릭하면 수량 증가
plusBtn.addEventListener('click', plusFunc)
minusBtn.addEventListener('click', minusFunc)        
function plusFunc (){
    console.log(typeof(inputNum.value), typeof(count))
    //return  inputNum.valuse = Number(inputNum.value) + count;
    // 1 증감 연산자 ++ --
    inputNum.value = ++count
    let totoalPrice = price * count
    return preiceCls.textContent = totoalPrice.toLocleString('ko-kr')
    //return priceCls.textContent = (price * count).toLocaleString('ko-kr')
    
}
