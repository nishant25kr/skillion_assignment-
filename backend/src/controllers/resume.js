import { GoogleGenAI } from '@google/genai';
import Resume from "../models/Resume.js";
import extractText from "../utils/extractText.js";

const api_Key = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: api_Key });


// ✅ Define generation configuration
const generationConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
};

// ✅ Define the model configuration
const modelConfig = {
    model: "gemini-2.5-pro",
    generationConfig,
};

const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const text = await extractText(req.file);

        
        // ✅ Generate content using the model
        // const response = await ai.models.embedContent(modelConfig, text);
        
        const response = await ai.models.embedContent(modelConfig,{
            input: [text], // ✅ must be an array
        });
        console.log(response)

        // ✅ Assuming Gemini returns JSON array of numbers as string
        const embedding = JSON.parse(response.text());

        const resume = new Resume({
            text,
            embedding,
            metadata: { filename: req.file.originalname },
        });

        await resume.save();

        res.json({ success: true, message: "Resume uploaded and embedded with Gemini!" });
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json({ success: false, message: "Resume upload failed" });
    }
};

export { uploadResume };
