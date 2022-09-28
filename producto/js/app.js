let form = document.getElementById('form-product');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let descripcion = document.getElementById('Descripcion');
    let cantidad = document.getElementById('cantidad');
    let precio = document.getElementById('precio');
    let lista = document.getElementById('list-product');

    let div = document.createElement('div')
    div.classList.add('row')
    div.classList.add('mb-1')
    div.innerHTML = `
    <div class="card text-center col-md-11">
        <div class="card-body">
            <b>Descripcion:</b> ${descripcion.value}
            <b>Cantidad:</b> ${cantidad.value}
            <b>Precio:</b> ${precio.value}
        </div>
    </div>
    <button
        class="btn btn-danger text-center col-md-1"
        name="delete">
        <i class="fa-solid fa-trash-can"></i>
    </button>
    `;
    if(descripcion.value !=""&& precio.value!=""&& cantidad.value!="")
    lista.appendChild(div);
    mensaje('El producto a sido agregado','success');
    form.reset();

})
let borrar = document.querySelector('#list-product');
borrar.addEventListener('click', function (e) {
    if (e.target.name === "delete") {
        e.target.parentElement.remove();
        mensaje("Ha eliminado el producto","danger")
        

    }
    
})

const mensaje = function(msj,color){
    container = document.querySelector('.container');
    app = document.querySelector('#app');
      div = document.createElement('div');
      

      div.innerHTML = `
      <div class="alert alert-${color} mt-5"> ${msj}</div>
`
      
      container.insertBefore(div,app);
      
      setTimeout(()=>{
        div.remove();
      }, 300);
      
      
}

