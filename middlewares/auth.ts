import { Request, Response, NextFunction } from 'express';

// Example authentication middleware
export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  // Security: Require authentication
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}
