import User from "../models/User.js"
import jwt from "jsonwebtoken"

export const verifyJWT = async (req, res, next) => {
    try {
        const Token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if (!Token) {
            return res.status(200).json({ message: "Token is not there" })
        }

        const decodedToken = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password -refreshtoken")

        if (!user) {
            return res.status(200).json({ message: "User not found" })
        }

        req.user = user
        next()
    } catch (err) {
        return res.status(400).json({ message: "Invalid token" })
    }


}