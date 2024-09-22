//Obje oluşturalım
const userOne={
    username:'Elif',
    email:'eakyol1020@gmail.com',
    login(){
        console.log('elif giris yapti');
    },
    logout(){
        console.log('elif cikis yapti');
    }, 
};
console.log(userOne.email,userOne.username);//mail adresini ve adını yazdırır.
userOne.logout();//obje içinde bulunan logout fonkiyonunu çalıştırır.
const userTwo={
    username:'Eren',
    email:'eren0921@gmail.com',
    login(){
        console.log('eren giris yapti');
    },
    logout(){
        console.log('eren cikis yapti');
    }, 
};//bu şekilde tek tek yazmak yerine class yapısını kullanalabiliriz.

//CLASS KULLANIMI
class user{
    constructor(gmail,username){//parantez içinde parametreler bulunmaktadır.
        this.gmail=gmail;
        this.username=username;

    }
    login(){
        return this.username+' giris yapti';
    }
}
const user1=new user('eakyol1020@gmail.com','Elif');
const user2=new user('eren0921@gmail.com','Eren');
console.log(user1);//oluşturduğumuz nesnelerin içindeki parametreler obje şeklinde yazdırılır.
console.log(user2);
console.log(user1.login());