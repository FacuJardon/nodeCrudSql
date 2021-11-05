import express from 'express';
import { EmpleadoController } from '../controllers/controllers'
import { cacheMiddleware } from '../middlewares/middlewares'

let empleadoController = new EmpleadoController();
let router = express.Router();

/* GET home page. */
router.get('/empleados',cacheMiddleware, empleadoController.getEmpleados);

router.post('/empleados', empleadoController.createEmpleado);

router.delete('/empleados/:empleado', empleadoController.deleteEmpleado);

router.patch('/empleados/:empleado',empleadoController.updateEmpleado);

module.exports = router;