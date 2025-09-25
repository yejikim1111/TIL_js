//index.js
//jquery ver
// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
const $resultFlower = $('.result_flower')
const $shareBtn = $('#share_btn')
$resultFlower.hide()
$shareBtn.hide()
// '만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
const $resultBtn = $('#result_btn')
const $year = $('#year')
const $month = $('#month')
const $day = $('#day')
$resultBtn.click(function(){
    //조건 ? 참 : 거짓;
    console.log(Boolean($year.val()))
    const ymd = $year.val() && $month.val() && $day.val()
    ymd ? flowerFunc(): alert('생년월일을 모두 입력해주세요.');
    function flowerFunc(){
        const $userMonth = $month.val();
        const $resultFlower = '${birthday_flower[$userMonth-1].flower}';
        const resultFlowerLang ='${birthday_flower[$userMonth-1].content}';
        const reslutFlowerSrc='${birthday_flower[$userMonth-1].src}';
        $resultFlower.show()
        $year.hide()
        $month.hide()
        $day.hide()
        $shareBtn.show()
        $resultBtn.hide()
        $resultFlower.find('em').text($resultFlower)
        $resultFlower.find('span').text(resultFlowerLang)
        $flowerImg.attr('src', resultFlowerSrc)
    }
})
