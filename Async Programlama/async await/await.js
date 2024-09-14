const getTodos=async()=>{//async bir fonksiyon haline getirdik.!!Promise şekilde döndürür.
    let response= await fetch('elif.json');//fonksiyonda async kullandığımız için await kullanmamız gerekmektedir.
    if(response.status!==200){
        throw new Error('doğru endpointe istek atmadınız');//hata mesajı fırlatma
    }
    const data=await response.json();
    return data;
}
getTodos().then((response)=>{
    console.log(response);
}).catch((err)=>{
    console.log(err);
});