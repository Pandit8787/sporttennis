import fs from 'fs';

const files = [
  "public/players-slideshow/img_0808.mp4",
  "public/videos/img_1954.mp4",
  "public/videos/testimonials/C0004.mp4",
  "public/videos/testimonials/C0005.mp4",
  "public/videos/testimonials/C0006.mp4",
  "public/videos/testimonials/C0009.mp4",
  "src/assets/videos/whatsapp-video-1.mp4",
  "src/assets/videos/whatsapp-video-2.mp4"
];

for (const f of files) {
  try {
    const fd = fs.openSync(f, 'r');
    const buf = Buffer.alloc(200);
    const bytesRead = fs.readSync(fd, buf, 0, 200, 0);
    fs.closeSync(fd);
    const text = buf.toString('utf8', 0, bytesRead);
    const isLfs = text.startsWith('version https://git-lfs.github.com/spec/v1');
    const hex = buf.subarray(0, 16).toString('hex');
    console.log(`${f}: size=${fs.statSync(f).size} bytes, isLfsPointer=${isLfs}, hexPrefix=${hex}`);
    if (isLfs) {
      console.log(`   LFS content:\n${text}`);
    }
  } catch (err) {
    console.log(`${f}: ERROR ${err.message}`);
  }
}
