import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/HubPage.tsx',
  'src/components/ProductsHubPage.tsx',
  'src/components/ProductsPage.tsx'
];

for (const file of filesToUpdate) {
  const filePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add useNavigate
    if (!content.includes('useNavigate')) {
      content = `import { useNavigate } from "react-router-dom";\n` + content;
      content = content.replace(/export default function \w+\((.*?)\)/, (match) => {
        return match + ' {\n  const navigate = useNavigate();';
      });
      // Replace the old '{' that was at the end of the line
      content = content.replace(/\) \{\n  const navigate = useNavigate\(\);/, ') {\n  const navigate = useNavigate();');
    }

    content = content.replace(/onNavigate\(link\.id\)/g, 'navigate(link.id)');
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
