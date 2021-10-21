import { Model, DataTypes } from 'sequelize';
// import { DataBaseRepositorie } from '../repositories/repositories';
import DataBaseRepositorie from '../repositories/dataBase.repositorie';
let baseRepositorie = new DataBaseRepositorie();
let seq = baseRepositorie.sequelize;

class EmpleadoModel extends Model {}

EmpleadoModel.init({  
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        documento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sueldo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        proyecto: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        updatedAt: false,
        createdAt: false,
        timestamps: false,
        tableName: "Empleado",
        sequelize: seq,
        modelName: "Empleado" 
    }
);

export default EmpleadoModel;