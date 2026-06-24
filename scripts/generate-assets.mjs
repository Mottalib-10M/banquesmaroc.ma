import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const BRAND = '#1E40AF';

async function generateOG() {
  const svg = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="${BRAND}"/>
    <rect x="60" y="60" width="1080" height="510" rx="24" fill="#1e3a8a" opacity="0.4"/>
    <text x="600" y="280" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="72" fill="#fff">Banques Maroc</text>
    <text x="600" y="370" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="400" font-size="36" fill="#bfdbfe">Comparateur banques, simulateurs credit</text>
    <text x="600" y="500" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="400" font-size="24" fill="#93c5fd">banquesmaroc.ma</text>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(join(publicDir, 'og-default.png'));
  console.log('og-default.png created');
}

async function generateIcon(size, filename) {
  const svg = `
  <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" rx="${Math.round(size * 0.18)}" fill="${BRAND}"/>
    <text x="${size / 2}" y="${size * 0.7}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="${Math.round(size * 0.6)}" fill="#fff">B</text>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(join(publicDir, filename));
  console.log(`${filename} created`);
}

async function main() {
  await generateOG();
  await generateIcon(192, 'icon-192.png');
  await generateIcon(512, 'icon-512.png');
  await sharp(join(publicDir, 'og-default.png')).toFile(join(publicDir, 'logo.png'));
  console.log('logo.png created');
}

main().catch(console.error);
