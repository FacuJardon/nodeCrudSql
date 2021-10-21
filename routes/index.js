import express from 'express';
import { EmpleadoController } from '../controllers/controllers'

let empleadoController = new EmpleadoController();
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res) {
  let result = await empleadoController.getEmpleados();
  res.json(result);
});

router.post('/createEmpleado', async function(req, res) {
  let result = await empleadoController.createEmpleado(req.body);
  res.json(result);
});

router.delete('/deleteEmpleado', async function(req, res) {
  let result = await empleadoController.deleteEmpleado(req.body);
  res.json(result);
});

router.patch('/updateEmpleado', async function(req, res) {
  let result = await empleadoController.updateEmpleado(req.body);
  res.json(result);
});

module.exports = router;