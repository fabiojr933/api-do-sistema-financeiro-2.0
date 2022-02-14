import { Request, Response,  NextFunction } from 'express';
import logger from '../logger/logger';
import dotenv from 'dotenv';

dotenv.config();

function authorization(req: Request, res: Response, next: NextFunction) {  
    const token = (req.header('Authorization')?.replace('Bearer ', ''));   
    try {
        if (!token) {
            return res.status(401).json({
                'resultado': 401,
                'status': 'falha',
                'messagem': 'Token é obrigatorio'
            });
        }
        if (token === '' || token === undefined) {
            return res.status(401).json({
                'resultado': 401,
                'status': 'falha',
                'messagem': 'Token undefined'
            });
        }
        if (token != process.env.TOKEN) {
            return res.status(401).json({
                'resultado': 401,
                'status': 'falha',
                'messagem': 'Token invalido'
            });
        }
        next();
    } catch (error) {
        res.status(500).json({
            'resultado': 500,
            'status': 'falha',
            'messagem': 'erro na authorization'
        });
        logger.error(error);
    }
}
export default authorization;