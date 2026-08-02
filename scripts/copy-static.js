const fs = require('fs');
const path = require('path');

const copyDir = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const files = fs.readdirSync(src, { withFileTypes: true });
  for (const file of files) {
    const srcPath = path.join(src, file.name);
    const destPath = path.join(dest, file.name);
    if (file.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

if (fs.existsSync('public')) {
  console.log('📁 Copying public folder...');
  copyDir('public', '.next/standalone/public');
}

if (fs.existsSync('.next/static')) {
  console.log('📁 Copying static folder...');
  copyDir('.next/static', '.next/standalone/.next/static');
}

console.log('✅ Post-build copy completed!');
