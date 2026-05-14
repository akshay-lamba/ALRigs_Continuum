import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/Hero.tsx',
  'src/components/HubPage.tsx',
  'src/components/ProductShowcase.tsx',
  'src/components/ProductsHubPage.tsx',
  'src/components/ProductsPage.tsx'
];

const basePath = path.resolve(process.cwd());

for (const file of filesToUpdate) {
  const filePath = path.resolve(basePath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove `onNavigate` props and imports if needed, but let's just do it directly.
    content = content.replace(/onNavigate:\s*\(\s*page:\s*string\s*\)\s*=>\s*void,?\s*/g, '');
    content = content.replace(/onNavigate\?:?\s*\(\s*page:\s*string\s*\)\s*=>\s*void,?\s*/g, '');
    content = content.replace(/,\s*currentPage:\s*string/g, '');
    content = content.replace(/currentPage:\s*string/g, '');
    content = content.replace(/\{ onNavigate \}/g, '{}');
    content = content.replace(/\{ onNavigate, currentPage \}/g, '{}');

    // Replace onNavigate('path') with navigate('/path')
    content = content.replace(/onNavigate\('home'\)/g, "navigate('/')");
    
    const replacements = [
      ['products', '/products'],
      ['blueprint', '/blueprint'],
      ['ai', '/ai'],
      ['about', '/about'],
      ['contact', '/contact'],
      ['product-pro', '/products/proai'],
      ['product-business', '/products/business'],
      ['product-transparency', '/products/transparency'],
      ['blueprint-architecture', '/blueprint/architecture'],
      ['blueprint-model', '/blueprint/model'],
      ['blueprint-it-framework', '/blueprint/it-framework'],
      ['ai-tech-stack', '/ai/tech-stack'],
      ['ai-capabilities', '/ai/capabilities'],
      ['about-team', '/about/team'],
      ['contact', '/contact'],
      ['socials', '/socials']
    ];

    for (const [from, to] of replacements) {
      content = content.replace(new RegExp(`onNavigate\\('${from}'\\)`, 'g'), `navigate('${to}')`);
      content = content.replace(new RegExp(`onNavigate && onNavigate\\('${from}'\\)`, 'g'), `navigate('${to}')`);
    }

    content = content.replace(/onNavigate \&\& onNavigate\('home'\)/g, "navigate('/')");
    content = content.replace(/onNavigate\&\&onNavigate\('home'\)/g, "navigate('/')");

    // Add useNavigate import
    if (content.includes('navigate(') && !content.includes('useNavigate')) {
      content = `import { useNavigate } from "react-router-dom";\n` + content;
      content = content.replace(/export default function \w+\((.*?)\)\s*\{/, (match) => {
        return match + '\n  const navigate = useNavigate();';
      });
    }

    // Fix active page links in Navbar
    if (file.includes('Navbar.tsx')) {
      content = `import { useLocation } from "react-router-dom";\n` + content;
      content = content.replace(/export default function Navbar\(\{\}\) \{/, `export default function Navbar() {\n  const location = useLocation();\n  const currentPage = location.pathname;`);
      
      content = content.replace(/currentPage === 'home'/g, "currentPage === '/'");
      content = content.replace(/currentPage\.startsWith\('product'\)/g, "currentPage.startsWith('/products')");
      content = content.replace(/currentPage\.startsWith\('blueprint'\)/g, "currentPage.startsWith('/blueprint')");
      content = content.replace(/currentPage\.startsWith\('ai'\)/g, "currentPage.startsWith('/ai')");
      content = content.replace(/currentPage\.startsWith\('about'\)/g, "currentPage.startsWith('/about')");
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
