import express, { Application, Request, Response } from 'express';
import router from './routes';

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;

// Initialize app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Health Check route
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// API Routes
app.use('/api', router);

// Create HTTP server instance
const server = app.listen(PORT, (error?: Error | null) => {
  if (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

// Export server for external use (e.g., testing or graceful shutdown)
export { app, server };

// Graceful Shutdown
process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });
});
