import os
from PIL import Image
from pillow_heif import register_heif_opener
import shutil

register_heif_opener()

os.makedirs("public/hero-slider", exist_ok=True)

files = [
    ("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\IMG_0268.HEIC", "public/hero-slider/img_0268.jpg"),
    ("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\IMG_0670.HEIC", "public/hero-slider/img_0670.jpg"),
    ("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\IMG_8655.HEIC", "public/hero-slider/img_8655.jpg"),
]

for src, dest in files:
    try:
        img = Image.open(src)
        img = img.convert("RGB")
        img.save(dest, "JPEG", quality=90)
        print(f"Converted {src} to {dest}")
    except Exception as e:
        print(f"Failed to convert {src}: {e}")

try:
    shutil.copy("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\ChatGPT Image Aug 13, 2026, 06_32_44 PM.png", "public/hero-slider/chatgpt_image.png")
    print("Copied PNG.")
except Exception as e:
    print(f"Failed to copy PNG: {e}")

try:
    shutil.copy("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\IMG_8433.JPG", "public/hero-slider/img_8433.jpg")
    print("Copied JPG.")
except Exception as e:
    print(f"Failed to copy JPG: {e}")
