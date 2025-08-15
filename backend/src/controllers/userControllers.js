import { createUserModel } from "../models/userModels.js";

export const registerUser = async(req, res)=>{
    try {
   const {email, password, rol, lenguage} = req.body
   const user = await createUserModel({email, password, rol, lenguage})
   return res.status(201).json({message: 'usuario creado exitosamente', user})
    } catch (error) {
        res.status(500)
        console.error(error)
    }
}