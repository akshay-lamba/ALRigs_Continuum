import * as fs from 'fs';
import * as path from 'path';

const basePath = path.resolve('src/components');
const filesToFix = fs.readdirSync(basePath).filter(f => f.endsWith('.tsx'));

for (const f of filesToFix) {
  let content = fs.readFileSync(path.join(basePath, f), 'utf8');

  // Fix Footer duplicate useNavigate
  if (f === 'Footer.tsx') {
    while (content.split('import { useNavigate }').length > 2) {
      content = content.replace('import { useNavigate } from "react-router-dom";\n', '');
    }
  }

  // Ensure missing navigate inside ProductShowcase
  if (f === 'ProductShowcase.tsx' && !content.includes('const navigate')) {
    content = content.replace(/export default function ProductShowcase\(\) \{/, 'export default function ProductShowcase() {\n  const navigate = useNavigate();');
  }

  // Replace any onNavigate calls with navigate
  content = content.replace(/onNavigate \&\& onNavigate\(/g, "navigate(");
  content = content.replace(/onNavigate\&\&onNavigate\(/g, "navigate(");
  content = content.replace(/onNavigate\(/g, "navigate(");

  // For Navbar: ensure currentPage is defined
  if (f === 'Navbar.tsx') {
    if (!content.includes('const currentPage = location.pathname;')) {
      content = content.replace(/export default function Navbar\(\) \{/, "export default function Navbar() {\n  const location = useLocation();\n  const currentPage = location.pathname;");
    }
  }

  fs.writeFileSync(path.join(basePath, f), content, 'utf8');
}
