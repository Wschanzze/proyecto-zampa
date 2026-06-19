const fs = require('fs');
const path = require('path');

const urlMappings = {
  "rocket_gen_img_13f900373-1772055246276.png": "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=1200&q=80",
  "rocket_gen_img_12de1774a-1772055242519.png": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
  "rocket_gen_img_18a95e75f-1772055244198.png": "https://images.unsplash.com/photo-1627873649417-af48de6c3e13?auto=format&fit=crop&w=1200&q=80",
  "rocket_gen_img_164000f72-1772055244448.png": "https://images.unsplash.com/photo-1635632066217-718bda613b8b?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_1df01ecb2-1772055242250.png": "https://images.unsplash.com/photo-1576091160550-112173f7f869?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_170dbf862-1772055241444.png": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_18e933d73-1772055244031.png": "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_1b49e617c-1772055246999.png": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_1786efe03-1772055243502.png": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
  "rocket_gen_img_1fe1307b1-1772055242520.png": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_1646ad55d-1772055246842.png": "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_1d13c2a55-1772055244634.png": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_1db867033-1772055246916.png": "https://images.unsplash.com/photo-1500906186326-a87cae5baa9d?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_1f7c981af-1772055243555.png": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  "rocket_gen_img_18fe36158-1763294227977.png": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  "rocket_gen_img_17a451a8e-1772055245615.png": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80"
};

const files = [
  'src/app/home/components/TimelineGallery.tsx',
  'src/app/home/components/CultivarGrid.tsx',
  'src/app/home/components/HeroSection.tsx',
  'src/app/home/components/CtaSection.tsx',
  'src/app/home/components/ImpactSection.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let replacementCount = 0;
  
  Object.keys(urlMappings).forEach(oldFile => {
    const oldUrl = `https://img.rocket.new/generatedImages/${oldFile}`;
    const newUrl = urlMappings[oldFile];
    const regex = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    
    if (regex.test(content)) {
      content = content.replace(regex, newUrl);
      replacementCount++;
    }
  });
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`✓ ${path.basename(file)}: ${replacementCount} replacements`);
});

console.log('\nTodas las URLs han sido reemplazadas exitosamente.');
