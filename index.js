import {conexion} from "./conexion.js"
// import { Curso } from "./models/Curso.entity.js"
// import { Estudiante } from "./models/Estudiante.entity.js"
import { agregarCurso, asignarEstudiante, consultarCurso } from "./controllers/curso.controller.js"
import { agregaEstudiante } from "./controllers/estudiante.controller.js"

( async ()=>{
    try{
        await conexion.sync({ alter: true })
        // const listadoCurso = await Curso.findAll()
        // console.log(listadoCurso)
        // const curso = await agregarCurso({ codigo: "0089REACT", nombre: "Frontend React 0089" })
        // console.log(curso)
    
        // const estudiante = await agregaEstudiante({ nombre: "Josefa", apellido: "Pérez" })
        // console.log(estudiante)

        // await asignarEstudiante(1,1)
        // await asignarEstudiante(1,6)

        // await asignarEstudiante(2,1)

        // await asignarEstudiante(3,2)
        // await asignarEstudiante(3,4)
        // await asignarEstudiante(3,3)

        // const estudiante1 = await Estudiante.create({ nombre: "Carolina", apellido: "Araya" })
        // const estudiante2 = await Estudiante.create({ nombre: "Carla", apellido: "Toro" })
        // const estudiante3 = await Estudiante.create({ nombre: "José", apellido: "Morales" })
        // const estudiante4 = await Estudiante.create({ nombre: "Tania", apellido: "Mejías" })
        // const estudiante5 = await Estudiante.create({ nombre: "Francisca", apellido: "Hormazabal" })

        const consulta = await consultarCurso(1)
        console.log(JSON.parse(JSON.stringify(consulta)))
        console.log("Registros exitosos")
    } catch(err){
        console.log(err.message || "Error interno")
    }
})()