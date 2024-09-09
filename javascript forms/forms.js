const form=document.querySelector('.signUpForm');
const username=document.querySelector('#username');

form.addEventListener('submit',e=>{
    e.preventDefault();//Bu metod sayesinde sayfa yenilenmez aynı şekilde kalır.
   // console.log(username.value);//kullanıcı adı olan kısma girdiğimiz değeri yazdırır.
    console.log(form.username.value);// Bu da aynı şekilde kullanıcı adı olan kısma girdiğimiz değeri yazdırır.
})
//FORMLARDA REGEX
//^: textin başını kontrol etme
//$: textin sonunu kontrol etme
// Örneğin ^elif$ dersek sadece elif yazmamız gerekmektedir.
// [a-z]:text a ile z arasındaki karakterlerden oluşmalıdır.
// [a-zA-Z]:büyük harf veya küçük harf olabilir.
// [a-zA-Z]{5,10}:text 5 ve 10 karakter arasında olmalıdır.
// [a-zA-Z0-9]: 0 ve 9 arasındaki rakamları içerebilir.
// ^.{5,10}$: tün karakterleri içerebilir. Örneğin @ gibi.

//REGEX ÖRNEĞİ
const usernamee='elifakyol';
const pattern=/^[a-z]{6,10}$/;

let sonuc=pattern.test(usernamee);//doğru ise true yanlış ise false değeri döner.
console.log(sonuc);
//if koşulu koyalım
if(sonuc){
    console.log("Başarılı");
}
else{
    console.log("Başarısız");
}
//ikinci yol olarak search() metodunu kullanabiliriz.
let sonuc1=usernamee.search(pattern);
console.log(sonuc1);//eğer doğru ise 0 veya 0 dan daha büyük değerler yazdırır. Yanlış ise -1 değerini yazdırır.