import Animal from './Animal.js'

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir(){
        console.log('Rugir')
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar(){
        console.log('Aullar')
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Gruñir(){
        console.log('Gruñir')
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear(){
        console.log('Sisear')
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar(){
        console.log('Chillar')
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }