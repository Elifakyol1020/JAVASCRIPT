const startdate=new Date('24/05/2024 18.25.25');
console.log(startdate);//tarihi aynı şekilde yazdırır.
const now=new Date();
const diff= now.getTime()-startdate.getTime();//iki tarih arasındaki milisaniye değerini verir.
console.log(diff);

const mins=Math.round(diff/1000/60);//dakikayı buluruz.
console.log(mins);
const hours=Math.round(mins/60);//saati buluruz.
console.log(hours);
const gün=Math.round(hours/24);//günü buluruz.
console.log(gün);

