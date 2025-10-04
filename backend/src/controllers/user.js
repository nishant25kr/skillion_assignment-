import User from "../models/User.js";
import Resume from "../models/Resume.js";
import bcrypt from "bcrypt"

const generateAccessandRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)

        const accessToken = user.generateAccessToken();

        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken }

    } catch (err) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}

const register = async (req, res) => {

    const { name, email, password, userType } = req.body
    if (!name || !email || !password) {
        return res.status(400).json(
            { message: "Please give all details" }
        )
    }


    const existUser = await User.findOne({ email })

    if (existUser) {
        return res.status(400).json({ Message: "User already exist with this email" })
    }

    const hashedpassword = bcrypt.hash(password);

    const user = await User.create(
        {
            fullname,
            email,
            password: hashedpassword,
            userType
        }
    )

    const { accessToken, refreshToken } = generateAccessandRefreshToken(user._id);

    if (!user) {
        return res.status(400).json(
            { Error: "Error while creating User in db" }
        )
    }

    return res.status(200).json(
        {
            user: user,
            accessToken: accessToken,
            refreshToken: refreshToken,
            Message: "User created successfully"
        }
    )




}

const loginuser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json(
            { message: "Invalid email or password" }
        )
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(200).json(
            {
                message: "User does not exist"
            }
        )
    }

    const isPasswordCheck = await bcrypt.compare(password, user.password)

    if (!isPasswordCheck) {
        return res.status(400).json(
            {
                message: "Password is incorrect"
            }
        )
    }

    const { accessToken, refreshToken } = await generateAccessandRefreshToken(user._id);

    const LoggedInUser = await User.findById(user._id).select("-password -refreshToken")

    return res
        .status(200)
        .json(
            {
                user: LoggedInUser,
                accessToken: accessToken,
                refreshToken: refreshToken,
                message: "User logged successfully"
            }
        )


}

const logoutUser = async (req, res) => {

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshtoken: undefined,
            }
        },
        {
            new: true
        }
    )
    const option = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accesstoken", option)
        .clearCookie("refreshtoken", option)
        .json(new ApiResponse(200, {}, "User logged out "))
}

export {
    register,
    loginuser,
    logoutUser
}
