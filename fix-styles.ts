import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
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

    // Replace text-brand-primary -> gradient-text
    content = content.replace(/text-brand-primary/g, 'gradient-text');
    // Replace text-blue-500 -> gradient-text
    // Only replacing standalone trailing classes
    content = content.replace(/text-blue-500([^/])/g, 'gradient-text$1');

    // Make PRO AI into Pro AI etc inside text nodes if they exist
    content = content.replace(/PROAI/gi, 'Pro AI');
    content = content.replace(/BUSINESSAI/gi, 'Business AI');
    content = content.replace(/TRANSPARENCYAI/gi, 'Transparency AI');

    // Remove uppercase classes
    content = content.replace(/\buppercase\b/g, '');

    // Replace flat blue bgs with gradients
    content = content.replace(/bg-blue-600 hover:bg-blue-500/g, 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400');
    
    // Replace bg-transparent since we did that earlier, ensuring good gradient usage
    
    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Fixed styles in ' + file);
  }
}
