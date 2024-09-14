console.log(1);
console.log(2);

setTimeout(()=>{
    console.log('Elif Akyol');
},2000);//2 saniye sonra çalışır.
console.log(3);//2 saniye beklemeden console a bu değerler yazdırılır.
//Sonrasında setTimeOut içerisindeki değer console a yazdırılır. Buna asynchronous programlama denir.
console.log(4);