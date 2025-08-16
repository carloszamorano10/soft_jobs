import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (!token) {
      res.status(400).json({ Message: "El token debe estar presente" });
    }
    const extractToken = token.split(" ")[1];
    const decoded = jwt.verify(extractToken, process.env.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Token no encontrado" });
  }
};
export { verifyToken };
