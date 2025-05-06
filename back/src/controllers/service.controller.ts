import { Request, Response} from "express";
import Service, { IService } from "../models/Service.model";
import mongoose, { mongo } from 'mongoose';
import Professional from '../models/Professional.model';

export const createService = async (req: Request, res: Response): Promise<Response | undefined> => {
    const { name, duration, value, professional_avaliable, description  } = req.body
    //verificação do professional_avaliable
    try {
        const professionalExists = await Professional.findById(professional_avaliable);
            if (!professionalExists) {
                return res.status(404).json({ message: 'Profissional não encontrado' });
            }
        
        const newService = await Service.create({
            name,
            duration,
            value,
            professional_avaliable,
            description
        }as IService);
        
        return res.status(201).json(newService)
    } catch (error) {
        return res.status(500).json({message: 'Erro ao criar o serviço', details: error})
    }
    
}

export const getAllServices = async(_req: Request, res: Response) => {
    try{
        //preenche o campo do profissional com os dados dele
        const services = await Service.find().populate('professional_avaliable',
            'email phone_number');
            res.status(200).json(services);
    }catch (error) {
        return res.status(500).json({message: 'Erro ao buscar serviços', details: error});

    } 
};

export const getServiceById = async (req: Request, res: Response): Promise<Response | undefined> => {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message: 'ID do serviço inválido.'});
        }
        try {
            const service = await Service.findById(id).populate('professional_avaliable', 'email');
            if(!service) {
                return res.status(404).json({message: 'Serviço não encontrado.'});
            }
            res.status(200).json(service);
        }catch (error) {
            res.status(500).json({message: 'Erro ao buscar o serviço', details: error});
        }
}

export const updateService = async (req: Request, res: Response): Promise<Response | undefined> => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID do serviço inválido.' });
    }

    try{
        const udatedService = await Service.findByIdAndUpdate(id, req.body, {new: true});
        if(!udatedService) {
            return res.status(404).json({message: 'Serviço não encontrado.'});
        }
        res.status(200).json(udatedService);
    } catch (error) {
        res.status(500).json({message: 'Erro ao atualizar o serviço'})
    }
}

export const deleteService = async (req: Request, res:Response): Promise<Response | undefined> => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) {
            return res.status(404).json({message: 'Serviço não encontrado'})
        }
        return res.status(200).json({message:'Serviço deletado com sucesso!', deletedService});
    } catch (error) {
        res.status(500).json({message: 'Erro ao deletar o serviço', details: error})
    }
}