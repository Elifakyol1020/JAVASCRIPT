//OBJECT TANIMLAMA
let ogrenci={
    ad:'Elif',
    soyad:'Akyol',
    yas:20,
    mail:'eakyol1020@gmail.com',
    sinif:3,
    dersler:['mat','turkce','kimya']
};

console.log(ogrenci);//console da ogrenci objesinin bütün tanımlanan özellikleri yazar.
console.log(ogrenci.yas);//ogrenci objesinin yaşı yani 20 yazılıdır.

//objelerin tanımlanan özellikleri değiştirilebilir.Mesela;
ogrenci.yas=19;
console.log(ogrenci.yas);//19 yazılıdır.

//Bu şekilde de ogrenci objesinin özelliklerini kullanabiliriz.
console.log(ogrenci['yas']);

console.log(typeof ogrenci);//Ogrencinin tipi yani object yazılıdır.

//OBJEYE METOD EKLEME:
let ogrenci1={
    ad:'Efe',
    soyad:'Akyol',
    yas:12,
    mail:'efe@gmail.com',
    sinif:6,
    dersler:['mat','turkce','fizik'],
    login:function(){//Bu şekilde metod tanımlanır.
        console.log("ogrenci giris yapti...");
    },
    logout:function(){
        console.log("ogrenci cikis yapti...");
    },
    printlessons(){
        console.log(this);//Burada bulunan this obje içinde yapabileceklerimizi gösterir ve objedeki herşeyi yazdırır.
        console.log(this.dersler);//burada objede bulunan dersler dizisi console da yazılır.
        this.dersler.forEach(ders=>{
            console.log(ders);//burada foreach yapısı kullanarak dersler dizisinin her bir elemanı tek tek yazılır.
        })
    }
};
console.log(this);//Bu this bütün yapabileceklerimizi gösterir.
ogrenci1.printlessons();


//DİZİNİN İÇİNDE OBJE TANIMLAMA
const dersler1=[
    {isim:'mat',puan:90},
    {isim:'turkce',puan:80},
    {isim:'fizik',puan:70},
]
//FOREACH YAPISI İLE YAZDIRILMASI
dersler1.forEach(a=>{
    console.log(a.isim,a.puan);
})