//index.js
//작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
//1.변수 2. 초기값 설정 3.이벤트, 함수 설정 

// 동적 요소 계획하기 
// 1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행 ◆로그인
// 3. 리뷰 클릭 시 스크롤 이동 
// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 5. 주문 목록 초기 숨기기 
// 6. 사이즈select 초기 비활성화(색상 선택 시 활성화)
// 7. 색상 -> 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문금액 변경)
// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 수량+금액 표시
// 10. 주문목록 - 클릭 시 주문수량+주문금액 감소(1 이라면 경고창 출력)
// 11. (상품 미 선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
// 12. (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동 ◆로그인


// 1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 변수 -> 초기값 -> 이벤트, 함수
// 1- a. 변수 선언 (2개)
const thumnailA = document.querySelectorAll('.thumnail a') //형제 대상(a)를 잡는게좋음
const thumnailOverView = document.querySelector('.overview img')
console.log(thumnailA, thumnailOverView) //a*2개, img 

// 1 - b. 초기값 (첫번재 썸네일 a가 보이고 있단 뜻으로 테두리가 있음)
thumnailA[0].style.border = '2px solid #0aa5ff'

//두번째 썸네일에 마우스 올리면 큰 이미지가 두번째 썸네일 이미지로 변경하기
// 콘솔 테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
// 콘솔 테스트 권장 2) 큰 이미지 경로 출력하기 
console.log(thumnailA[1].children[0].src) // 콘솔 테스트 1.  <a><img src=""></a> 와 같은 뜻
console.log(thumnailOverView.src) // 콘솔 테스트 2

//자연스러운 이미지 scale 변경을 위한 transition 애니메이션 설정(초기값) - 41줄 이미지 확대
thumnailA[0].children[0].style.transition = 'transform 0.3s'
thumnailA[1].children[0].style.transition = 'transform 0.3s'

thumnailA[0].addEventListener('mouseover', ()=>{
    thumnailA[1].style.border = '0' 
    thumnailA[0].style.border = '2px solid #0aa5ff' 
    thumnailA[1].children[0].style.transform = 'scale(1)' //이미지 초기값(축소)
    thumnailA[0].children[0].style.transform = 'scale(1.2)' //이미지 확대
    thumnailOverView.src = thumnailA[0].children[0].src //이미지 변경 
})
thumnailA[1].addEventListener('mouseover', ()=>{
    thumnailA[0].style.border = '0'
    thumnailA[1].style.border = '2px solid #0aa5ff'
    thumnailA[0].children[0].style.transform = 'scale(1)' 
    thumnailA[1].children[0].style.transform = 'scale(1.2)' 
    thumnailOverView.src = thumnailA[1].children[0].src
})

//로그인 정보 저장 
// true == 로그인
// false == 로그아웃 
localStorage.setItem('isLogin','false');

// 2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행 ◆로그인
const bookMark = document.querySelector('.product_info .scrap')
let loginStatus = ''; //상태가져오기 변수 생성(빈칸으로 둬야 이후 함수에서 설정됨)
console.log(bookMark);
// 로그인 시 wish.html 이동
bookMark.addEventListener('click', ()=>{
    loginStatus = localStorage.getItem('isLogin')
    if(localStorage.get == 'false') {
        location.href ='./login.html'
    }else{
        location.href = './wish.html'  
    }// 로그아웃 시 login.html 이동
})

// 3. 리뷰 클릭 시 스크롤 이동 
const reviewBtn = document.querySelectorAll('.review_link')
const reviewWrap = document.querySelector('.review_wrap')
const productInfoBtn = document.querySelector('.product_link')
const productWrap = document.querySelector('main > .product_info')
console.log(reviewBtn, reviewWrap, productInfoBtn, productWrap)

reviewBtn[0].addEventListener('click', (e)=>{e.preventDefault(); contentsPstFunc(reviewWrap)})
reviewBtn[1].addEventListener('click', (e)=>{e.preventDefault(); contentsPstFunc(reviewWrap)})
productInfoBtn.addEventListener('click', (e)=>{e.preventDefault(); contentsPstFunc(productWrap)})

