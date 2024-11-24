import bcrypt from 'bcrypt';
import { generateToken } from '../util/jwt';
import User from '@src/models/user.model';

async function login(usuario: any): Promise<string> {
    const user = await User.findOne({ 
        where: { email: usuario.email }
    });

    if (!user) {
        throw new Error('User not found');
    }

    const equals = await bcrypt.compare(usuario.contrasenia, user.contrasenia);

    if (equals) {
        // Incluir más información en el token, como el rol del usuario
        const tokenData = {
            idusuario: user.idusuario,
            rol: user.rol // Asegúrate de que el modelo tiene esta propiedad
        };
        return generateToken(tokenData);
    } else {
        throw new Error('Invalid credentials');
    }
}

export default {
    login
} as const;