# Project Rule File: /profile/:id Route Implementation

1. **Separation of Concerns**: Organize code into `routes`, `controllers`, `services`, and `middlewares` folders. Each layer should have a single responsibility (routing, business logic, data access, and middleware, respectively).
2. **Parameter Validation & Sanitization**: Always validate and sanitize route parameters (e.g., `id`) to prevent injection and ensure data integrity.
3. **Authentication & Authorization**: Protect the `/profile/:id` route with authentication middleware. Only allow access to the profile owner or users with admin privileges.
4. **Error Handling**: Implement consistent error handling and return appropriate HTTP status codes and messages for all failure cases.
5. **Performance Optimization**: Use efficient database queries and consider caching for frequently accessed profiles. Avoid blocking operations in route handlers.
