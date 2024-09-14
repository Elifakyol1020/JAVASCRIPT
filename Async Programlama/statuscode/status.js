const request=new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
    if(request.readyState===4&&request.status===200){//200 başarılır durum
     console.log(request.responseText);   
    }else if(request.readyState===4){
        console.log('başarılı cevap alamadık'); //aşağıda open() içerisindeki linkte hata varsa console da bu yazdırılır.  
    }
})
request.open('GET','https://jsonplaceholder.typicode.com/todos');//requesti açmış olduk
//şimdi göndermemiz lazım
request.send();