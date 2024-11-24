import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import AuthService from '@src/services/AuthService';
import User from '@src/models/user.model';

async function login(IReq : IReq, IRes : IRes) {
    const  usuario = IReq.body;
    console.log(usuario);
    try {
        const token = await AuthService.login(usuario);
        console.log({token});
        return IRes.status(HttpStatusCodes.OK).send({ token });
    }
    catch (error) {
        return IRes.status(HttpStatusCodes.UNAUTHORIZED).end();
    }
}

export default {
    login
} as const;