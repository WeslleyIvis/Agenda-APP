import { Request, Response} from 'express';
import ReviewsModel from '../models/Reviews.model';
import Client from '../models/User.model';
import Professional from '../models/Professional.model';
import Service, { IService } from "../models/Service.model";


export const getReview = async (req: Request, res: Response) => {
    const { clientId, professionalId, serviceId, date, comment, rating} = req.body;
    try {
 
       const reviews=await ReviewsModel.find()
       res.status(200).json(reviews)

      } catch (error) {
        res.status(500).json({ error: 'Erro em buscar review', details: error })
      }
    }


    
export const createReview = async (req: Request, res: Response): Promise<Response | undefined> => {
  const { clientId, professionalId, serviceId, date, comment, rating} = req.body;

  try {
 
    const existingProfessional = await Professional.findOne({ professionalId })
    if(!existingProfessional) {
        return res.status(404).json({ error: 'Professional not Found!' })
    }
    const existingClient = await Client.findOne({ clientId })
    if(!existingClient) {
        return res.status(404).json({ error: 'Client not Found!' })
    }
    const existingService = await Service.findOne({ serviceId })
    if(!existingService) {
        return res.status(404).json({ error: 'Service not Found!' })
    }

    const reviewData = {
      client: clientId,
      professional: professionalId,
      service: serviceId,
      date,
      comment,
      rating
    };

    const newReview = await ReviewsModel.create(reviewData)

    return res.status(201).json(newReview);

  } catch (error) {
    res.status(500).json({ error: 'Erro em criar review', details: error })
  }

  
}

export const delReview = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {id} = req.params;
        const deleted=await ReviewsModel.findByIdAndDelete(id)
       if(!deleted){
        return res.status(404).json({message: "Review not found!"})
       }
       return res.status(200).json(deleted)

      } catch (error) {
        res.status(500).json({ error: 'Erro em deletar review', details: error })
      }
    }

export const searchReview = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {id} = req.params;
        const review=await ReviewsModel.findById(id)
       if(!review){
        return res.status(404).json({message: "Review not found!"})
       }
       return res.status(200).json(review)

      } catch (error) {
        res.status(500).json({ error: 'Erro em buscar review', details: error })
      }
}

export const updateReview = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const {id} = req.params;
        const review=await ReviewsModel.findByIdAndUpdate(id, req.body, {new:true})
       if(!review){
        return res.status(404).json({message: "Review not found!"})
       }
       return res.status(200).json(review)

      } catch (error) {
        res.status(500).json({ error: 'Erro em atualizar review', details: error })
      }
}