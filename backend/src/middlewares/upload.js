import multer from "multer";

// Store file in memory (you can also save to disk)
const storage = multer.memoryStorage();

// Create upload middleware
const upload = multer({ storage });

export default upload;
