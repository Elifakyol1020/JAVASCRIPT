//DOCUMENT OBJECT MODEL

//QUERYSELECTOR KULLANIMI
const hata=document.querySelector('p');//Burada ilk p etiketini seçer.
console.log(hata);//Etiketi ile p içinde bulunan yazıyı yazar.

const hata1=document.querySelector('.error');//Classı error olan ilk etiketi seçer.
console.log(hata1);

//Eğer classı error olan başka bir etşket tagı seçmek istersek
const hata2=document.querySelector('div.error');//Mesela burada div içinde classı error olanı seçeriz.
console.log(hata2);
//Eğer o selector a sahip olan bütün etiket taglarını seçmek istersek querySelectorAll()' u kullanırız.
const hatalar=document.querySelectorAll('p');
console.log(hatalar);
console.log(hatalar[1]);//Burada 2. p etiketini yazdırır.

//Hepsini yazdırmak istersek forEach yapısını kullanırız.
hatalar.forEach(hata=>{
    console.log(hata);
})


//GETELEMENTBYID VE GETELEMENTSBYCLASSNAME KULLANIMI

//GetElementById: Id si, parantez içinde yazılan ıd ile aynı olan tagı alır.
const baslik=document.getElementById('elif');
console.log(baslik);//ıd si elif olan tagı alır ve yazdırır.

//GetElementsByClassName: Class ismi, parantez içinde yazılan class ismi ile aynı olanları alır.
const hatalar1=document.getElementsByClassName('error');
console.log(hatalar1);//burada forEach yapısı ile classı error olanları yazdıramayız.

//GetElementsByTagName: Tag ismi, parantez içinde yazılan tag ismi ile aynı olanları alır.
const tags=document.getElementsByTagName('p');
//Bu yapıyı da forEcah yapısı ile yazdıramayız.
console.log(tags);