import jwt from 'jsonwebtoken';

export function generateToken(data: any): Promise<string> {
    return new Promise((resolve, reject) => {
        jwt.sign(
            data,
            "prusci", 
            { expiresIn: "1d" }, 
            (err, token: string | undefined) => {
                if (err) reject(err);
                if (!token) 
                    reject("Token not generated");
                else
                    resolve(token);
            }
        );
    });
}