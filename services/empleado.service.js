import { EmpleadoRepositorie } from '../repositories/repositories'

let empleadoRepositorie = new EmpleadoRepositorie();

class EmpleadoService {
    async getEmpleados()    {
        return await empleadoRepositorie.getAllEmpleados();
    }
    async createEmpleado(empleado)    {
        return await empleadoRepositorie.createEmpleado(empleado);
    }
    async deleteEmpleado(idEmpleado)    {
        return await empleadoRepositorie.deleteEmpleado(idEmpleado);
    }
    async updateEmpleado(empleado)    {
        return await empleadoRepositorie.updateEmpleado(empleado);
    }
}

export default EmpleadoService;