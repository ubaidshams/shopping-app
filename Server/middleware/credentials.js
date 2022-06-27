const allowedOrigins = ["http://localhost:3000"];

const Credentials = (req, res, next) => {
    console.log(res.header)
    const origin = req.header.origin;
    if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin:", "http://localhost:3000");
  }
  next();
};

module.exports = Credentials;
