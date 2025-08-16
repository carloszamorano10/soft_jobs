import pool from "../../database/config.js";
import bcrypt from "bcryptjs";

//mostrar usuarios
export const getUsersModels = async () => {
  const sqlQuery = "SELECT * FROM usuarios";
  const response = await pool.query(sqlQuery);
  return response.rows;
};

//registro
export const createUserModel = async ({ email, password, rol, lenguage }) => {
  const contrasenaHash = bcrypt.hashSync(password, 4);
  const SQLquery = {
    text: "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING email, rol, lenguage",
    values: [email, contrasenaHash, rol, lenguage],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

//login
export const encuentraUsuarioXcorreoModelo = async (email) => {
  const SQLquery = {
    text: "SELECT * FROM usuarios WHERE email = $1",
    values: [email],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
