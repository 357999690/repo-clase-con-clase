class Edificio{
    pisos : Piso[]
    constructor(pisos:Piso[]){
        this.pisos = pisos

    }
    addDepartamentoToPiso(nombreDePiso:string,departamento:Departamento){
        const pisoEncontrado = this.pisos.find(p=>p.nombre==nombreDePiso)
        return pisoEncontrado.pushDepartamento(departamento)
    }
    getDepartamentoByPiso(nombreDePiso:string): Departamento[]{
        const pisoEncontrado = this.pisos.find(p=>p.nombre==nombreDePiso)
        return pisoEncontrado.getDepartamentos();

    }

}
class Piso{
    nombre: string
    dptos : Departamento[]
    constructor(nombre:string){
        this.nombre = nombre
        this.dptos = []
    }
    pushDepartamento(dpto:Departamento){
        this.dptos.push()

    }
    getDepartamentos():Departamento[]{
        return this.dptos
    }
}
class Departamento{
    nombre : string
    constructor(nombre:string){
        this.nombre= nombre

    }
    getName(){
        return this.nombre

    }
}
