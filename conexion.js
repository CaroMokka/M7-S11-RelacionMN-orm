import { Sequelize } from 'sequelize';

const conexion = new Sequelize({
    host: "localhost",
    port: 5432,
    database: "cursos",
    user: "postgres",
    password: "postgres",
    dialect: "postgres"
})

export { conexion }