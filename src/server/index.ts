import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth';
import { activitiesRouter } from './routes/activities';
import { usersRouter } from './routes/users';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001; // Cambiado a 5001 como alternativa

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/users', usersRouter);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();