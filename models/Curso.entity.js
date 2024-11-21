import { conexion } from "../conexion.js"
import { DataTypes } from "sequelize"
import { Estudiante } from "./Estudiante.entity.js"

const Curso = conexion.define("Curso", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: "cursos"
})


Estudiante.belongsToMany(Curso, {
    through: "cursos_estudiantes",
    as: "cursos",
    foreignKey: "estudiante_id"
})
Curso.belongsToMany(Estudiante, {
    through: "cursos_estudiantes",
    as: "estudiantes",
    foreignKey: "curso_id"
})

export { Curso }