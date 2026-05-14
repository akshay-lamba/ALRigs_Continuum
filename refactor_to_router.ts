import * as fs from 'fs';
import * as path from 'path';

// Define routing map
const routeMap = {
  'home': '/',
  'products': '/products',
  'product-pro': '/products/proai',
  'product-business': '/products/business',
  'product-transparency': '/products/transparency',
  'blueprint': '/blueprint',
  'blueprint-architecture': '/blueprint/architecture',
  'blueprint-model': '/blueprint/model',
  'blueprint-it-framework': '/blueprint/it-framework',
  'ai': '/ai',
  'ai-tech-stack': '/ai/tech-stack',
  'ai-capabilities': '/ai/capabilities',
  'about': '/about',
  'about-team': '/about/team',
  'contact': '/contact',
  'socials': '/socials'
};

const basePath = path.resolve('src');

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(basePath);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // We only care about replacing onNavigate with useNavigate calls inside components that receive onNavigate
  // For most components, we can just replace 'onNavigate' with a custom hook or directly 'navigate' if we add it.

  // Actually, to make it simple, let's just make all hrefs Link or useNavigate.
});
