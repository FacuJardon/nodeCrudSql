import { EmpleadoService } from '../services/services'
import { EmpleadoModel } from '../models/models'

let empleadoService = new EmpleadoService();

class EmpleadoController {
    async getEmpleados(req,res) {

        const result = await empleadoService.getEmpleados();
        return res.json(result);
    }
    async createEmpleado(req,res) {
        try {
            let empleado = EmpleadoModel.build(req.body);
            const empleadoCreado = await empleadoService.createEmpleado(empleado);
            return res.json(empleadoCreado);
        } catch(err) {
            return res.json({"error": err});
        }
    }
    async deleteEmpleado(req,res) {
        try {
            const empleadoId = req.params.empleado;

            if (!empleadoId)
                return res.json({"error": "Ingrese el id de empleado."});

            const countEmpleadoDeleted = await empleadoService.deleteEmpleado(empleadoId);
            return res.json(countEmpleadoDeleted > 0 ? true : false );
        } catch(err) {
            return res.json({"error": err});
        }
    }
    async updateEmpleado(req,res) {
        try {
            const empleadoId = req.params.empleado;
            if (!empleadoId)
                return res.json({"error": "Ingrese el id del empleado a modificar."});

            const empleado = { id: empleadoId, ...req.body }
            
            const empleadoUpdated = await empleadoService.updateEmpleado(empleado);
            return res.json(empleadoUpdated);
            
        } catch(err) {
            return res.json({"error": err});
        }
    }
}

export default EmpleadoController;