import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  specialty: z.string().optional(),
  avatar: z.string().optional(),
  currentPassword: z.string().optional(),
  newPassword: z.string().min(6).optional()
});

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        specialty: true,
        avatar: true,
        activities: {
          include: {
            likes: true,
            comments: true
          }
        }
      }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const data = updateUserSchema.parse(req.body);
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        name: data.name,
        specialty: data.specialty,
        avatar: data.avatar
      },
      select: {
        id: true,
        name: true,
        email: true,
        specialty: true,
        avatar: true
      }
    });
    res.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Error al actualizar perfil' });
    }
  }
});

export { router as usersRouter };