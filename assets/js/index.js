import { Leon, Lobo, Oso, Serpiente, Aguila } from '../js/clases/Animales.js'


const animalesTabla = []

const leon1 = new Leon('Leon', 5, 'img/leon.png', 'Gruñir', 'Russssgir')




let callAPi = (() => {
    const url_personajes = 'animales.json';
    try {
        const getData = async () => {
            const res = await fetch(url_personajes);
            const data = await res.json();
            return data
        }
        return { getData }
    } catch (error) {
        console.log(error)
    }
})()
const { animales } = await callAPi.getData()

// Manipulacion del formulario a la hora de hacer click en el boton

document.querySelector('#btnRegistrar').addEventListener('click', () => {
    const nombre = document.querySelector('#animal').value;
    const edad = document.querySelector('#edad').value;
    const comentarios = document.querySelector('#comentarios').value;
    const previewImg = document.querySelector('#preview');

    const imgSrc = previewImg.style.backgroundImage.slice(5, -2);
    let sonido = animales.find(a => a.name === nombre).sonido
    if (nombre !== '' && edad !== '' && comentarios !== '' && imgSrc !== '') {
        if (nombre === 'Leon') {
            animalesTabla.push(new Leon(nombre, edad, imgSrc, comentarios, `/assets/sounds/${sonido}`))
            createTable(animalesTabla[animalesTabla.length - 1],animalesTabla.length - 1)
            cleanForm()
        } else if (nombre === 'Lobo') {
            animalesTabla.push(new Lobo(nombre, edad, imgSrc, comentarios, `/assets/sounds/${sonido}`))
            createTable(animalesTabla[animalesTabla.length - 1],animalesTabla.length - 1)
            cleanForm()
        } else if (nombre === 'Oso') {
            animalesTabla.push(new Oso(nombre, edad, imgSrc, comentarios, `/assets/sounds/${sonido}`))
            createTable(animalesTabla[animalesTabla.length - 1],animalesTabla.length - 1)
            cleanForm()
        } else if (nombre === 'Serpiente') {
            animalesTabla.push(new Serpiente(nombre, edad, imgSrc, comentarios, `/assets/sounds/${sonido}`))
            createTable(animalesTabla[animalesTabla.length - 1],animalesTabla.length - 1)
            cleanForm()
        } else if (nombre === 'Aguila') {
            animalesTabla.push(new Aguila(nombre, edad, imgSrc, comentarios, `/assets/sounds/${sonido}`))
            createTable(animalesTabla[animalesTabla.length - 1],animalesTabla.length - 1)
            cleanForm()
        }
    } else {
        alert('Todos los campos son obligatorios')
    }
    console.log(animalesTabla)
})


// Evento que cambia la Preview de la imagen
document.querySelector('#animal').addEventListener('change', async (e) => {
    const nombre = e.target.value;
    const previewImg = document.querySelector('#preview');
    let img = animales.find(a => a.name === nombre).imagen
    previewImg.style.backgroundImage = `url(/assets/imgs/${img})`
})



function cleanForm() {
    document.querySelector('#animal').value = '';
    document.querySelector('#edad').value = '';
    document.querySelector('#comentarios').value = '';
    document.querySelector('#preview').style.backgroundImage = 'url(/assets/imgs/lion.svg)';
}

function createTable(animal, id) {
    console.log(animal)
    document.querySelector('#Animales').innerHTML += `
    <div class="card mx-2 my-2" style="width: 18rem;">
    <img  src="${animal.img}"  onclick='modal(${id})' class="card-img-top" style="height: 10rem;" alt="...">
    <div class="card-body">
        <h5 class="card-title">${animal.nombre}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Edad : ${animal.edad}</li>
        <button onclick='reproducirSonido(${id})' type="button" class="btn btn-secondary">
        <i class="fa-solid fa-play"></i>
        <audio src="${animal.sonido}"></audio>
    </button>
    </ul>
    </div>
    `;
}

window.reproducirSonido = (id) => {
    document.querySelector(`audio[src="${animalesTabla[id].sonido}"]`).play()
}

window.modal = (id) => {
    $('#exampleModal').modal('show')
    document.querySelector('.modal-body').innerHTML = ``
    document.querySelector('.modal-body').innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
    <img  src="${animalesTabla[id].img}"  class="card-img-top" style="height: 10rem;" alt="...">
    <div class="card-body">
        <h5 class="card-title">${animalesTabla[id].nombre}</h5>
        <p class="card-text">Comentarios : ${animalesTabla[id].comentarios}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Edad : ${animalesTabla[id].edad}</li>
        <button onclick='reproducirSonido(${id})' type="button" class="btn btn-secondary">
        <i class="fa-solid fa-play"></i>
        <audio src="${animalesTabla[id].sonido}"></audio>
    </button>
    </ul>
    </div>
    `;
}