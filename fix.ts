import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/index.css',
  'src/components/AboutPage.tsx',
  'src/components/ArcEnginePage.tsx',
  'src/components/ARCTeamPage.tsx',
  'src/components/Footer.tsx',
  'src/components/Hero.tsx',
  'src/components/ImpactPage.tsx',
  'src/components/ITFrameworkPage.tsx',
  'src/components/ProductsPage.tsx',
  'src/components/ProductShowcase.tsx',
  'src/components/Solution.tsx',
  'src/components/TeamsSection.tsx',
  'src/components/ValueProp.tsx',
  'src/App.tsx',
  'src/components/Navbar.tsx'
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');

    // Rename "State AI" -> "Transparency AI"
    content = content.replace(/State AI/g, 'Transparency AI');
    
    // Rename "How It Works" -> "ARC Engine"
    content = content.replace(/How It Works/g, 'ARC Engine');
    
    // Convert text-white and text-slate-200 to text-slate-400 (silver)
    content = content.replace(/text-slate-200/g, 'text-slate-400');
    content = content.replace(/text-white/g, 'text-slate-400');

    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Fixed styles in ' + file);
  }
}
