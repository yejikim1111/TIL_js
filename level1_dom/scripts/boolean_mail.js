//console.log(isLogin)
window.addEventListener('load', ()=>{
   let loginStatus = localStorage.getItem('isLogin2') //true라는 상태를 가져옴 (boolean에서 login성공을 해야 값을 가져옴)
   console.log(loginStatus == 'true') //loginStatus==true x . 해당 loginStatus는 true(1) 참이 아닌 'true'-string 
   //console.log(typeof(loginStatus))

    //DOM 변수
    const mailLogin = document.querySelector('#login')
    const mailLogout = document.querySelector('#logout')

    if(localStorage){
        console.log('로그인 화면')
        mailLogin.style.display = 'block'
        mailLogout.style.display = 'none'
    }else {
        console.log('로그아웃 화면')
        mailLogout.style.display = 'block'
        mailLogin.style.display = 'none'
    } 
})