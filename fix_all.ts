import * as fs from 'fs';
import * as path from 'path';

const basePath = path.resolve('src/components');
const filesToFix = fs.readdirSync(basePath).filter((f: string) => f.endsWith('.tsx'));

for (const f of filesToFix) {
  let content = fs.readFileSync(path.join(basePath, f), 'utf8');

  // Fix onNavigate residual
  content = content.replace(/onNavigate \&\& /g, "");
  
  // Fix currentPage in Navbar
  if (f === 'Navbar.tsx') {
     content = content.replace(/export default function Navbar\(\{\}\) \{/g, `import { useLocation, useNavigate } from 'react-router-dom';\nexport default function Navbar() {\n  const location = useLocation();\n  const currentPage = location.pathname;\n  const navigate = useNavigate();`);
     content = content.replace(/onNavigate\(/g, "navigate(");
  }

  // Fix ProductShowcase
  if (f === 'ProductShowcase.tsx') {
    if (!content.includes('const navigate = useNavigate()')) {
        content = content.replace(/export default function ProductShowcase\(\) \{/, `import { useNavigate } from 'react-router-dom';\nexport default function ProductShowcase() {\n  const navigate = useNavigate();`);
    }
  }

  // Fix ARCTeamPage - TeamsSection error TS2304 navigate
  if (f === 'ARCTeamPage.tsx' || f === 'TeamsSection.tsx') {
    if (content.includes('navigate(') && !content.includes('useNavigate')) {
      content = `import { useNavigate } from 'react-router-dom';\n` + content;
      content = content.replace(/export default function \w+\(\) \{/, (m) => m + `\n  const navigate = useNavigate();`);
    }
  }

  fs.writeFileSync(path.join(basePath, f), content, 'utf8');
}
