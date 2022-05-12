import { Leon, Lobo, Oso, Serpiente, Aguila } from '../js/clases/Animales.js'


const animales = []

const leon1 = new Leon('Leon', 5, 'img/leon.png', 'Gruñir', 'Russssgir')




let callAPi = ( () =>{
    const url_personajes = 'animales.json';
    const getData = async () => {
        const res = await fetch(url_personajes);
        const data = await res.json();
        return data
    } 
    return {getData}
} )() 


document.querySelector('#btnRegistrar').addEventListener('click', async () => {
    const nombre = document.querySelector('#animal').value;
    const edad = document.querySelector('#edad').value;
    const comentarios = document.querySelector('#comentarios').value;
    // console.log(templateImg)
    // previewImg.innerHTML = templateImg
    //previewImg.style.backgroundImage = animales.find( a => a.nombre === nombre ).imagen
})

document.querySelector('#animal').addEventListener('change', async (e) => {
    const nombre = e.target.value;
    const previewImg = document.querySelector('#preview');
    const { animales } =  await callAPi.getData()
    let img = animales.find( a => a.name === nombre).imagen
    previewImg.style.backgroundImage = `url(/assets/imgs/${img})`


})