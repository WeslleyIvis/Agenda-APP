import { Router } from 'express'
import {
    createProfessional,
    getAllProfessionals,
    getProfessionalById,
    updateProfessional,
    deleteProfessional
} from '../controllers/professional.controller'

const professionalRouter = Router()

professionalRouter.post('/', createProfessional)
professionalRouter.get('/', getAllProfessionals)
// @ts-ignore
professionalRouter.put('/:id', updateProfessional);

// @ts-ignore
professionalRouter.get('/:id', getProfessionalById)

// @ts-ignore
professionalRouter.delete('/:id', deleteProfessional);

export default professionalRouter;