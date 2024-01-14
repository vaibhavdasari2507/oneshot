const jwt = require('jsonwebtoken');

exports.is_authenticated = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "401 not authorized :("
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);
    next();
}