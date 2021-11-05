import { EmpleadoModel } from '../models/models'

class EmpleadoRepositorie {

    async getAllEmpleados() {
        try {
        let result = await EmpleadoModel.findAll();
        
        return result;
        }catch(err) { return {'error': "'"+ err +"'"};}

    }
    async createEmpleado(empleado) {
        try {
            let result = await empleado.save();
            
            return result;
        }catch(err) { return {'error': "'"+ err +"'"};}

    }
    async deleteEmpleado(idEmpleado) {
        try {
            let result = await EmpleadoModel.destroy({where: {id: idEmpleado}});
            
            return result;
        }catch(err) { 
            return {'error': "'"+ err +"'"};
        
        }

    }
    async updateEmpleado(empleado) {
        let idEmpleado = empleado.id;
        let update = empleado;
        delete update.id;

        try {
            let result = await EmpleadoModel.update(update, {where: {id: idEmpleado}});
            return result;
        }catch(err) { return {'error': "'"+ err +"'"};}
    }
}

export default EmpleadoRepositorie;