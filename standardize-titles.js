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

const files = walk('./src/app');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Remove font-fraunces entirely
  content = content.replace(/font-fraunces\s*/g, "");

  // 2. Ensure all text inside heading classes have uppercase and font-light where applicable.
  // We'll look for common text color classes used in headings that should just be charcoal or white
  // e.g. text-umber-dark -> text-charcoal
  content = content.replace(/text-umber-dark/g, "text-charcoal");

  // Some subtitles used text-teal or text-umber. We changed text-teal to text-umber for "campero",
  // but the user wants "quiero que sea fuente negra o blanca segun el contraste... no quiero fuentes convinadas y dos colores de fuentes".
  // Let's replace any text-umber in headings (or globally in these files if they aren't buttons).
  // Wait, the buttons use text-umber! We can't globally replace text-umber.
  
  // 3. Let's fix HeroSection manually
  if (file.includes('HeroSection.tsx')) {
    content = content.replace(/font-extrabold uppercase/g, "font-light uppercase");
    content = content.replace(/font-light italic text-white\/90 tracking-wide/g, "font-light uppercase text-white tracking-widest");
  }

  // 4. Also replace instances of `text-teal` with `text-charcoal` just in case some were missed in headings
  // We did replace text-teal in buttons, but maybe in spans inside headings?
  // Actually I'll regex replace `<span className="text-[^"]+">([^<]+)<\/span>` inside headings? 
  // Easier: replace text-teal and text-umber inside headings using a regex.
  // I will just use `multi_replace_file_content` if there are specific ones, but let's see.

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    changedFiles++;
  }
});

console.log(`Done. Updated ${changedFiles} files.`);
