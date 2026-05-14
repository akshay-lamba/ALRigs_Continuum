import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/ArcEnginePage.tsx',
  'src/components/ITFrameworkPage.tsx',
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');

    content = content.replace(/bg-brand-primary text-black /g, 'bg-gradient-to-r from-blue-600 to-blue-800 text-slate-300 ');
    content = content.replace(/hover:bg-white/g, 'hover:from-blue-500 hover:to-blue-700');
    content = content.replace(/text-black/g, 'text-slate-300');

    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Fixed styles in ' + file);
  }
}
