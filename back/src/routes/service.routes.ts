import {Router} from 'express';
import {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService
} from '../controllers/service.controller'

const serviceRouter = Router();

// @ts-ignore
serviceRouter.post('/', createService);
// @ts-ignore
serviceRouter.get('/', getAllServices);
// @ts-ignore
serviceRouter.get('/:id', getServiceById);
// @ts-ignore
serviceRouter.put('/:id', updateService);
// @ts-ignore
serviceRouter.delete('/:id', deleteService);

export default serviceRouter;