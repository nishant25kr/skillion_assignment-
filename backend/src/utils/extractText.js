import mammoth from "mammoth";
import {pdf } from "pdf-parse";

async function extractText(file) {
  if (file.mimetype === "application/pdf") {
    const data = await pdf(file.buffer);
    return data.text;
  } else if (
    file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const { value } = await mammoth.extractRawText({ buffer: file.buffer });
    return value;
  }
  return "";
}

export default extractText