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
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src/app/home');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Target all <h1, <h2, <h3 tags and modify their className
  content = content.replace(/<(h[123])([^>]*)className="([^"]+)"/g, (match, tag, beforeClass, classes) => {
    let newClasses = classes;
    
    // Replace any heavier font weights with font-light
    newClasses = newClasses.replace(/\b(font-medium|font-semibold|font-bold|font-extrabold|font-normal|font-black)\b/g, 'font-light');
    
    // If there is no font-weight specified, add font-light
    if (!newClasses.includes('font-light')) {
      newClasses += ' font-light';
    }

    // Add uppercase if missing
    if (!newClasses.includes('uppercase')) {
      newClasses += ' uppercase';
    }

    // Clean up multiple spaces
    newClasses = newClasses.replace(/\s+/g, ' ').trim();

    return `<${tag}${beforeClass}className="${newClasses}"`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    changedFiles++;
  }
});

console.log(`Done. Updated ${changedFiles} files.`);
