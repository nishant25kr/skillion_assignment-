import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    },
    userType: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    }
}, { timestamps: true });

// Generate Access Token
UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            name: this.name,
            email: this.email,
            userType: this.userType
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

// Generate Refresh Token
UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export default mongoose.model("User", UserSchema);
