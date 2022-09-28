let boton = document.getElementById("btn-moneda");
boton.addEventListener("click", (e) => {
  let url = "https://mindicador.cl/api";


  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let indi = document.getElementById("indicador");

      indi.innerHTML = `El valor del ${data.bitcoin.codigo} es ${data.bitcoin.valor} en ${data.bitcoin.unidad_medida}`;
    })
    .catch((error) => error)
});
