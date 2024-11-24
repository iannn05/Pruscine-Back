import AuthRepo from '../repos/AuthRepo';

async function login(usuario: any): Promise<string>{
    try {
       return await AuthRepo.login(usuario);
    } catch (error) {
        throw error;
    }
}

export default {
    login
} as const;