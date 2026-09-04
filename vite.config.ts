import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'serve-entregaveis',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && (req.url.startsWith('/entregaveis/') || req.url.startsWith('/entregaveis'))) {
              const cleanPath = decodeURIComponent(req.url.replace(/^\/entregaveis\/?/, ''));
              const filePathRoot = path.join(process.cwd(), 'entregaveis', cleanPath);
              const filePathPublic = path.join(process.cwd(), 'public', 'entregaveis', cleanPath);
              
              if (cleanPath && fs.existsSync(filePathRoot) && fs.statSync(filePathRoot).isFile()) {
                res.setHeader('Content-Type', cleanPath.endsWith('.pdf') ? 'application/pdf' : 'application/octet-stream');
                return fs.createReadStream(filePathRoot).pipe(res);
              }
              if (cleanPath && fs.existsSync(filePathPublic) && fs.statSync(filePathPublic).isFile()) {
                res.setHeader('Content-Type', cleanPath.endsWith('.pdf') ? 'application/pdf' : 'application/octet-stream');
                return fs.createReadStream(filePathPublic).pipe(res);
              }
            }
            next();
          });
        },
        closeBundle() {
          const srcDir = path.join(process.cwd(), 'entregaveis');
          const destDir = path.join(process.cwd(), 'dist', 'entregaveis');
          if (fs.existsSync(srcDir)) {
            if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
            fs.cpSync(srcDir, destDir, { recursive: true });
          }
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
