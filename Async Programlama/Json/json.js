const getTodos=(callback)=>{
    const request=new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4&&request.status===200){//200 başarılı durum
           // console.log(request.responseText);   
           const data=JSON.parse(request.responseText);//Jsona parse edip dönüştürme işlemi
           callback(undefined,data);//burada çağırdığımızda arrow function yazan kısım çalışır.
        }else if(request.readyState===4){//parametreler error ve data .bu çağırımda success olduğu için error kısmı undefined tanımlanır.
           // console.log('başarılı cevap alamadık'); //aşağıda open() içerisindeki linkte hata varsa console da bu yazdırılır.  
           callback('Başarılı cevap alamadık',undefined);//Bu çağırımda error bulunduğu için bir hata meajı ve hata verdiği için undefined bir data tanımlanır.
        }
    })
    request.open('GET','https://jsonplaceholder.typicode.com/todos');//requesti açmış olduk
    //şimdi göndermemiz lazım
    request.send();
}

getTodos((err,data)=>{//arrow function
    //console.log(err,data);
    if(err){
        console.log(err);//hata varsa hata mesajını yazdırır.
    }
    else{
        console.log(data);//hata yoksa dataları yazdırır.
    }
});