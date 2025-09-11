//함수
//1. 함수 대기(생성한 상태)
/* function func1(){
    console.log('반복 실행 내용')
} */
// 2. 함수 호출(생성 밖)
/* func1();
func1(); */

// 함수의 매개변수 활용
function storyFunc1(date=1, data='조약돌'){
    console.log(`매개변수 값 확인 : ${date}, ${data}`)
    //헨젤, 그레텔 준비
    const person = ['헨젤', '그레텔']
    //조약돌 준비
    //집 돌아간다 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    //1일차 헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    //2일차 헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    //3일차 헨젤과 그레텔이 쌀을(를) 이용해서 집을 찾아갔습니다.
    console.log(`${date}일차 ${person[0]}과 ${person[1]}이 ${data}을(를) 이용해서 집을 찾아갔습니다.`)
}
storyFunc1(); //기본값 사용 시 매개변수 값 전달안함
storyFunc1(1, '빵부스러기'); //기본값 변경 시 매개변수 값 전달
// 이야기 둘째날 - 헨,그 실패한 사례
function storyFunc2(){
    //헨젤, 그레텔 준비
/*    const person = ['헨젤', '그레텔']
    //조약돌 준비
    const src = '빵부스러기'
    //집 돌아간다 목표
    //헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    alert(`${person[0]}과 ${person[1]}이 ${src}을(를) 이용해서 집을 찾아갔습니다.`)
} */


// funciton storyFunc2(){....
}

function coffeeFuc(menu, water, espr=1){
    console.log(`매개변수 값 확인 메뉴: #{menu}, ${water}컵, ${espr}샷`)
    console.log(`${menu} 레시피`)
    console.log(`${water}컵 물을 채운다.`)
    console.log(`${espr}샷 에스프레소를 넣는다.`)
}
coffeeFuc('아메리카노', 2);
coffeeFuc('에스프레소', 0);

//Q.커피주문 알고리즘
function kiosk_array(hotice, name, num){
    const type = ['따뜻한', '차가운']
    const menu = ['카페라떼', '아메리카노', '녹차라떼']
    console.log(`${type[hotice]} ${menu[name]} ${num}잔 주문완료되었습니다.`)
}
kiosk_array(0, 0, 2);
kiosk_array(1, 1, 1);
kiosk_array(0, 2, 2);
kiosk_array(1, 2, 1);

//키오스크 주문 출력(객체 활용법)
function kiosk_obj(coffee_type, coffee_menu,num=1){
    const coffeeMenu = {
        type:['따뜻한', '차가운'],
        menu:['카페라떼','아메리카노','녹차라떼']
    }
    console.log(`${coffeeMenu.type[coffee_type]} ${coffeeMenu.menu[coffee_menu]} ${num}잔 주문완료되었습니다.`)
}
kiosk_obj(0,0,2);
kiosk_obj(1, 1);
kiosk_obj(0, 2, 2);
kiosk_obj(1, 2);

console.log('-------------------리턴')
function plusFunc1(n1,n2){
    let calc = `${n1} + ${n2} = ${n1+n2}`
    calc = `${n1} + ${n2} = ${n1+n2}`
    // Q3.  곱하기가 아닌 더하기만 나오는 문제
    return calc


}
/* function plusFunc2(n1,n2){
    alert(`${n1} + ${n2} = ${n1+n2}`)
} */

//console.log(plusFunc1(1,2))
//alert(plusFunc1(2,4))


//구구단 함수(2~9단 까지)
// 출력예시) 변수x변수 = 결과
function dan99Func(dan){
    //구구단 식
    let dan99Total = '';
    dan99Total += `${dan} X1 = ${dan*1}, `
    dan99Total += `${dan} X2 = ${dan*2}, `
    dan99Total += `${dan} X3 = ${dan*3}, `
    dan99Total += `${dan} X4 = ${dan*4}, `
    dan99Total += `${dan} X5 = ${dan*5}, `
    dan99Total += `${dan} X6 = ${dan*6}, `
    dan99Total += `${dan} X7 = ${dan*7}, `
    dan99Total += `${dan} X8 = ${dan*8}, `
    dan99Total += `${dan} X9 = ${dan*9}, `
    return dan99Total//반환변수명
}
console.log(dan99Func(7))

//prompt (dan99Func(2))
// 할인율 계산기
// KB 국민카드 5% 할인적용가 ?원
// 현대카드 10% 할인적용가 ?원
// 농협 카드 20% 할인적용가 ?원
// KB 국민카드 5% 할인적용가 ?원

function cardFunc(cardType, discount){
    const card = ['국민', '현대', '삼성']
    const price = 1051000; //원가
    const calc = (100 - discount) / 100;
    const totalPrice = price * calc; //할인가계산
    const result = `${card[cardType]} ${discount}% 할인적용가 ${totalPrice}원`

    return result
}

console.log(cardFunc(0,5));
console.log(cardFunc(1,10));
console.log(cardFunc(2,20));

//익명함수
//변수 내 function 키워드를 지정해 생성하는 함수

// 일반함수와 익명함수의 차이
function hello1(user){
    return alert('hello'+user)
}
//hello1('yuna')

const hello2 = function(user){
    return alert('hello' +user)
}
hello2('kim')

// 익명함수 + 화살표함수(ES6)
// 변수키워드 변수명 대입연산자 (매개변수) 화살표 {실행}}
//const hello3 () => {
//    return console.log('hello')
//}
