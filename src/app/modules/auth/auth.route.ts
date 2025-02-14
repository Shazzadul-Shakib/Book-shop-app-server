import { Router } from 'express';
import { authController } from './auth.controller';

export const authRouter = Router();

authRouter.post('/auth/createUser', authController.registerUser);
authRouter.post('/auth/login', authController.loginUser);
authRouter.patch('/auth/updateUser/:userId', authController.updateUserProfile);
authRouter.post('/auth/refreshtoken', authController.refreshToken);
