import { getProfileByIdService } from '../services/profileService';
import { Request } from 'express';

// Controller: business logic for profile
export async function getProfileByIdController(id: string, req: Request) {
  // Security: Only allow access to own profile or admin
  if (req.user?.id !== id && !req.user?.isAdmin) {
    throw { status: 403, message: 'Forbidden' };
  }
  // Performance: Service handles DB access
  return await getProfileByIdService(id);
}
