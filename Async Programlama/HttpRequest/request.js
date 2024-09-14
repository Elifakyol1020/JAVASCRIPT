//XML HTTPREQUEST
//1 de open() çalışır.
//2 de send() çalışır.
//3 gönderilme aşamasıdır.
//4 de hazırdır.
const request=new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
    if(request.readyState===4){
     console.log(request.responseText);   
    }
})
request.open('GET','https://jsonplaceholder.typicode.com/todos');//requesti açmış olduk
//şimdi göndermemiz lazım
request.send();
