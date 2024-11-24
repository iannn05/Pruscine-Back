import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '@src/models/user.model';

export async function checkUserRole(req: Request, res: Response, next: NextFunction) {
  try {
    // Obtener el token del encabezado de autorización
    console.log("entro")
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }

    const decoded: any = jwt.verify(token, "prusci");
    console.log(decoded);
    const usuarioid = decoded.data;
    console.log(usuarioid);
    // Obtener el usuario de la base de datos
    const usuario = await User.findByPk(usuarioid);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar el rol del usuario
    if (usuario.rol == false) { // Ajusta esta condición según tu modelo de usuario
      return res.status(403).json({ message: 'No tienes permisos para agregar películas' });
    }

    // Si el usuario tiene el rol adecuado, continuar con la siguiente función middleware
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Error al verificar el rol del usuario', error });
  }
}