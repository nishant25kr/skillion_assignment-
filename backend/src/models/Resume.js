import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    text: { 
        type: String,
        required: false
    },       
    embedding: { 
        type: [Number], 
        required: true 
    }, 
    metadata: {
        filename: String,
        uploadedAt: { 
            type: Date, 
            default: Date.now 
        },
    },
    
});


export default mongoose.model("Resume", ResumeSchema)