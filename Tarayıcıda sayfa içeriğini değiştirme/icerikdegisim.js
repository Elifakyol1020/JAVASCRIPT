//TARAYICIDA SAYFA İÇERİĞİNİ DEĞİŞTİRME
const pdegeri=document.querySelector('p');//ilk p değerini getirir.
console.log(pdegeri);//p tagları içinde değeri yazdırır. p taglarını silmek için innerText kullanırız.
console.log(pdegeri.innerText);//sadece p tagının içindeki değer yazdırılır.

//Bu değeri değiştirmek için;
pdegeri.innerText='Elif Akyol Front-End Developer';//Bu sayede değiştirmiş oluruz.

//Şimdi bütün p taglarnın yanına text ekleyelim. Bu işlemi gerçekleştirmek için querySelectorAll kullanırız.
const pdegeri1=document.querySelectorAll('p');
pdegeri1.forEach(a=>{
    a.innerText+=' yeni alan';//bu sayede yanına text eklemiş oluruz.
})

//Kapsayıcı bir divin içideki değerleri değiştirme
const icerik1=document.querySelector('.icerik');
console.log(icerik1.innerHTML);//tagları ile yazılır.
icerik1.innerHTML+='<h2>Vue Js, React Js, Angular Js</h2>';

const ogrenciler=['elif','efe','erdem'];
ogrenciler.forEach(ogrenci=>{
    icerik1.innerHTML+=`<p>${ogrenci}</p>`;
})