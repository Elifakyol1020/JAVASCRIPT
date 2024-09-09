//MouseMove ve WheelEvent kullanımı

//Classı kutu olan divi seçme
const kutu=document.querySelector('.kutu');
//Classı kutu olan dive MouseMove eventi ekleme
//Kutunun üzerine geldiğinde mousenun koordinatlarını verme
kutu.addEventListener('mousemove',e=>{
    console.log(e);//kutu üzerine geldiğimizde sürekli tetiklenir.
    console.log(e.offsetX,e.offsetY);//koordinatlar yazılır.
    kutu.textContent=`x koordinatı ${e.offsetX}, y koordinatı ${e.offsetY}`;
})

//WheelEvent Kullanımı
//Mousemuzdaki aşağı yukarı kaydırmayı sağlayan kısmı tetikleme
document.addEventListener('wheel',e=>{
    console.log(e);//mousedaki o kısmı kullandığımız anda tetiklenir.
    console.log(e.pageX,e.pageY);//sayfanın neresinden tetiklendiğini gösterir.
;})