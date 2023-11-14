import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    console.log(req.cookies);
    if (token) {
        jwt.verify(token, process.env.TOKEN_ACCESS_SECRET, (err, data) => {
            if (err) {
                res.status(498).json({ message: 'token is not valid' });
            }
            next();
        });
    } else {
        res.status(498).json({ message: 'token is not valid' });
    }
};

export default verifyToken;
