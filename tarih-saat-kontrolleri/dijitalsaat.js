const saat=document.querySelector('.clock');
const tick=()=>{
    const now=new Date();
    const hours=now.getHours();
    const minute=now.getMinutes();
    const seconds=now.getSeconds();
    //console.log(hours,minute,seconds);
    const html=`
    <span>${hours}</span>:
    <span>${minute}</span>:
    <span>${seconds}</span>
    `
    ;
    saat.innerHTML=html;
};
setInterval(tick,1000);