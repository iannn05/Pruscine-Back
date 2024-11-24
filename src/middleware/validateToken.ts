import jwt from "jsonwebtoken";
import { Request as IReq, Response as IRes, NextFunction as INext } from "express";


export interface Payload {
    email: string;
    contrasenia: string;
    rol: boolean;
}
export interface CustomRequest extends IReq {
    payload: Payload;
}

export const authenticateToken = (req: IReq, res: IRes, next: INext) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

  if (!token) {
    console.error("No se encontró un token en el encabezado.");
    return res.sendStatus(401); // Sin autorización
  }

  jwt.verify(token, "prusci", (err, user) => {
    if (err) {
      console.error("Error verificando el token:", err.message);
      return res.sendStatus(403); // Token inválido
    }

    if (user) {
      (req as CustomRequest).payload = user as Payload;
      next();
    } else {
      console.error("Usuario no definido después de verificar el token.");
      return res.sendStatus(500); // Error inesperado
    }
  });
};
