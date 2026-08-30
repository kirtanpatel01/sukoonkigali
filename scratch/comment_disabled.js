import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const disabled = JSON.parse(fs.readFileSync(path.join(__dirname, '../scratch_disabled_songs.json'), 'utf8'));
const filePath = path.join(__dirname, '../src/data/songs.ts');
let content = fs.readFileSync(filePath, 'utf8');

let commentedCount = 0;
disabled.forEach(d => {
  const targetId = d.youtubeId;
  const regex = new RegExp(`(\\{\\s*youtubeId:\\s*['"]${targetId}['"][\\s\\S]*?\\},?)`, 'g');
  if (regex.test(content)) {
    content = content.replace(regex, (match) => {
      commentedCount++;
      return `/* TODO: Replace with playable embeddable YouTube video ID\n  ${match.trim()}\n  */`;
    });
  }
});

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Successfully commented out ${commentedCount} disabled songs with TODO notes.`);
