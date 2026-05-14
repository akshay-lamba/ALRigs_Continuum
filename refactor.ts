import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/ArcEnginePage.tsx',
  'src/components/ITFrameworkPage.tsx',
  'src/components/AboutPage.tsx',
  'src/components/ImpactPage.tsx',
  'src/components/ARCTeamPage.tsx',
];

const replaces = [
  { from: /text-teal-500/g, to: 'text-blue-500' },
  { from: /hover:bg-teal-500/g, to: 'hover:bg-blue-500' },
  { from: /hover:text-teal-500/g, to: 'hover:text-blue-500' },
  { from: /border-teal-500/g, to: 'border-blue-500' },
  { from: /bg-teal-500/g, to: 'bg-blue-500' },
  { from: /bg-black/g, to: 'bg-[#020617]' },
  { from: /bg-\[#111111\]/g, to: 'bg-[#0f172a]' },
  { from: /border-\[#222222\]/g, to: 'border-[#1e293b]' },
  { from: /bg-\[#0A0A0A\]/g, to: 'bg-[#020617]' },
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    for (const r of replaces) {
      content = content.replace(r.from, r.to);
    }
    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Updated ' + file);
  }
}
