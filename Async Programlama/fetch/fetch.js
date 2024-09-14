// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//PROMİSE İLE KULLANIMI AŞAĞIDAKİ GİBİ
// const getTodos=(resource)=>{

//     return new Promise((resolve,reject)=>{

//     const request=new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState===4&&request.status===200){//200 başarılı durum
//             console.log(request.responseText);   
//            const data=JSON.parse(request.responseText);//Jsona parse edip dönüştürme işlemi
//            resolve(data);
//            callback(undefined,data);//burada çağırdığımızda arrow function yazan kısım çalışır.
//         }else if(request.readyState===4){//parametreler error ve data .bu çağırımda success olduğu için error kısmı undefined tanımlanır.
//             console.log('başarılı cevap alamadık'); //aşağıda open() içerisindeki linkte hata varsa console da bu yazdırılır.  
//            callback('Başarılı cevap alamadık',undefined);//Bu çağırımda error bulunduğu için bir hata meajı ve hata verdiği için undefined bir data tanımlanır.
//             reject('Başarılı cevap alamadık');
//         }
//     })
//     request.open('GET',resource);//requesti açmış olduk
//     şimdi göndermemiz lazım
//     request.send();
//     })
// }

// getTodos('example/elif.json').then(data=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//FETCH İLE KULLANIMI
fetch('elif.json').then(Response=>{
    return Response.json();//promise ile döndürülen yer
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})