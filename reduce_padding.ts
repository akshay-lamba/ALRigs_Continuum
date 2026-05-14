import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/components/ArcEnginePage.tsx',
  'src/components/ITFrameworkPage.tsx',
  'src/components/GenericPage.tsx',
  'src/components/HubPage.tsx',
  'src/components/ProductsHubPage.tsx',
  'src/components/ProductsPage.tsx'
];

for (const file of filesToUpdate) {
  const absolutePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');

    content = content.replace(/pt-48/g, 'pt-32');
    content = content.replace(/pb-32/g, 'pb-20');
    content = content.replace(/py-32/g, 'py-20');
    content = content.replace(/mb-32/g, 'mb-20');
    content = content.replace(/py-24/g, 'py-16');

    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log('Fixed paddings in ' + file);
  }
}
