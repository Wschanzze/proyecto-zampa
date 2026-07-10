const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Pattern for the buttons: bg-teal text-[color] ... hover:bg-teal-light
  // We want to replace "bg-teal" with "bg-limestone-soft border border-umber/30"
  // "text-cream" or "text-white" with "text-umber"
  // "hover:bg-teal-light" with "hover:bg-umber-light hover:text-white"
  
  // It's safer to just replace 'bg-teal' -> 'bg-limestone-soft border border-umber/30'
  // 'text-cream' -> 'text-umber'
  // 'hover:bg-teal-light' -> 'hover:bg-umber-light hover:text-white hover:border-umber-light'
  
  // But wait, what if 'text-cream' is used elsewhere?
  // Let's do a more specific regex for the button classes.
  
  // Replace: bg-teal text-cream
  content = content.replace(/bg-teal text-cream/g, "bg-limestone-soft border border-umber/30 text-umber");
  // Replace: bg-teal text-white
  content = content.replace(/bg-teal text-white/g, "bg-limestone-soft border border-umber/30 text-umber");
  
  // Replace: hover:bg-teal-light
  content = content.replace(/hover:bg-teal-light/g, "hover:bg-umber hover:text-white hover:border-umber");

  // Also catch 'bg-teal' alone if it's a button (e.g., HeritageSection rounded-full icon button)
  content = content.replace(/bg-teal flex/g, "bg-limestone-soft border border-umber/30 text-umber flex");

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    changedFiles++;
  }
});

console.log(`Done. Updated ${changedFiles} files.`);
