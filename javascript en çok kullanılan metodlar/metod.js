//1-FİLTER METODU
const points=[70,75,25,35,10,80,27];
const studentspass=points.filter(point=>{
    //return true;//hiç birşey değişmez.
    //return false;//array sıfırlanır.
    return point>50;//50 üstü olanlar dizide kalır.50 den küçükler diziden silinir.

})
console.log(studentspass);

//ÖRNEK
const students=[
    {name:'can', passed:true},
    {name:'tuba',passed:false},
    {name:'elif',passed:false},
    {name:'osman',passed:true},
];//datalar

//students dizisinde dersi geçenleri listeleme
const passingStudents=students.filter(student=>{
    return student.passed;//geçme şartı
    //return !student.passed;geçmeyen öğrenciler için
})
console.log(passingStudents);

//2-MAP METODU
//Angularda çok kullanılır.

const newpoint=points.map(point=>{
    return point+10;//Bu sayede dizide bulunan her bir elemanın yeni değeri 10 fazlası olur.
})
console.log(newpoint);
//ÖRNEK
const students1=[
    {name:'can', point:40},
    {name:'tuba',point:60},
    {name:'elif',point:30},
    {name:'osman',point:100},
];//datalar

const newStudentsPoint=students1.map(student=>{
    if(student.point<50){
        //return {name: student.name,point:student.point+15};//obje şeklinde yazılması gerekmektedir.
        student.point+=15;
        return student;
    }
    else{
        //return {name: student.name,point:student.point};
        return student;
    }
})
console.log(newStudentsPoint);


//REDUCE METODU
//datayı modifiye eder.

const result=points.reduce((value,point)=>{
    if(point>50){
        value++;
    }
    return value;
},0/*ilk başta value değeri sıfır oldu*/)
console.log(result);//3 değerini yazdırır.

//FİND METODU

const highpoint=points.find(point=>{
    return point>70;//70 den büyük olanu bulma onu highpointe atma ve durdurma işlemş yapar.
})
console.log(highpoint);

//PUSH VE POP METODU

points.push(90);//points dizisinin sonuna yeni bir eleman ekleriz.
points.pop();//pop en son elemanı çıkarır.
console.log(points);

//FİNDİNDEX METODU,Arraydeki bir elemanın değerini güncelleme

const arrayIndex=points.findIndex(point=>{
    return point==35;
})
console.log(arrayIndex);
points[arrayIndex]=45;//aranan elemanın indexindeki sayıyı değiştirmiş oluruz.

//örnek

const objectIndex=students1.findIndex(student=>{
    return student.name=='osman';
})
students1[objectIndex].name='eren';
console.log(students1);


//REVERSE VE SORT METODU

//SORT:Sıralamak için kullanılır.

const name1=['can','tuba','elif','hakan','osman'];
name1.sort();
console.log(name1);//alfabetik sıraya göre sıralama işlemini gerçekleştirir.

//Reverse metodu ters çevirme metodudur.
name1.reverse();
console.log(name1);//alfabetik sıranın tersine göre sıralama işlemi yapar.

//points dizisini sıralayalım
points.sort();//sayıları ilk sayı karakterine göre sıralar.
//students1 objesindeki puanları sıralayalım.
students1.sort((a,b)=>{
    if(a.point>b.point){
        return -1;//büyükse -1 döner ve değişiklik yapılmaz.
    }else if(a.point<b.point){
        return 1;//küçükse 1 döner ve sayıların yeri değiştirilir.
    }
    else if(a.point==b.point){
        return 0;
    }
})
console.log(students1);
//yukarıdaki kodun daha kısa yazılmış hali
students1.sort((a,b)=>b.point -a.point);

//points dizisini de aynı şekilde sıralayalım
points.sort((a,b)=>b -a);
console.log(points);