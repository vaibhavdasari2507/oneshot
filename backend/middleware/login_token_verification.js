const jwt = require('jsonwebtoken');

exports.login_token_verification = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token){
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    }
    // console.log(req.user);
    next();
}