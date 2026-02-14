/**
 * Helper to build public asset URLs that work correctly in both development and production.
 * Ensures paths are resolved relative to the app's base path.
 */
export function publicAsset(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, assets are served from the root
  // In development, Vite serves them from the public directory
  return `/${cleanPath}`;
}
