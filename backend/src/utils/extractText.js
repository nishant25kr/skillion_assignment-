import fs from "fs";
import mammoth from "mammoth";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

async function extractText(file) {
  if (!file || !file.mimetype || !file.path) {
    throw new Error("Invalid file provided for text extraction");
  }

  const buffer = fs.readFileSync(file.path);

  if (file.mimetype === "application/pdf") {
    const data = await pdfParse(buffer);
    return data.text;
  } else if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const { value } = await mammoth.extractRawText({ buffer });
    return value;
  }

  return "";
}

export default extractText;
