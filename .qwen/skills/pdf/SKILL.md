# PDF Skill

Навык для работы с PDF файлами.

## Capabilities

- Чтение и анализ PDF документов
- Извлечение текста из PDF
- Поиск информации в PDF файлах
- Конвертация PDF в другие форматы
- Создание и модификация PDF

## Usage

Для использования навыка:

```bash
skill: "pdf"
```

## Dependencies

- PyPDF2 или pdfplumber для чтения PDF
- reportlab для создания PDF
- pdf2image для конвертации в изображения

## Commands

```bash
# Установка зависимостей
pip install PyPDF2 pdfplumber reportlab pdf2image

# Примеры использования
python scripts/pdf_extract.py file.pdf
python scripts/pdf_merge.py file1.pdf file2.pdf -o output.pdf
python scripts/pdf_to_text.py file.pdf
```
