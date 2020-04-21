module.exports = (req, res, next) => {
    req.body = {
        name: "Somebody that is not famous :(",
        age: "34",
    };
    next();
};
