//PARENTELEMENTS VE CHİLDELEMENTS
const section=document.querySelector('section');
console.log(section.children);//section elementinin altında olan taglar yazdırılır.
console.log(Array.from(section.children));//Array e çevirme işlemi

Array.from(section.children).forEach(child=>{//forEach kullanarak section altında bulunan elementere class ismi eklemiş olduk.
    child.classList.add('section-element');
})

const baslik=document.querySelector('h2');
console.log(baslik.parentElement);//baslik elementinin parent ı yazdırılır.

console.log(baslik.nextElementSibling);//baslik elementinden sonra gelen kardeş elementini yazdırır.
console.log(baslik.previousElementSibling);//baslik elementinden önce olan kardeş elementi yazdırır.

console.log(baslik.nextElementSibling.parentElement.children);//baslik elementinden sonra gelen kardeşinin ebeveyninin çocuklarını gösterir.



