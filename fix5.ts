import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/Hero.tsx',
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');

    content = content.replace(/onNavigate\('how'\)/g, "onNavigate('arc-engine')");
    content = content.replace(/currentPage === 'how'/g, "currentPage === 'arc-engine'");

    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Fixed styles in ' + file);
  }
}
