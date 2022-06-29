const downBtn=document.querySelector('.down-button');
const upBtn=document.querySelector('.up-button');
const sidebar=document.querySelector('.sidebar');
const mainSlide=document.querySelector('.main-slide');

const slidescount=mainSlide.querySelectorAll('div').length

sidebar.style.top=`${-(slidescount-1)*100}vh`;

downBtn.addEventListener('click',()=>{
   changeSlide('down')
})
upBtn.addEventListener('click',()=>{
    changeSlide('up')
})

function changeSlide(direction){
if()
}