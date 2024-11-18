import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = 'your-secret-key'; // En producción, utiliza una variable de entorno

export interface AuthUser  {
  id: number;
  email: string;
  name: string;
  specialty: string;
}

export const authService = {
  async register(userData: { email: string; password: string; name: string; specialty: string }) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    const user = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        specialty: user.specialty,
      },
      token,
    };
  },

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        specialty: user.specialty,
      },
      token,
    };
  },

  verifyToken(token: string): AuthUser  {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { id: number; email: string };
      return decoded as AuthUser ;
    } catch (error) {
      throw new Error('Token inválido');
    }
  },
};