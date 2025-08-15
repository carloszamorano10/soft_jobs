import pool from "../../database/config.js";
import bcrypt from "bcryptjs";

export const createUserModel = async({email, password, rol, lenguage})=>{
 const contrasenaHash = bcrypt.hashSync(password, 4)
 const SQLquery = {
  text: 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING email, rol, lenguage',
  values:[email, contrasenaHash, rol, lenguage]    
 } 
 const response = await pool.query(SQLquery)
 return response.rows[0]
}