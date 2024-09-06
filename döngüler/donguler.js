//FOR KULLANIMI
for(let i=0;i<10;i++){
    console.log(i);//0 dan başlayıp 10 a kadar sayıları yazdırır.
}
const adSoyad=['Elif','efe','eren'];
for(let e=0;e<adSoyad.length;e++){
    console.log(adSoyad[e]);//adSoyad dizisinde bulunan elemanları yazdırır.
    let html=`<div>${adSoyad[e]}</div>`;//div içine bütün elemanları yazdırır.
    console.log(html);
}


//WHİLE KULLANIMI
let i=0;
while(i<10){
    console.log(i);//0 dan 10 a kadar sayıları yazdırır.
    i++;//For döngüsünden farkı döngü içinde kontrol değerini değiştirmesidir.
}


//DO WHİLE KULLANIMI
let c=0;
do{
    console.log(c);//0 dan 5 e kadar olan sayıları yazdırır.
    c++;
}while(c<5);


//İF ELSE KULLANIMI
const yas=19;
if(yas>17){//kontrol etme işlemi gerçekleşir. eğer doğru ise if içine girer.
    //Doğru değilse else içine girer.
    console.log("17 yasindan buyuktur.");
}
else{
    console.log("17 yasindan kucuktur.");
}


//VE VEYA KULLANIMI
//ve:&& iki şartta doğru olmalıdır.
//veya:|| iki şarttan birisinin doğru olması yeterlidir.


//BREAK CONTİNUE KULLANIMI
//Break komutu: Break komutu kullanıldığında döngü kırılır. 
//Continue komutu: Continue komutu geldiğinde döngüyü keser ve koşulu aynı şekilde tekrarlayıp döngünün başına döner.


//SWİTCH-CASE KULLANIMI
let not='AA';
switch(not){
    case 'AA':
        console.log("1");
        break;
    case "BA":
        console.log("2");
        break;
    case 'BC':
        console.log("3");
        break;
    case 'CC':
        console.log("4");
        break;
    default:
        console.log("5");
        break;
}
//Yukarıda verilen örnekte görüldüğü gibi caseler ile karşılaştırılır doğru olanın altında bulunan kod satırları çalışır.
//Bu örnekte console kısmında 1 yazılı bulunur.

//GLOBAL DEĞİŞKEN ve LOCAL DEĞİŞKEN
//Global değişken: Döngü veya koşullu ifadeler dışında tanımlanan değişkenlerdir.
//Local değişken: Döngü veya koşullu ifadeler içinde tanımlanan değişkenlerdir.
//ÖNEMLİ!!!! Döngü içinde bulunan local değişkeni var şeklinde tanımlarsak döngü dışında da kullanabiliriz. let şeklinde tanımlarsak kullanamayız.

