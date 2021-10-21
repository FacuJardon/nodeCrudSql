import { EmpleadoService } from '../services/services'
import { EmpleadoModel } from '../models/models'

let empleadoService = new EmpleadoService();

class EmpleadoController {
    async getEmpleados() {
        return await empleadoService.getEmpleados();
    }
    async createEmpleado(body) {
        try {
            let empleado = EmpleadoModel.build(body);
            return await empleadoService.createEmpleado(empleado);
        } catch(err) {
            return {"error": err};
        }
    }
    async deleteEmpleado(body) {
        try {
            if (body.id == undefined)
                return {"error": "Ingrese el id de empleado."};

            return await empleadoService.deleteEmpleado(body.id);
        } catch(err) {
            return {"error": err};
        }
    }
    async updateEmpleado(body) {
        try {
            if (body.id == undefined)
                return {"error": "Ingrese el id del empleado a modificar."};

            return await empleadoService.updateEmpleado(body);
        } catch(err) {
            return {"error": err};
        }
    }
}

export default EmpleadoController;