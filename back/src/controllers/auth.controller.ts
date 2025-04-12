import { Request, Response } from "express";
import ProfessionalModel from "../models/Professional.model";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

// Autêntica o login e gera um Token sem validade
export const loginProfessional = async(req: Request, res: Response): Promise<Response | undefined | any> => {
    const {email, password} = req.body

    try {
        const professional = await ProfessionalModel.findOne({ email })
        if(!professional) {
            return res.status(401).json({message: "Usuário não encontrado"})
        }

        const isMatch = await bcrypt.compare(password, professional.password);
        if(!isMatch) {
            return res.status(401).json({message: 'Senha incorreta'})
        }

        const token = jwt.sign(
            { 
                id: professional._id, 
                role: professional.role
            },
            process.env.ENCRYPT_KEY as string,
            //{expiresIn: '1d'} validade do token 🐒
        )

        return res.status(200).json({
            message: 'Login realizado com sucesso',
            token,
            user: {
                id: professional._id,
                name: professional.name,
                email: professional.email,
                role: professional.role
            }
        })
    } catch (error) {
        res.status(500).json({message: "Erro no servidor", error})
    }
}