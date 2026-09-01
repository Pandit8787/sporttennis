import os
from PIL import Image
from pillow_heif import register_heif_opener
import shutil

register_heif_opener()

files = [
    ("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\IMG_0670.HEIC", "public/about/img_0670.jpg"),
    ("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\IMG_0804.HEIC", "public/about/img_0804.jpg"),
    ("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\IMG_8064.HEIC", "public/about/img_8064.jpg"),
    ("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\Major Dhayanchand Group Photo.HEIC", "public/about/major_dhyanchand_group_photo.jpg"),
]

for src, dest in files:
    try:
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        img = Image.open(src)
        img.save(dest, "JPEG")
        print(f"Converted {src} to {dest}")
    except Exception as e:
        print(f"Failed to convert {src}: {e}")

try:
    shutil.copy("C:\\Users\\harshit mishra\\OneDrive\\Downloads\\WhatsApp Image 2026-08-07 at 8.21.21 PM (1).jpeg", "public/about/whatsapp_image_aug7.jpg")
    print("Copied WhatsApp image.")
except Exception as e:
    print(f"Failed to copy WhatsApp image: {e}")
