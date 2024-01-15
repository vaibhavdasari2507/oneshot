const jwt = require('jsonwebtoken');

exports.generate_jwt = async (user, res) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '3h' })
    // console.log('Token generated: ', token);
    return res.status(200).json({
        message: "Token generated successfully",
        token,
        success: true,
        data: user
    })
}