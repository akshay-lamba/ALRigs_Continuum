import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const basePath = path.resolve('src');

// Find all .tsx files
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

  // Simply replacing onNavigate prop typing across all pages that might have it
  content = content.replace(/onNavigate\?:?\s*\(\s*page:\s*string\s*\)\s*=>\s*void/g, 'onNavigate?: (page: string) => void');

  // Let's actually not do regex replace for React Router everywhere, it's safer to provide a AppWrapper.tsx and map the strings to paths, 
  // or we can just replace 'home' with '/', 'products' with '/products', etc.
  
  fs.writeFileSync(file, content, 'utf8');
});
