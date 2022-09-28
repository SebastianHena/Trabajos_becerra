let btnCarga = document.getElementById('cbo-carga');

btnCarga.addEventListener('click', (e) => {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + getAleatorio(1,50);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let tr = document.getElementById('poke');
        let tr2 = document.getElementById('poke2');

        tr.innerHTML +=`<td><img src="${data.sprites.front_default}"><br>${data.name}</td>`
        
        tr2.innerHTML +=`<td><img src="${data.sprites.back_default}"><br>${data.name}</td>`
    })
    .catch(error => console.log(error))
})

function getAleatorio(min, max){
    return Math.round(Math.random() * (max - min) + min);
}