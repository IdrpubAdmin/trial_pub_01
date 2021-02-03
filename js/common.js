// btn_toggle 클릭 event
const toggleBtn = document.querySelector('.btn_toogle');
const menu = document.querySelector('#mo_gnb');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});


// gnb mouse over N out event
document.addEventListener('DOMContentLoaded',  () => {
    const toggleBtns = document.querySelectorAll('.gnb_1depth>li');
    console.log(toggleBtns)

    toggleBtns.forEach(function(navItem,idx,list){
        console.log(navItem)

        let navItem1d = navItem.querySelector('.gnb_1depth>li>a');
        let navItem2d = navItem.querySelector('.gnb_2depth');

        console.log(navItem2d)

        // 1depth에 마우스 오버시 2depth 노출
        navItem.addEventListener('mouseover', function () {
            navItem2d.classList.add('active');
        })
        navItem.addEventListener('mouseout', function () {
            navItem2d.classList.remove('active');
        })

        // 2depth에 마우스 오버시 1depth 배경색 변경
        navItem2d.addEventListener('mouseover', function () {
            navItem1d.classList.add('active_02');
        })
        navItem2d.addEventListener('mouseout', function () {
            navItem1d.classList.remove('active_02');
        })
    });

})