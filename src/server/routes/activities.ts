import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { authenticateToken } from '../middleware/auth';
import { getDefaultImageBySubject } from '../../utils/defaultImages';

const router = Router();
const prisma = new PrismaClient();

const activitySchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  subject: z.string(),
  specialNeed: z.string(),
  detailedDescription: z.string(),
  explanation: z.string(),
  sourceUrl: z.string().url().optional().nullable(),
  objectives: z.array(z.string()).or(z.string()),
  duration: z.string(),
  materials: z.array(z.string()).or(z.string()),
  image: z.string().url().optional().nullable()
});

// Create activity
router.post('/', authenticateToken, async (req, res) => {
  try {
    const data = activitySchema.parse({
      ...req.body,
      sourceUrl: req.body.sourceUrl || null,
      image: req.body.image || null
    });
    
    const objectives = Array.isArray(data.objectives) ? data.objectives : JSON.parse(data.objectives);
    const materials = Array.isArray(data.materials) ? data.materials : JSON.parse(data.materials);
    
    const image = data.image || getDefaultImageBySubject(data.subject);

    const activity = await prisma.activity.create({
      data: {
        title: data.title,
        description: data.description,
        subject: data.subject,
        specialNeed: data.specialNeed,
        detailedDescription: data.detailedDescription,
        explanation: data.explanation,
        sourceUrl: data.sourceUrl,
        objectives: JSON.stringify(objectives),
        duration: data.duration,
        materials: JSON.stringify(materials),
        image,
        authorId: req.user.id
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            specialty: true,
            avatar: true
          }
        },
        comments: {
          include: {
            user: {
              select: {
                name: true,
                avatar: true
              }
            }
          }
        },
        likes: true
      }
    });

    res.status(201).json(activity);
  } catch (error) {
    console.error('Error creating activity:', error);
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        error: 'Error de validación',
        details: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    } else {
      res.status(500).json({ error: 'Error al crear la actividad' });
    }
  }
});

// Get all activities
router.get('/', async (req, res) => {
  try {
    const activities = await prisma.activity.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            specialty: true,
            avatar: true
          }
        },
        comments: {
          include: {
            user: {
              select: {
                name: true,
                avatar: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        },
        likes: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Error al obtener actividades' });
  }
});

// Get activity by id
router.get('/:id', async (req, res) => {
  try {
    const activity = await prisma.activity.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            specialty: true,
            avatar: true
          }
        },
        comments: {
          include: {
            user: {
              select: {
                name: true,
                avatar: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        },
        likes: true
      }
    });

    if (!activity) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }

    res.json(activity);
  } catch (error) {
    console.error('Error fetching activity:', error);
    res.status(500).json({ error: 'Error al obtener la actividad' });
  }
});

// Update activity
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const activityId = parseInt(req.params.id);
    const activity = await prisma.activity.findUnique({
      where: { id: activityId }
    });

    if (!activity) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }

    if (activity.authorId !== req.user.id) {
      return res.status(403).json({ error: 'No tienes permiso para editar esta actividad' });
    }

    const data = activitySchema.parse({
      ...req.body,
      sourceUrl: req.body.sourceUrl || null,
      image: req.body.image || null
    });

    const objectives = Array.isArray(data.objectives) ? data.objectives : JSON.parse(data.objectives);
    const materials = Array.isArray(data.materials) ? data.materials : JSON.parse(data.materials);
    
    const image = data.image || getDefaultImageBySubject(data.subject);

    const updatedActivity = await prisma.activity.update({
      where: { id: activityId },
      data: {
        title: data.title,
        description: data.description,
        subject: data.subject,
        specialNeed: data.specialNeed,
        detailedDescription: data.detailedDescription,
        explanation: data.explanation,
        sourceUrl: data.sourceUrl,
        objectives: JSON.stringify(objectives),
        duration: data.duration,
        materials: JSON.stringify(materials),
        image
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            specialty: true,
            avatar: true
          }
        },
        comments: {
          include: {
            user: {
              select: {
                name: true,
                avatar: true
              }
            }
          }
        },
        likes: true
      }
    });

    res.json(updatedActivity);
  } catch (error) {
    console.error('Error updating activity:', error);
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        error: 'Error de validación',
        details: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    } else {
      res.status(500).json({ error: 'Error al actualizar la actividad' });
    }
  }
});

// Delete activity
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const activityId = parseInt(req.params.id);
    const activity = await prisma.activity.findUnique({
      where: { id: activityId }
    });

    if (!activity) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }

    if (activity.authorId !== req.user.id) {
      return res.status(403).json({ error: 'No tienes permiso para eliminar esta actividad' });
    }

    await prisma.activity.delete({
      where: { id: activityId }
    });

    res.json({ message: 'Actividad eliminada exitosamente' });
  } catch (error) {
    console.error('Error deleting activity:', error);
    res.status(500).json({ error: 'Error al eliminar la actividad' });
  }
});

// Like/Unlike activity
router.post('/:id/like', authenticateToken, async (req, res) => {
  try {
    const activityId = Number(req.params.id);
    const userId = req.user.id;

    const existingLike = await prisma.like.findUnique({
      where: {
        activityId_userId: {
          activityId,
          userId
        }
      }
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          activityId_userId: {
            activityId,
            userId
          }
        }
      });
      res.json({ liked: false });
    } else {
      await prisma.like.create({
        data: {
          activityId,
          userId
        }
      });
      res.json({ liked: true });
    }
  } catch (error) {
    console.error('Error processing like:', error);
    res.status(500).json({ error: 'Error al procesar me gusta' });
  }
});

// Add comment
router.post('/:id/comments', authenticateToken, async (req, res) => {
  try {
    const comment = await prisma.comment.create({
      data: {
        content: req.body.content,
        activityId: Number(req.params.id),
        userId: req.user.id
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true
          }
        }
      }
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Error al crear comentario' });
  }
});

export { router as activitiesRouter };