import subprocess
import imageio_ffmpeg
import json
import os

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
print("FFmpeg path:", ffmpeg_exe)

files = [
  "public/players-slideshow/img_0808.mp4",
  "public/videos/img_1954.mp4",
  "public/videos/testimonials/C0004.mp4",
  "public/videos/testimonials/C0005.mp4",
  "public/videos/testimonials/C0006.mp4",
  "public/videos/testimonials/C0009.mp4",
  "src/assets/videos/whatsapp-video-1.mp4",
  "src/assets/videos/whatsapp-video-2.mp4"
]

for f in files:
    if not os.path.exists(f):
        print(f"File not found: {f}")
        continue
    cmd = [ffmpeg_exe, "-i", f]
    res = subprocess.run(cmd, stderr=subprocess.PIPE, stdout=subprocess.PIPE, text=True)
    print(f"\n==================== {f} ({os.path.getsize(f) / (1024*1024):.2f} MB) ====================")
    lines = [line.strip() for line in res.stderr.split('\n') if 'Stream #' in line or 'Duration:' in line or 'Input #' in line]
    for line in lines:
        print("  ", line)
