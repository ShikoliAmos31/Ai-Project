// Service: data access for profile
export async function getProfileByIdService(id: string): Promise<Profile | null> {
  // Performance: Use indexed DB query (pseudo-code)
  // Security: Never expose sensitive fields
  // Replace with real DB logic
  const fakeDB = [
    { id: '1', name: 'Alice', email: 'alice@example.com', isAdmin: false },
    { id: '2', name: 'Bob', email: 'bob@example.com', isAdmin: true }
  ];
  const profile = fakeDB.find(u => u.id === id);
  if (!profile) return null;
  // Remove sensitive fields before returning
  const { email, ...safeProfile } = profile;
  return safeProfile;
}

// Profile type
export type Profile = {
  id: string;
  name: string;
  isAdmin: boolean;
};
