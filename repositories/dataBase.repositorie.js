import { database } from '../config';
import { Sequelize } from 'sequelize';

class DataBaseRepositorie {

    constructor() {
        this.sequelize = new Sequelize(
            database.database,
            database.username,
            database.password,
            {
                host: database.host,
                dialect: database.dialect
            }
        );
        this.repo = this.sequelize.sync({force: false})
        .then(() => {console.log("Conexion a la base exitosa.")})
        .catch( error => {console.log("Se produjo un error al conectarse a la base de datos: ", error)});
    }      
}

export default DataBaseRepositorie;