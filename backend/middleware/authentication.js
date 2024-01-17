const jwt = require('jsonwebtoken');

exports.is_authenticated = (req, res, next) => {
    console.log(req.headers)
    const authHeader = req.headers["authorization"];

    console.log(authHeader)
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "401 not authorized :("
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    // console.log(req.user);
    next();
}