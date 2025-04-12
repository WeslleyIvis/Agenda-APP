import bcrypt from 'bcryptjs'
import { HydratedDocument } from 'mongoose'
import { IProfessional } from '../models/Professional.model'

export async function hashPassword(this: HydratedDocument<IProfessional>, next: () => void) {
    if(!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        console.error(err)
    }
}