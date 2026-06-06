const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'hero/hero-bg.jpg': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop',
  'about/classroom-learning.jpg': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
  'programs/playgroup.jpg': 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=400&fit=crop',
  'programs/nursery.jpg': 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop',
  'programs/pre-k.jpg': 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop',
  'programs/kindergarten.jpg': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  'facilities/classroom.jpg': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
  'facilities/playground.jpg': 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop',
  'facilities/pool.jpg': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop',
  'facilities/library.jpg': 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop',
  'facilities/art-studio.jpg': 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop',
  'facilities/garden.jpg': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
  'testimonials/parent-1.jpg': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
  'testimonials/parent-2.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  'admissions/happy-family.jpg': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
  'team/principal.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('📥 Downloading placeholder images...\n');
  
  for (const [filepath, url] of Object.entries(images)) {
    const fullPath = path.join(__dirname, '..', 'public', 'images', filepath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    try {
      await downloadImage(url, fullPath);
    } catch (error) {
      console.error(`❌ Error downloading ${filepath}:`, error.message);
    }
  }
  
  console.log('\n🎉 All images downloaded!');
}

downloadAll();