import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/ProductsPage.tsx',
  'src/components/ProductShowcase.tsx',
  'src/components/ArcEnginePage.tsx',
  'src/components/ImpactPage.tsx',
  'src/components/ARCTeamPage.tsx',
  'src/components/AboutPage.tsx',
  'src/components/ITFrameworkPage.tsx',
  'src/components/Footer.tsx',
  'src/App.tsx',
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    
    // Replace outer bg with transparent
    content = content.replace(/bg-\[#020617\] min-h-screen/g, 'bg-transparent min-h-screen');
    // App.tsx
    content = content.replace(/className="min-h-screen bg-\[#020617\]/g, 'className="min-h-screen bg-transparent');
    // ProductShowcase.tsx and Footer.tsx
    content = content.replace(/bg-\[#020617\] border-t border-\[#1e293b\]/g, 'bg-transparent border-t border-[#1e293b]');
    
    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Updated bg in ' + file);
  }
}
