const now=new Date();
console.log(now);//şimdiki zamanı yazdırır.

console.log('Year:',now.getFullYear());//bulunduğumuz yılı yazdırır.
console.log('Month:',now.getMonth());//bulunduğumuz ayı yazdırır.
console.log('Date:',now.getDate());//bulunduğumuz zaamnı yazdırır.
console.log('Day:',now.getDay());//bulunduğumuz günü yazdırır.
console.log('Hours:',now.getHours());//bulunduğumuz saati yazdırır.
console.log('Minutes:',now.getMinutes());//bulunduğumuz dakikayı yazdırır.
console.log('Seconds:',now.getSeconds());//bulunduğumuz saniyeyi yazdırır.

console.log('timestamp',now.getTime())//1 Ocak 1970 den bugüne kadar geçmiş milisaniyeyi gösterir

console.log(now.toDateString());//gün ay yıl şeklinde yazdırır.
console.log(now.toTimeString);//saati ve saniyeyi gösterir.
console.log(now.toLocaleDateString);//bulunduğumuz ayı günü ve yılı bunun yanında saat ve saniyeyi de gösterir.
