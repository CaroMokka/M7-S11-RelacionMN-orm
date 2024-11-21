import { Estudiante } from "../models/Estudiante.entity.js"

const agregaEstudiante = (datosEstudiante) => {
    return new Promise( async (resolve , reject)=>{
        try{
            const estudiante = await Estudiante.create(datosEstudiante)
            resolve(estudiante)
        } catch(err){
            reject(err)
        }
    })
}

export { agregaEstudiante }