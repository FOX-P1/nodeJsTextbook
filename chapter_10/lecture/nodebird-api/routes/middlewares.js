const jwt = require('jsonwebtoken');
const RateLimit = require('express-rate-limit');

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send('로그인 필요입니닷!');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        const message = encodeURIComponent('로그인한 상태 입니닷!');
        res.redirect(`/?error=${message}`);
    }
};

exports.verifyToken = (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        return next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') { // 유효 기간 초과
            return res.status(419).json({
                code: 419,
                message: '토근이 만료되었습니닷!',
            });
        }
        return res.status(401).json({
            code: 401,
            message: '유효하지 않은 토큰입니닷!',
        });
    }
};

exports.apiLimiter = new RateLimit({
    windowMs: 60 * 1000,
    max: 10,
    delayMs: 0,
    handler(req, res) {
        res.status(this.statusCode).json({ // 429
            code: this.statusCode,
            message: '1분에 열 번만 요청할 수 있습니다.',
        })
    },
});

exports.deprecated = (req, res) => {
    res.status(410).json({
        code: 410,
        message: '새로운 버전이 나왔습니다. 새로운 버전을 사용하세요.',
    });
};