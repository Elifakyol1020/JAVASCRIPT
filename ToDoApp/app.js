const form=document.querySelector('.add');
const ul=document.querySelector('.todos');
const search=document.querySelector('.search input');
const generateTemplete=todo=>{
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa-solid fa-trash-can delete"></i>
            </li>`;
    ul.innerHTML+=html;
}
form.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=form.add.value.trim().toLowerCase();//Başındaki ve sonundaki boşlukları siler.
    if(todo.length){
        generateTemplete(todo);
        form.reset();//bunu dediğimizde bir değer girdikten sonra input kısmı silinir.
    }
})

ul.addEventListener('click',e=>{ 
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

search.addEventListener('keyup',e=>{
    const term=search.value.trim();
    filterTodos(term);
})
const filterTodos= term=>{
    Array.from(ul.children).filter(todo=>{
      return !todo.textContent.toLowerCase().includes(term)})
    .forEach(todo=>{
        todo.classList.add('d-none');
    });
    Array.from(ul.children).filter(todo=>{
        return todo.textContent.toLowerCase().includes(term)})
      .forEach(todo=>{
          todo.classList.remove('d-none');
      });
}