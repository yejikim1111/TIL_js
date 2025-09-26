//timer1.js
//setInterval (콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    if(num1 > 5) num1 = 1
    console.log('timer test ' +num1)
    num1++ 
}, 500) */

// 0~ 6 반복타이머
// 123456 0123456 0123456 
/* let num1 = 0;
const timer1 = setInterval(function(){
    if(num1 > 6) num1 = 1
    console.log('timer: ' + num1)
    num1++
}, 500) */
/* let num1 = 0;
const timer1 = setInterval(function(){
    num1++
    if(num1 > 6) num1 = 0
    console.log('timer: ' + num1)
}, 500) */

// 3 ~ 0 반복타이머
//3210 3210 3210
/* let num2 = 3;
const timer2 = setInterval(function(){
    if(num2 <0) num2 = 3
    console.log('timer2 test: ' + num2)
    num2-- 
},500) */

//이미지 슬라이드 타이머 활용 
// opacity + visivlity 서서히 나타나는 애니메이션
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
const gentleSlideCurrentNum = document .querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector ('.page_bumver .total')
console.log(gentleSlide, gentleSlideCurrentNum,gentleSlideTotlaNum)

//슬라이드 총 번호 표시 
gentleSlideTotalNum.textContent = gentleSlide.length;
gentleSlideCurrentNum.textContent = gentleNum+1




//012345 현재 존재하는 슬라이드 인덱스
// 12345  012345 012345 

let gentleNum = 0; //초기값 
//gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transistion
for(let i of gentleSlide) i.style.transition = 'opacity 0.5s' 

const gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0
    //console.log(gentleNum)
    for(let i of gentleSlide){
        i.style.visivility = 'hidden';
        i.style.opacity = '0';
    }
    gentleSlide[gentleNum].style.visibility = 'visible'
    gentleSlide[gentleNum].style.opacity = '1'
},3000)


//container2 
// 43210 543210 543210  
let gentleNum2 = gentleSlide2.length -1; //초기값 
const slideIndex2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 < 0) gentleNum2 = gentleNum2 = gentleSlide2.length -1
    //console.log(gentleNum2)
    for(let i of gentleSlide2)i.style.display = 'none'
    gentleSlide2[gentleNum2].style.display = 'block'
},500)