function contentsPstFunc(target){
        window.window.scrollTo(0, target.offsetTop)
}

/* reviewBtn[0].addEventListener('click', (e)=>{
    e.preventDefault()//a 새로고침 기본 기능
    //스크롤 이동 : window 함수 scrollTo(x,y)
    console.log(reviewWrap.offsetTop) //리뷰위치의 위쪽 확인 값 
    window.scrollTo(0, reviewWrap.offsetTop)
})  */

// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 초기 : 숨김(false)
// 클릭 : 보이기(true)->false->true->false->true...

let infoBoolean = false; //초기 : 숨김(false)

const priceInfoBtn = document.querySelector('.price_wrap .info_icon')
const priceInfo = document.querySelector('.price_info .info')

/* priceInfoBtn.addEventListener('click', ()=>{
    priceInfo.style.display = 'block'
}) */

priceInfoBtn.addEventListener('click', ()=>{
    //infoBoolean의 상태를 클릭할때마다 값(infoBoolean)반전
    infoBoolean = !infoBoolean;
    console.log(!infoBoolean)
    if(infoBoolean = 'true'){
        priceInfo.style.display = 'block'
    }else{
        priceInfo.style.display = 'none'
    }  
})

// 5. 주문 목록 초기 숨기기 order_list
// 6. 사이즈select 초기 비활성화(색상 선택 시 활성화)
const orderList = document.querySelector('.order_list');
const sizeSelect = document.querySelector('#size_select');
const colorSelect = document.querySelector('#color_select');
const orderPrice = document.querySelector('.order_price em')
console.log(orderList, sizeSelect, colorSelect)
orderList.style.display = 'none';
sizeSelect.disabled = true;
/* const orderList_color = document.querySelector('.order_list .info .color');
const orderList_size = document.querySelector('.order_list .info .size'); */

// 6-2. (색상 선택 시 활성화)
// 7. 색상 -> 사이즈 모두 선택 시 (선택한 인덱스가 0(value=none)이 아닌것) - 콘솔 '선택완료'
// 주문목록 출력(선택한 값이 출력, 주문금액 변경)
colorSelect.addEventListener('change', ()=>{
    //sizeSelect.disabled = false;
    //색상 selcet에서 첫번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을 때 사이즈 select 활성화하기
    if(colorSelect.selectedIndex != 0){ // 사용자가 선택한 options이 인가, 아닌가? 
        sizeSelect.disabled = false; //활성화
        sizeSelect.addEventListener('change', ()=>{
            if(sizeSelect.selectedIndex != 0){
                console.log('선택완료')
                orderList.style.display = 'block';
                //선택한 옵션 안에 글자 가져오는 속성 text
                console.log(orderList.children[0].children[0])
                console.log(orderList.children[0].children[1])
                //선택 옵션(color) 출력하기
                let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
                let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text;
                /* let orderColorReplace = orderColor.replace(찾는값, 변경값) */
                // 정규표현식 : 특정 문자를 js에서 찾는 방식 \(백슬래시)   
                // 시작과 끝 표시 /검사내용/ 
                // 괄호찾기 : \찾는문자 : \( \)     <- ( 괄호 찾고 ) 찾기  
                // 모든 내용 .*    즉 \찾는문자.*\ 라면 \\를 포함한 안에 내용도 모두
                // 결과 /\\/ 
                let orderColorReplace = orderColor.replace(/\(.*\)/,'')
                let orderSizeReplace = orderSize.replace(/\(.*\)/,'')
                orderList.children[0].children[0].textContent = orderColorReplace;
                orderList.children[0].children[1].textContent = orderSizeReplace;
                //주문금액 표시
                orderPrice.textContent = (productOptDB[0].price).toLocaleString('ko-kr')
                
            }
        })
    }else {
        sizeSelect.disabled = true;
    }
})



