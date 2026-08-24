import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', '.output', '.tanstack', '.venv'].includes(file)) {
          results = results.concat(walk(fullPath));
        }
      } else {
        if (/\.(mp4|mov|webm|mkv|avi|m4v)$/i.test(file)) {
          results.push({
            path: fullPath,
            sizeMB: (stat.size / (1024 * 1024)).toFixed(2),
            sizeBytes: stat.size
          });
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
  return results;
}

const videos = walk('.');
console.log(JSON.stringify(videos, null, 2));
