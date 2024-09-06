//FONKSİYON TANIMLAMA
function elif(){
    console.log("elif");
}
//Bu şekilde tanımlarız.
elif();// fonksiyonu çağırma şekli verilmiştir.

//Fonksiyonu bu şekilde de tanımlayabiliriz.
const elifakyol= function(){
    console.log("elif akyol");
}
elifakyol();

//FONKSİYONA PARAMETRE VERME
//Fonksiyona parametreler parantez içine verilir.
const adSoyad=function(ad,soyad){
    console.log("Ad: "+ad+" Soyad: "+soyad);
}
adSoyad("Elif","Akyol");


//FONKSİYONLARDA RETURN:
//return fonksiyon içindeki değeri döndürür.
//Aşağıda verilen örnekteki gibi fonksiyon içindeki değeri return döndürür ve bu değeri fonksiyon dışında kullanabiliriz.
const karealani=function(kenar){
    return kenar**2;
}
const sonuc=karealani(6);
console.log(sonuc);

//ARROW FUNCTİON:
//Yukarıda yazılmış olan fonksiyonun arrow fonksiyon hali aşağıda verilmiştir.
//Arrow function kuralları:
//1- Eğer fonksiyonun bir tane parametresi varsa parantez koymamıza gerek yoktur ama birden fazla ise parantez koymamız şarttır.
//2- Eğer fonksiyonun bir tane kod satırı varsa süslü parantez koymamıza gerek yoktur ama birden fazla ise süslü parantezi koymamız şarttır.
const karealani1=kenar=>{
    return kenar**2;
}
karealani1(6);

//ARROW FUNCTİON ÖRNEK
//Fonksiyonun normal yazılış şekli
const fatura=function(urunler,vergi){
    let toplam=0;
    for(let m=0;m<urunler.length;m++){
        toplam=toplam+urunler[m]+(urunler[m]*vergi);
    }
    return toplam;
}
console.log(fatura([10,20,30],0.25));
//Fonsiyonun arrow function şeklinde yazılmış hali
const faturaarrow=(urunler,vergi)=>{
    let toplam=0;
    for(let m=0;m<urunler.length;m++){
        toplam=toplam+urunler[m]+(urunler[m]*vergi);
    }
    return toplam;
}
console.log(faturaarrow([10,20,30],0.25));

//FOREACH YAPISI VE KULLANIMI
let ogrenci=['elif','eren','efe','erdem'];
ogrenci.forEach(function(){
    console.log("selam");//Console da dizinin boyutu kadar yani 4 defa selam yazar.
})
//Bu örnekte verildiği gibi forEach yapısı aslında dizi boyutu kadar devam eden bir fonksiyonu kontrol eden bir yapıdır.

ogrenci.forEach(function(kisi){
    console.log(kisi);// ögrenci dizisinde bulunan elemanları yazdırır.
})

//foreach yapısı ile fonkiyon çağırılması:
const ogrencilerim=(kisi,index)=>{
    console.log(`${index}-${kisi}`);
}
ogrenci.forEach(ogrencilerim);