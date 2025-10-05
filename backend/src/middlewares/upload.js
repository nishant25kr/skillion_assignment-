import multer from "multer";
import path from "path";

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes/"); // folder to save PDFs
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "_" + file.originalname;
    cb(null, uniqueSuffix); // unique file name
  }
});

export const upload = multer({ 
  storage, 
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed!"));
    }
  } 
});

export default upload;
