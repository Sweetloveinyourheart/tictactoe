import jwt from "jsonwebtoken"

interface TokenPayload {
    _id: string
    username: string
}

export function generateTokens({ _id, username }: TokenPayload) {
    const accessToken = jwt.sign(
        { _id, username },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    )

    const refreshToken = jwt.sign(
        { _id, username },
        process.env.JWT_SECRET,
        {
            expiresIn: '24h'
        }
    )

    return {
        accessToken,
        refreshToken
    }
}