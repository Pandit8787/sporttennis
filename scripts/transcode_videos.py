import os
import subprocess
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
print("FFmpeg executable:", ffmpeg_exe)

videos_to_transcode = [
    ("public/players-slideshow/img_0808.mov", "public/players-slideshow/img_0808.mp4"),
    ("public/videos/img_1954.mov", "public/videos/img_1954.mp4"),
    ("public/videos/testimonials/C0004_original.MP4", "public/videos/testimonials/C0004.mp4"),
    ("public/videos/testimonials/C0005_original.MP4", "public/videos/testimonials/C0005.mp4"),
    ("public/videos/testimonials/C0006_original.MP4", "public/videos/testimonials/C0006.mp4"),
    ("public/videos/testimonials/C0009_original.MP4", "public/videos/testimonials/C0009.mp4"),
    ("src/assets/videos/whatsapp-video-1.mp4", "src/assets/videos/whatsapp-video-1_temp.mp4"),
    ("src/assets/videos/whatsapp-video-2.mp4", "src/assets/videos/whatsapp-video-2_temp.mp4"),
]

for in_path, out_path in videos_to_transcode:
    if not os.path.exists(in_path):
        print(f"Skipping {in_path} (does not exist)")
        continue
    
    print(f"\n--- Transcoding {in_path} -> {out_path} ---")
    orig_size = os.path.getsize(in_path)
    
    cmd = [
        ffmpeg_exe,
        "-y",
        "-i", in_path,
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "23",
        "-vf", "scale='min(1920,iw)':-2",
        "-r", "30",
        "-c:a", "aac",
        "-b:a", "128k",
        "-ar", "44100",
        "-movflags", "+faststart",
        out_path
    ]
    
    try:
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
        new_size = os.path.getsize(out_path)
        reduction = (1 - (new_size / orig_size)) * 100
        print(f"Completed! Size: {orig_size / (1024*1024):.2f} MB -> {new_size / (1024*1024):.2f} MB ({reduction:.1f}% reduction)")
    except subprocess.CalledProcessError as e:
        print(f"Failed to transcode {in_path}: {e}")
        print("Error details:")
        print(e.stderr)

whatsapp_remaps = [
    ("src/assets/videos/whatsapp-video-1_temp.mp4", "src/assets/videos/whatsapp-video-1.mp4"),
    ("src/assets/videos/whatsapp-video-2_temp.mp4", "src/assets/videos/whatsapp-video-2.mp4"),
]

for temp_path, target_path in whatsapp_remaps:
    if os.path.exists(temp_path):
        print(f"Replacing {target_path} with optimized version...")
        if os.path.exists(target_path):
            os.remove(target_path)
        os.rename(temp_path, target_path)

# Clean up original source files to save space
for in_path, out_path in videos_to_transcode:
    if "_original.MP4" in in_path and os.path.exists(in_path):
        print(f"Cleaning up temporary file {in_path}...")
        os.remove(in_path)

print("\nTranscoding done!")
