// server/api/gallery.get.ts
import fs from 'fs';
import path from 'path';

export default defineEventHandler(() => {
  const dir = path.join(process.cwd(), 'public/gallery');
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|png|jpeg|gif)$/.test(f));
  return files.map(f => `/gallery/${f}`);
});
