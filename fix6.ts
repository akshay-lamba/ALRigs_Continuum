import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/Hero.tsx',
  'src/components/ProductShowcase.tsx',
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');

    content = content.replace(/from-white\/0/g, 'from-slate-400/0');
    content = content.replace(/via-white\/(5|10)/g, 'via-slate-400/$1');
    content = content.replace(/to-white\/0/g, 'to-slate-400/0');

    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Fixed styles in ' + file);
  }
}
