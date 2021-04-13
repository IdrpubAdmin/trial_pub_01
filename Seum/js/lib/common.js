'use strict';// btn_toggle 클릭 event
var toggleBtn=document.querySelector('.btn_toggle'),menu=document.querySelector('#mo_gnb');toggleBtn.addEventListener('click',function(){menu.classList.toggle('active')}),document.addEventListener('DOMContentLoaded',function(){var a=document.querySelectorAll('.gnb_1depth>li');//console.log(toggleBtns)
a.forEach(function(a){//console.log(navItem)
var b=a.querySelector('.gnb_1depth>li>a'),c=a.querySelector('.gnb_2depth');// console.log(navItem2d)
// 1depth에 마우스 오버시 2depth 노출
// 2depth에 마우스 오버시 1depth 배경색 변경
a.addEventListener('mouseover',function(){c.classList.add('active')}),a.addEventListener('mouseout',function(){c.classList.remove('active')}),c.addEventListener('mouseover',function(){b.classList.add('active_02')}),c.addEventListener('mouseout',function(){b.classList.remove('active_02')})})}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);// 브로드 캐스트
//const title = document.getElementById("cast_title").textContent;
var title=document.querySelector('.container_box>.title').textContent;// 활성화 페이지 서브타이틀 컬러 넣어주기
document.querySelector('#cast').innerHTML=title,function(){var a=window.location.href,b=document.querySelectorAll('.gnb_2depth > li > a');b.forEach(function(b){-1!=a.indexOf(b.getAttribute('href'))&&b.classList.add('on')})}();