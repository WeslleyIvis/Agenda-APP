import { Router } from 'express'
import {
    createReview,
    getReview,
    delReview,
    searchReview,
    updateReview,
} from '../controllers/review.controller'

const reviewRouter = Router()

// @ts-ignore
reviewRouter.post('/', createReview)
// @ts-ignore
reviewRouter.get('/', getReview)
// @ts-ignore
reviewRouter.delete('/:id', delReview)
// @ts-ignore
reviewRouter.get('/:id', searchReview)
// @ts-ignore
reviewRouter.patch('/:id', updateReview)

export default reviewRouter;