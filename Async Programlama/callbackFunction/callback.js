const getTodos=(callback)=>{
    const request=new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4&&request.status===200){//200 başarılır durum
           // console.log(request.responseText);   
           callback(undefined,request.responseText);//burada çağırdığımızda arrow function yazan kısım çalışır.
        }else if(request.readyState===4){//parametreler error ve data .bu çağırımda success olduğu için error kısmı undefined tanımlanır.
           // console.log('başarılı cevap alamadık'); //aşağıda open() içerisindeki linkte hata varsa console da bu yazdırılır.  
           callback('Başarılı cevap alamadık',undefined);//Bu çağırımda error bulunduğu için bir hata meajı ve hata verdiği için undefined bir data tanımlanır.
        }
    })
    request.open('GET','https://jsonplaceholder.typicode.com/todos');//requesti açmış olduk
    //şimdi göndermemiz lazım
    request.send();
}
//console.log(1);
//console.log(2);
getTodos((err,data)=>{//arrow function
    //console.log(err,data);
    if(err){
        console.log(err);//hata varsa hata mesajını yazdırır.
    }
    else{
        console.log(data);//hata yoksa dataları yazdırır.
    }
});
//console.log(3);
//console.log(4);
//çıktıda ilk başta 1 2 3 4 yazdırılır çünkü async programlamanın çalışma mantığı budur.
//sonra getTodos metodu çalışır.