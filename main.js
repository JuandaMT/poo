class Persona{
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
        console.log(` Nombre: ${this.nombre} Edad:${this.edad}  Género:${this.genero}`)
    }
}
let Persona1 = new Persona("Juanda", 23, "Hombre")
Persona1.obtDetalles()

// 2 Crea la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(this.nombre)
    }
}
let Estudiante1 = new Estudiante("Juanda", 23, "Hombre", "segundo", "A")
Estudiante1.registrar()

// 3 Crea la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class Profesor extends Persona{
    constructor(nombre, edad, genero, curso, grupo, asignatura, nivel){
        super(nombre, edad, genero, curso, grupo)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(this.nivel)
    }
}
let Profesor1 = new Profesor("Juanda", 23, "Hombre", "segundo", "A", "Mates", "3")
Profesor1.registrar()