import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { encuentraUsuarioXcorreoModelo } from "../models/userModels.js";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await encuentraUsuarioXcorreoModelo(email);
    if (!user) {
      return res.status.json({
        message: "El usuario o el password son incorrectos",
      });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: "No autorizado" });
    }

    const token = jwt.sign({ email }, process.env.jwtSecret, {
      expiresIn: "120s",
    });
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { loginUser };
