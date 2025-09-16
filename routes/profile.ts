import { Request, Response, NextFunction } from 'express';
import { requireAuth } from '../middlewares/auth';
import { getProfileByIdController } from '../controllers/profileController';

// /profile/:id route handler
export async function profileRoute(req: Request, res: Response, next: NextFunction) {
  try {
    // Security: Validate and sanitize id param
    const id = String(req.params.id).trim();
    if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
      return res.status(400).json({ error: 'Invalid profile id' });
    }
    // Auth middleware (example usage)
    await requireAuth(req, res, async () => {
      const profile = await getProfileByIdController(id, req);
      if (!profile) return res.status(404).json({ error: 'Profile not found' });
      res.json(profile);
    });
  } catch (err) {
    next(err);
  }
}
