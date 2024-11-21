import { Curso } from "../models/Curso.entity.js"
import { Estudiante } from "../models/Estudiante.entity.js"

const agregarCurso = (datosCurso) => {
    return new Promise( async (resolve, reject)=>{
        try{
            const registroCurso = Curso.create(datosCurso)
            resolve(registroCurso)
        } catch(err){
            reject(err)
        }
    })
}

const asignarEstudiante = (idCurso, idEstudiante) => {
    return new Promise( async (resolve, reject)=>{
        const curso = await Curso.findByPk(idCurso)
        if(!curso){
            return reject("El curso no existe en los registros")
        }

        const estudiante = await Estudiante.findByPk(idEstudiante)
        if(!estudiante){
            return reject("El estudiante no existe en los registros")
        }

        const asignacion = await curso.addEstudiante(estudiante)
        console.log(asignacion)
        resolve("Estudiante asignado con éxito")
    })
}

const consultarCurso = (idCurso) => {
    return new Promise( async (resolve , reject)=>{
        try{
            const curso =  await Curso.findByPk(idCurso,{
                include: {
                    model: Estudiante,
                    as: "estudiantes"
                }
            })
            resolve(curso)
        } catch(err){
            reject(err)
        }
    })
}

export { agregarCurso, asignarEstudiante, consultarCurso }