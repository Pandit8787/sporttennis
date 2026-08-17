from pypdf import PdfReader
from pathlib import Path

pdf_path = Path(r'c:\Users\harshit mishra\OneDrive\Downloads\WEBSITE CONTENT.pdf')
reader = PdfReader(str(pdf_path))
text_parts = []
for i, page in enumerate(reader.pages, 1):
    text = page.extract_text() or ''
    text_parts.append(f'---PAGE {i}---\n{text}\n')
output = '\n'.join(text_parts)
Path('pdf_content_extracted.txt').write_text(output, encoding='utf-8')
print('Wrote', len(reader.pages), 'pages to pdf_content_extracted.txt')
