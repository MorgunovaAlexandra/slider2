const downBtn=document.querySelector('.down-button');
const upBtn=document.querySelector('.up-button');
const sidebar=document.querySelector('.sidebar');
const mainSlide=document.querySelector('.main-slide');
const container=document.querySelector('.container')

const slidescount=mainSlide.querySelectorAll('div').length

sidebar.style.top=`${-(slidescount-1)*100}vh`;

let activeSlide=0
downBtn.addEventListener('click',()=>{
   changeSlide('down')
})
upBtn.addEventListener('click',()=>{
    changeSlide('up')
})

function changeSlide(direction){
if(direction==='up'){
    activeSlide++
    if(activeSlide===slidescount){
        activeSlide=0
    }
}else if(direction==='down'){
    activeSlide--
    if(activeSlide<0){
        activeSlide=slidescount-1
    }
}
const height=container.C
mainSlide.style.transform=`translateY(-2000px)`
}