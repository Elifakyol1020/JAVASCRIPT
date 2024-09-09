const form=document.querySelector('.signUpForm');
const message=document.querySelector('.message');
const usernamePattern=/^[a-z]{6,10}$/;
form.addEventListener('submit',e=>{
    e.preventDefault();
    const username=form.username.value;
    if(usernamePattern.test(username)){
        message.textContent='Başarılı';
    }
    else{
        message.textContent='Lütfen hepsini küçük harf ve 6 ile 12 karakter arasında giriniz';
    }
})


//KEYUP EVENTİ EKLEME
//Yazdığımız text kısmını keyup eventi tek tek kontrol etmeyi sağlar. 
form.username.addEventListener('keyup',e=>{
    console.log(e.target.value);
    if(usernamePattern.test(e.target.value)){
        //console.log("başarılı");
        form.username.setAttribute('class','success');
    }
    else{
        //console.log("başarısız");
        form.username.setAttribute('class','error');
    }
})