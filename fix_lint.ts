import * as fs from 'fs';
import * as path from 'path';

const basePath = path.resolve('src/components');

// Fix Footer.tsx
let footer = fs.readFileSync(path.join(basePath, 'Footer.tsx'), 'utf8');
footer = `import { useNavigate } from "react-router-dom";\n` + footer;
footer = footer.replace(/export default function Footer\(\s*\)\s*\{/, "export default function Footer() {\n  const navigate = useNavigate();");
footer = footer.replace(/onNavigate \&\& onNavigate\(/g, "navigate(");
fs.writeFileSync(path.join(basePath, 'Footer.tsx'), footer, 'utf8');

// Fix Hero.tsx
let hero = fs.readFileSync(path.join(basePath, 'Hero.tsx'), 'utf8');
// check if useNavigate is already there
if (!hero.includes('useNavigate')) {
  hero = `import { useNavigate } from "react-router-dom";\n` + hero;
}
if (!hero.includes('const navigate = useNavigate();')) {
  hero = hero.replace(/export default function Hero\(\s*\)\s*\{/, "export default function Hero() {\n  const navigate = useNavigate();");
}
hero = hero.replace(/onNavigate \&\& onNavigate\(/g, "navigate(");
fs.writeFileSync(path.join(basePath, 'Hero.tsx'), hero, 'utf8');

// Fix ProductShowcase.tsx
let show = fs.readFileSync(path.join(basePath, 'ProductShowcase.tsx'), 'utf8');
if (!show.includes('useNavigate')) {
  show = `import { useNavigate } from "react-router-dom";\n` + show;
}
if (!show.includes('const navigate = useNavigate();')) {
  show = show.replace(/export default function ProductShowcase\(\s*\)\s*\{/, "export default function ProductShowcase() {\n  const navigate = useNavigate();");
}
show = show.replace(/onNavigate\(/g, "navigate(");
fs.writeFileSync(path.join(basePath, 'ProductShowcase.tsx'), show, 'utf8');

// Fix Navbar.tsx
let nav = fs.readFileSync(path.join(basePath, 'Navbar.tsx'), 'utf8');
if (!nav.includes('const currentPage = location.pathname;')) {
  nav = nav.replace(/export default function Navbar\(\)\s*\{/, "export default function Navbar() {\n  const location = useLocation();\n  const currentPage = location.pathname;");
}
fs.writeFileSync(path.join(basePath, 'Navbar.tsx'), nav, 'utf8');
