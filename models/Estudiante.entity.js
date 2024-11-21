import { conexion } from "../conexion.js"
import { DataTypes } from "sequelize"


const Estudiante = conexion.define("Estudiante",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: "estudiantes"
})



export { Estudiante }