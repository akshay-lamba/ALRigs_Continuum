import * as fs from 'fs';
import * as path from 'path';

const file = path.resolve('src/components/ProductShowcase.tsx');
let content = fs.readFileSync(file, 'utf8');

// remove the badges
content = content.replace(/<div className="absolute -top-4 -right-4 px-3 py-1 bg-\[\#0f172a\].*?\{product\.badge\}\n\s*<\/div>/g, '');

fs.writeFileSync(file, content, 'utf8');
