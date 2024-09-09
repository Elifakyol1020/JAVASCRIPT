//EVENTLİSTENER KULLANIMI

const buton=document.querySelector('button');
buton.addEventListener('click',()=>{
    console.log("tıklandı");//Butona tıkladığımız zaman consoleda tıklandı yazdırılır.
})

const lieleman=document.querySelectorAll('li');//QuerySelectorAll ile bütün li elemanlarını seçtik.
lieleman.forEach(eleman=>{//Foreach yapısı ile li elementlerine event eklemiş olduk.
     eleman.addEventListener('click',e=>{
        console.log("li ye tıklandı.");
        e.target.style.color= 'blue';//li ye tıkladığımızda mavi rengini verir.
     })
})
lieleman.forEach(eleman=>{//Foreach yapısı ile li elementlerine event eklemiş olduk.
    eleman.addEventListener('click',e=>{
        e.target.remove();//li etiketine tıklandığında silinir.
    })
})
//Ekle butonuna tıklandığında yeni li etiketleri ekleme
const ul=document.querySelector('ul');
buton.addEventListener('click',()=>{
    const li=document.createElement('li');//li etiketi oluşturmuş olduk.
    li.textContent='Javascript';

    //ul.append(li);//append sonuna ekler.
    ul.prepend(li);//prepend başına ekler.
})