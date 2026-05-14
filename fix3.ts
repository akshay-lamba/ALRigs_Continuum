import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/ProductShowcase.tsx',
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');

    content = content.replace(/text-blue-400/g, 'text-blue-800');

    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Fixed styles in ' + file);
  }
}
