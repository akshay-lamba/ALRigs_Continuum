import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/ITFrameworkPage.tsx',
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');

    content = content.replace(/border-white\/10/g, 'border-slate-500/20');
    content = content.replace(/bg-white\/30/g, 'bg-slate-500/30');
    content = content.replace(/hover:bg-white\/50/g, 'hover:bg-slate-500/50');

    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Fixed styles in ' + file);
  }
}
