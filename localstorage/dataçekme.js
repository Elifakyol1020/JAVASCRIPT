localStorage.setItem('name','Elif');//bunu kaydettiğimiz zaman name adlı bir proporty tutmuş olacaktır.
localStorage.setItem('age',20);//mesela burada numberda vermiş olsak hepsi string olarak tutulur.



//set ettiğimiz değerleri çağırma
let ad=localStorage.getItem('name');
console.log(ad);
let yaş=localStorage.getItem('age');
console.log(yaş);

//update işlemi
localStorage.setItem('name','Erdem');
localStorage.setItem('age',17);
//bu şekilde de update işlemi yaparız.
//bunun yanında başka yöntemde vardır.Bu;
localStorage.age=17;
ad=localStorage.getItem('name');
yaş=localStorage.getItem('age');
console.log(ad,yaş);