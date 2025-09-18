import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const routesPath = path.join(__dirname);

const loadRoutes = (directory: string, baseRoute = '') => {
  fs.readdirSync(directory, { withFileTypes: true }).forEach((dirent) => {
    const fullPath = path.join(directory, dirent.name);
    
    // Ignoriere die index.ts des aktuellen Verzeichnisses
    if (dirent.name === 'index.ts' || dirent.name === 'index.js') {
      return;
    }
    
    // Konvertiere Pfad zu URL-kompatiblen Schrägstrichen
    const urlPath = path.join(baseRoute, dirent.name)
      .replace(/\\/g, '/') // Windows-Kompatibilität
    
    if (dirent.isDirectory()) {
      // Prüfe, ob eine index.ts oder index.js im Verzeichnis existiert
      const indexTsPath = path.join(fullPath, 'index.ts');
      const indexJsPath = path.join(fullPath, 'index.js');
      
      if (fs.existsSync(indexTsPath) || fs.existsSync(indexJsPath)) {
        // Wenn index.ts/js existiert, ist es eine Route
        const routeModule = require(fullPath);
        router.use(`/${urlPath}`, routeModule.default);
        console.log(`Route registered: /${urlPath}`);
      }
      
      // Rekursiv nach weiteren Routen suchen
      loadRoutes(fullPath, urlPath);
    }
  });
};

loadRoutes(routesPath);

export default router;