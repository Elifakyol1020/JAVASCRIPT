const baslik=document.querySelector('h1');
//baslik.setAttribute('style','padding:50px');//bu işlem gerçekleşir ama bundan önce bulunan style ı ezer yani override eder.

console.log(baslik.style);//uygulanabilecek bütün özellikler gözükür.

baslik.style.padding='50px';//Bu şekilde dersek override işlemi olmaz ve yeni bir özellik eklemiş oluruz.
baslik.style.fontSize='60px';
baslik.style.fontWeight='600';

//CSS CLASSI EKLEME KALDIRMA İŞLEMİ
const icerik=document.querySelector('p');
console.log(icerik.classList);//p taglarında bulunan class isimlerini yazdırır.
icerik.classList.add('akyol');//class ekleme işlemi gerçekleşiyor.
icerik.classList.remove('error');//error isimli olan class kaldırılır.
//add() : ekleme işlemi
//remove() : silme işlemi

//ÖRNEK: p taglarında bulunan textlerde error yazana error clası verme,success yazana success clası verme

const pDegeri=document.querySelectorAll('p');
pDegeri.forEach(pdegeri=>{
    if(pdegeri.textContent.includes('error')){
        pdegeri.classList.add('error');
    }
    if(pdegeri.textContent.includes('success')){
        pdegeri.classList.add('success');
    }
})