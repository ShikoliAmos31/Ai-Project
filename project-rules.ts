// project-rules.ts
// Project-wide rules for route structure, function signatures, security, and performance

/**
 * Folder Structure:
 * - routes/: Route handlers
 * - controllers/: Business logic
 * - services/: Data access
 * - middlewares/: Middleware (auth, validation, etc.)
 *
 * Function Signatures:
 * - Route: (req, res) => void | Promise<void>
 * - Controller: (id: string) => Promise<Profile | null>
 * - Service: (id: string) => Promise<Profile | null>
 * - Middleware: (req, res, next) => void
 *
 * Security:
 * - Validate and sanitize all route params (e.g., id)
 * - Require authentication for protected routes
 * - Authorize access to resources (e.g., only owner or admin)
 * - Never expose sensitive data in responses
 *
 * Performance:
 * - Use indexed DB queries
 * - Implement caching for hot data if needed
 * - Handle errors and timeouts gracefully
 */

export const projectRules = {
  folderStructure: [
    'routes/',
    'controllers/',
    'services/',
    'middlewares/'
  ],
  functionSignatures: {
    route: '(req, res) => void | Promise<void>',
    controller: '(id: string) => Promise<Profile | null>',
    service: '(id: string) => Promise<Profile | null>',
    middleware: '(req, res, next) => void'
  },
  security: [
    'Validate and sanitize all route params',
    'Require authentication for protected routes',
    'Authorize access to resources',
    'Never expose sensitive data in responses'
  ],
  performance: [
    'Use indexed DB queries',
    'Implement caching for hot data if needed',
    'Handle errors and timeouts gracefully'
  ]
};
