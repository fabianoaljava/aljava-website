const fs = require('fs');

const rawHtml = fs.readFileSync('NajmAI Reference/NajmAI.html', 'utf8');

// A very naive regex to pull out text nodes or heading/paragraph content
// Because it's minified, pulling text using a regex between > and <
const matches = rawHtml.match(/>([^<]+)</g);

if (matches) {
  const texts = matches
    .map((m) => m.substring(1, m.length - 1).trim())
    .filter((t) => t.length > 5 && !t.includes('var(') && !t.includes('{'));
  const uniqueTexts = [...new Set(texts)];
  fs.writeFileSync('najmai-texts.txt', uniqueTexts.join('\n'), 'utf8');
  console.log('Extracted texts to najmai-texts.txt');
}
