import { Request, Response} from 'express';
import Professional from '../models/Professional.model';

export const createProfessional = async (req: Request, res: Response):Promise<Response | undefined> => {
    const { email, phone_number } = req.body
    
    try {
        const existingProfessional = await Professional.findOne({ email })
        if(existingProfessional) {
            return res.status(400).json({message: "Email já está em uso!!!"})
        }
        
        const existingPhone = await Professional.findOne({ phone_number })
        if(existingPhone) {
            return res.status(400).json({message: "Número já está em uso!!!"})
        }
        
        const newProfessional = await Professional.create(req.body)
        res.status(201).json(newProfessional)
    } catch(error) {
        res.status(500).json({error: 'Erro em criar o Profissional', details: error})
    }
};

export const getAllProfessionals = async(req: Request, res: Response) => {
    try {
        const professionals = await Professional.find();
        res.status(200).json(professionals)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar profissionais' });
      }
}

export const getProfessionalById = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const professional = await Professional.findById(req.params.id);
        if (!professional) {
            return res.status(404).json({message: 'Profissional não encontrado'})
        }
        res.status(200).json(Professional)
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar profissional', details: error})
    }
}

export const updateProfessional = async(req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const { id } = req.params
        const updated = await Professional.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if(!updated) {
            return res.status(404).json({message: 'Profissional não encontrato'})
        }
        return res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({error: 'Erro ao autualizar profissional'})
    }
}

export const deleteProfessional = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const deleted = await Professional.findByIdAndDelete(req.params.id);
        if(!deleted) {
            return res.status(404).json({message: "Profissional não encontrado"})
        }
        return res.status(200).json(deleted)
    } catch (error) {
        res.status(500).json({error: "Erro ao deletar profissional", details: error})
    }
}