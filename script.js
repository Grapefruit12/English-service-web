'use strict';

// header 스크롤시 배경색 변경(navbar)
const header=document.querySelector('#header');
window.onscroll=()=>{
    if(window.scrollY>200){
        header.classList.add('header-active');
    }else{
        header.classList.remove('header-active');
    }
}

//gnb__menu의 각각 버튼클릭시 해당 section으로 이동
const gnbMenu=document.querySelector('.gnb__menu');
gnbMenu.addEventListener('click',(event)=>{
    console.log(event.target);
    const target=event.target;
    // console.log(`target:${target}`);
    const link=target.dataset.link;
    // console.log(`link:${link}`);

    if(link==null){
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo=document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth", block: "center"});
})