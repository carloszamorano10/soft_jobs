import { createUserModel, getUsersModels } from "../models/userModels.js";

//todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsersModels();
    res.json(users);
  } catch (error) {
    console.log("error =>", error);
  }
};

//registro
export const registerUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    const user = await createUserModel({ email, password, rol, lenguage });
    return res
      .status(201)
      .json({ message: "usuario creado exitosamente", user });
  } catch (error) {
    res.status(500);
    console.error(error);
  }
};
