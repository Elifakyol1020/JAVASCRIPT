//EVENTBUBBLİNG

const buton=document.querySelector('button');

//Ekle butonuna tıklandığında yeni li etiketleri ekleme ve silme işlemi
const ul=document.querySelector('ul');
ul.addEventListener('click',e=>{
    console.log(e.target);//tıkladığımızda li elementleri gözükür.
    if(e.target.tagName==='LI'){
        e.target.remove();
    }
})
buton.addEventListener('click',()=>{
    const li=document.createElement('li');//li etiketi oluşturmuş olduk.
    li.textContent='Javascript';
    //ul.append(li);//append sonuna ekler.
    ul.prepend(li);//prepend başına ekler.
})
//EVENTBUBBLİNG
//Örneğin li elementinde olan bir event var diyelim. Aynı event ul içinde geçerliyse ikiside aynı anda çalışır.
//bunun önüne geçmek için stopPropagation(); kullanırız.
