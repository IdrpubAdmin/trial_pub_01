// js event
// onmouseover 마우스 포인터가 HTML 요소 위에 놓여있을 때
// onmouseout 마우스 포인터가 HTML 요소를 벗어났을 때
// gnb mouse over event
document.addEventListener('DOMContentLoaded',  () => {
    const toggleBtns = document.querySelectorAll('.gnb_1depth>li');
    console.log(toggleBtns)

    toggleBtns.forEach(function(navItem,idx,list){

        console.log(navItem)

        let navItem2d = navItem.querySelector('.gnb_2depth');

        console.log(navItem2d)

        navItem.addEventListener('mouseover', function () {
            navItem2d.classList.add('active');
        })
        navItem.addEventListener('mouseout', function () {
            navItem2d.classList.remove('active');
        })

    });
})