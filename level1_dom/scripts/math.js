/* /* console.log(Math);
console.log(Math.PI);
//Math.floor, round, random
//Math.floor 소수점 버리기 
let num1 = Math.floor(3.7)
console.log(num1)
num1 = Math.floor(3.2) 
console.log(num1) 
console.log('------------')
let num2 = Math.round(3.7)
console.log(num2)
num2 = Math.round(3.2)
console.log(num2)
console.log('------------')
let num3 = Math.random()
console. log(num3)
num3 = Math.random() * 5;
console. log(num3)
num3 = Math.floor(Math.random() * 10)
console. log(num3)
num3 = Math.floor(Math.random() * 10) + 1; 
console. log(num3)
console.log('------------')
//10% 20% 30% 40% 50% 랜덤 출력
const couponDB = ['10%', '20%', '30%', '40%', '50%']
const couponBtn = document.querySelector('#coupon')

//버튼 클릭 시 쿠폰 5개 중 1개 랜덤하게 alert()으로 출력메세지 실행
couponBtn.addEventListener('click', ()=>{
    let  randomNum = Math.floor(Math.random() * 5)
    alert(couponDB[randomNum])
})


//화면에 접속했을 때 광고 2개가 랜덤 표시
const adDB = [{
    name:'서울 여행',
    src: 'https://i.pinimg.com/1200x/f4/e6/03/f4e603d7cdabc0e0afaf38e1496ae270.jpg'
    link: 'https://www.naver.com/'
},{
    name: '제주도 여행'
    src: 'https://i.pinimg.com/736x/f3/bb/2c/f3bb2c5ba076c6d35e64f98ad26ba30e.jpg'
    link: 'https://www.google.com/?hl=ko' 
}]
window.addEventListener('load', ()=>{
    const adSection = document.querySelector('.ad')
    const 
    let randomNum = Math.floor(Math.random() * =
    
})'

//더치페이 계산기
// 계산하기 클릭 시 총 금액과 인원수에 따라 계산결과 출력하기
// 금액이 소수점일경우 소수점에 따라 반올림하기
totalBtn.addEventListener('click', ()=>{
    calcResult. .= price.toLoaleString()
})


//DB 
const shopDB = [{
    shop : '쿠팡',
    id : '하루견과',
    prcie:1000,
},{
    shop : '네이버 스마트스토어',
    id : '하루견과',
    prcie:2000,
},{
shop : '마켓컬리',
id : '하루견과',
prcie:3000,
}]

// 변수
const minPriceBtn = document.querySelector('#min_price_btn')
const minPriceP = document.querySelector('.min_price')
const listUl = documnet
const pp = [1000, 2000, 3000, 4000] //test

// 클릭 이벤트
minPriceBtn.addEventListener('click', ()=>{
    //1. 쇼핑몰, 상품명, 가격을 가지고있는 배열에서 가격만 추출하기
    const prcieMap = shopDB.map(i => i,pirce)
    console.log(priceMap)
    //2. 추출한 가격에서 최저가 찾기
    console.log('최저가:', Math.min)
    }
/*     //스프레드연산자(...배열명) 여러 배열값을 한번에 처리하는 배열 처리법 
    console.log(Math.min(...pp)) //최저가
    console.log(Math.max(...pp)) //최고가
})
     */
window.addEventListener('load', ()=>{
    const shopSort = [...shopDB].sort((a,b) => b.price - a.price)
    console.log(ShopSort)
    for(let i of shopSort){
        const dt = document.createElement('dt')
        dt.textContent = i.shop;
        listD1.appendChild(Dt)
        const dd = document.createElement('dd')
        listD1.appendCild(dd)
    }

})
// 두번 삽입해야 하기 때문에 dt dd



console.log('--------------------')
const shopDB2 = [{
    shop: '쿠팡',
    name: '고구마',
    price:5000,
    delivery:2500,
},{
    shop: '이마트몰',
    name: '고구마',
    price:2900,
    delivery:0,
},{
    shop: '네이버',
    name: '고구마',
    price:4000,
    delivery:1000,
}];

const priceBtn = document.querySelector('#price_btn')
const deliveryBtn = document.querySelector('#delivery_btn')
const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')
const shopListUI = document.querySelector('#shop_list')

//최저가찾기 버튼 클릭 시 최저가 표시
priceBtn.addEventListener('click', ()=>{
    //최저가 JS
    const min = shopDB2.map(i=>i.price)
    result1.textContent = `최저가 : ${Math.min(...min)} 원`;
    const max = shopDB2.map(i=>i.price)
    result1.textContent = `최고가 : ${Math.max(...max)} 원`;

    //최저가 -> 최고가 오름차순 정렬하기 JS
    //매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price
    //매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a, b) => a.price - b.price)
    console.log(sort)

    //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    //for~in, for~of, forEach 
    for(let i of sort){
        console.log(i.shop)
        const li = document.createElement('li') //<li></li>
        //li.textContent = i.shop
        li.innerHTML = `<a href='#'>${i.shop}</a>`
        li.innerHTML = `<span>${i.price}원</span>`
        li.innerHTML = `<em>배송비 :${i.delivery}원</em>`
        console.log(li, i.shop)
        shopListUI.appendChild(li)
        //createElement로 삽입한 JS 태그는 appendChild함수로 대입한다,
    }
})
//배송비무료 버튼 클릭 시 배송비가격 표시
deliveryBtn.addEventListener('click', ()=>{
    const delivery = shopDB2.map(i=>i.delivery)
    result2.textContent = '배송비 : '+Math.min(...delivery)+'원';

})





