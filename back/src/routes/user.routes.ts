import { Router } from 'express'
import{
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}from '../controllers/user.controller'


const userRouter = Router()
// @ts-ignore
userRouter.post('/', createUser)
// @ts-ignore
userRouter.get('/', getAllUsers)
// @ts-ignore
userRouter.get('/:id', getUserById)
// @ts-ignore
userRouter.put('/:id', updateUser)
// @ts-ignore
userRouter.delete('/:id', deleteUser)

export default userRouter;