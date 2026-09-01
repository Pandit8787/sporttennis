"""
Convert user-provided HEIC/JPG images to WebP for hero banner.
Replaces hero-banner-1, 2, 3 with the three new images.
"""
import pillow_heif
from PIL import Image
import os

pillow_heif.register_heif_opener()

sources = [
    (r"C:\Users\harshit mishra\OneDrive\Downloads\IMG_0268.HEIC",         "hero-banner-1.webp"),
    (r"C:\Users\harshit mishra\OneDrive\Downloads\IMG_8433.JPG",           "hero-banner-2.webp"),
    (r"C:\Users\harshit mishra\OneDrive\Downloads\Major Dhayanchand Group Photo.HEIC", "hero-banner-3.webp"),
]

dest_dir = r"C:\Users\harshit mishra\Desktop\download\public\hero-banner"

for src_path, dest_name in sources:
    print(f"Processing: {src_path}")
    img = Image.open(src_path)
    # Convert to RGB (WebP doesn't support all modes)
    img = img.convert("RGB")
    # Resize to max 2560px wide keeping aspect ratio for quality hero display
    max_w = 2560
    if img.width > max_w:
        ratio = max_w / img.width
        new_h = int(img.height * ratio)
        img = img.resize((max_w, new_h), Image.LANCZOS)
    dest_path = os.path.join(dest_dir, dest_name)
    img.save(dest_path, "WEBP", quality=90, method=6)
    print(f"  -> Saved: {dest_path}  ({img.width}x{img.height})")

print("Done!")
