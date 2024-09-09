const buton=document.querySelector('button');
const mainpopup=document.querySelector('.main-popup');
buton.addEventListener('click',e=>{
    mainpopup.style.display='block';
})
const x=document.querySelector('.popup-close');
x.addEventListener('click',e=>{
    mainpopup.style.display='none';
})
mainpopup.addEventListener('click',e=>{
    if(e.target.className==='main-popup'){
    mainpopup.style.display='none';        
    }
})