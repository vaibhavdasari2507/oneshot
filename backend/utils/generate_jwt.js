const jwt = require('jsonwebtoken');

exports.generate_jwt = async (user, res) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '3h' })
    res.status(200).json({
        message: "Token generated successfully", token
    })
}