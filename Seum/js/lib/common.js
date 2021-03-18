'use strict';

// btn_toggle 클릭 event
var toggleBtn = document.querySelector('.btn_toogle');
var menu = document.querySelector('#mo_gnb');

toggleBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
});

// gnb mouse over N out event
document.addEventListener('DOMContentLoaded', function () {
    var toggleBtns = document.querySelectorAll('.gnb_1depth>li');
    //console.log(toggleBtns)

    toggleBtns.forEach(function (navItem, idx, list) {
        //console.log(navItem)

        var navItem1d = navItem.querySelector('.gnb_1depth>li>a');
        var navItem2d = navItem.querySelector('.gnb_2depth');

        // console.log(navItem2d)

        // 1depth에 마우스 오버시 2depth 노출
        navItem.addEventListener('mouseover', function () {
            navItem2d.classList.add('active');
        });
        navItem.addEventListener('mouseout', function () {
            navItem2d.classList.remove('active');
        });

        // 2depth에 마우스 오버시 1depth 배경색 변경
        navItem2d.addEventListener('mouseover', function () {
            navItem1d.classList.add('active_02');
        });
        navItem2d.addEventListener('mouseout', function () {
            navItem1d.classList.remove('active_02');
        });
    });
});
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
// 브로드 캐스트
//const title = document.getElementById("cast_title").textContent;
var title = document.querySelector('.container_box>.title').textContent;
document.querySelector('#cast').innerHTML = title;

// 활성화 페이지 서브타이틀 컬러 넣어주기
(function () {
    var loc = window.location.href;
    var dep2Gnb = document.querySelectorAll('.gnb_2depth > li > a');
    dep2Gnb.forEach(function (obj) {
        if (loc.indexOf(obj.getAttribute("href")) != -1) {
            obj.classList.add('on');
        }
    });
})();