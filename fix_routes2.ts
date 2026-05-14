import * as fs from 'fs';
import * as path from 'path';

let filepath = path.resolve('src/components/ProductShowcase.tsx');
let content = fs.readFileSync(filepath, 'utf8');
content = content.replace("navigate(`product-${product.id}`)", "navigate(product.id === 'pro' ? '/products/proai' : `/products/${product.id}`)");
fs.writeFileSync(filepath, content, 'utf8');

filepath = path.resolve('src/components/TeamsSection.tsx');
content = fs.readFileSync(filepath, 'utf8');
content = content.replace("navigate('arc-team')", "navigate('/about/team')");
fs.writeFileSync(filepath, content, 'utf8');
