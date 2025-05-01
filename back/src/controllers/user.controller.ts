import {Request, Response} from 'express';
import User from "../models/User.model";

export const createUser = async (req: Request, res: Response): Promise<Response | undefined> => 
    {   
        const {email, phone_number} = req.body

        try
        {
            const existingUser = await User.findOne({
                $or: [{email}, {phone_number}]
            })
            if (existingUser) {
                
                if (existingUser.email === email) {
                    return res.status(400).json({ message: "E-mail já está em uso!" });
                }
                if (existingUser.phone_number === phone_number) {
                    return res.status(400).json({ message: "Número já está em uso!" });
                }
            }
        
            const newUser = await User.create(req.body)
           return res.status(201).json(newUser)
        }catch(error){
            res.status(500).json({error: 'Erro em criar o Usuário', details: error})
        }
    };

export const getAllUsers = async(req: Request, res: Response) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    }catch(error)
    {
        res.status(500).json({error: 'Erro ao buscar o usuário'});
    }
} 

export const getUserById = async (req: Request, res: Response): Promise<Response | undefined> => {
    try 
    {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message: 'Usuário não encontrado'})
        }
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error: 'Erro ao Buscar usuário', details: error})
    }
}

export const updateUser = async(req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {id} = req.params
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if (!updatedUser) {
            return res.status(404).json({message: 'Usuário não encontrado'});
        }
        return res.status(200).json(updatedUser);
    }catch (error){
        res.status(500).json({error: 'Erro ao atualizar usuário'})
    }
}

export const deleteUser = async(req: Request, res: Response): Promise<Response | undefined> => {

    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) return res.status(404).json({message: "Usuário não encontrado"})
        return res.status(200).json(deletedUser);
        }catch(error){
        res.status(500).json({erro: "Erro ao deletar usuário", details: error})
        }
} 