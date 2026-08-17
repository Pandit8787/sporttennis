from PIL import Image
try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except Exception:
    pass

src = r"C:\Users\harshit mishra\OneDrive\Downloads\IMG_8064.HEIC"
dest = r"C:\Users\harshit mishra\Desktop\download\public\centre-gallery\img_8064.jpg"

im = Image.open(src)
im.convert('RGB').save(dest, format='JPEG', quality=90)
print('converted')