//DB 불러오기 테스트
/* console.log(productOptDB[0]) //
console.log(productOptDB[0].color[0]) */


/* //DB -> HTML 적용 
// 1. JS에서 HMTL 함수로 생성 creatieElement()
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
console.log(colorOpt1)
// 2. 위에서 생성한 함수에 DM 데이터대입 innerHTML, textContent
colorOpt1.textContent =  `${productOptDB[0].color[0]}(${productOptDB[0].price}원)`
colorOpt2.textContent = `${productOptDB[0].color[1]}`
// 3. 위에서 만든 hTMl을 실제 HTML의 마지막 자식 위치로 삽입 
colorSelect.appendChild(colorOpt1)
colorSelect.appendChild(colorOpt2)
// * 생성한 태그가 li면 ul ro ol의 마지막 자식 위치로 삽입
// * 생성한 태그가 option이면 selcet의 마지막 자식 위치로 삽입 */

// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
const closeBtn = document.querySelector('.order_list .close')
console.log(closeBtn)
/* closeBtn.addEventListener('click', ()=>{
    closeBtn parentNode.style.display = 'none';
}) */   
// 8. 방법 1
    closeBtn.addEventListener('click', function(){
        this.parentNode.style.display = 'none'; //8. 방법 2. this쓰려면 function()익명함수써야함
        orderPrice.textContent = 0; 
        colorSelect.selectedIndex = colorSelect.options[0]
        sizeSelect.selectedIndex = sizeSelect.options[0]
    })

// 9. 주문목록 + 클릭 시 재고수량까지 수량+금액 표시
// 필요목록 : +버튼, 재고수량(productOptDB[0].stock), 주문수량, 주문금액(orderPrice), 증가 숫자 데이터
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const orderNum = document.querySelector('#order_num')
const orderListPrice = document.querySelector('.order_list .price')
let num = 1; //초기주문수량

//초기값 : 주문수량칸에 값 1 적용하기
orderNum.value = num;

// + 버튼 클릭 시 주문수량이 1씩 증가하고 주문수량에 따라 가격(productOptDB[0].price)증가하기
plusBtn.addEventListener('click', ()=>{
    if(num < productOptDB[0].stock){
    num++; 
    let total = num * productOptDB[0].price 
    orderNum.value = num
    orderListPrice.textContent = total.toLocaleString('ko-kr')
    orderPrice.textContent = total.toLocaleString('ko-kr')
}else {
    alert('최대 구매수량입니다.')
}
}) // 증가 버튼 끝
// 감소 버튼 시작

//10. 주문목록 - 클릭 시 주문수량+주문금액 감소(수량이 1이라면 경고창 출력)
minusBtn.addEventListener('click', ()=>{
    if(num > 1){
        num--;
        minusPluseFunc() // 함수호출
    }else{
        alert('최대 구매수량입니다.')
    }
})

function minusPluseFunc(){
        let total = num * productOptDB[0].price 
        orderNum.value = num
        orderListPrice.textContent = total.toLocaleString('ko-kr')
        orderPrice.textContent = total.toLocaleString('ko-kr')
        return;
    }

// 11. (상품 미 선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')
console.log(cartBtn, buyBtn)

cartBtn.addEventListener('click',()=>{
    cartBuyFunc('./cart.html')
})
buyBtn.addEventListener('click',()=>{
    cartBuyFunc('./buy.html')
})

Function cartBuyFunc(url){
    if(colorSelect.selectedIndex || 0 && sizeSelect.selectedIndex == 0){ //상품 선택안한걸 확인하는 조건문 
        alert('옵션 선택 후에 버튼을 클릭해 주세요.')
    }else{ 
        //장바구니 페이지 이동(로그인 유(장바구니) 무(로그인)에 따라)
        loginStatus = localStorage.getItem('isLogin')
        if(loginStatus == 'true') {
            location.href = url
        }else{
            location.href = './login.html' }
    } 
}
    


// 12. (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동 ◆로그인


