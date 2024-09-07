//GETATTRİBUTE VE SETATTRİBUTE İŞLEMLERİ

const link=document.querySelector('a');
console.log(link.getAttribute('href'));//a tagında bulunan linki yazdırır.

//a tagında bulunan linki değiştirme
link.setAttribute('href','https://github.com/Elifakyol1020');

//a tagında bulunan texti değiştirme
link.textContent='Elif Akyol';

//html documentinde bulunan bir tagın class ismini değiştirme
const pdegeri=document.querySelector('p');
console.log(pdegeri.getAttribute('class'));
//setattribute kullanırken ilk başta değiştirmek istediğimizi sonrasında yeni değerini yazarız.
pdegeri.setAttribute('class','error');
console.log(pdegeri.getAttribute('class'));

//setattribute de ilk başta olmayan birşeyi yazarsak kendisi oluşturur.
pdegeri.setAttribute('style','color:blue;')