/**
 * Kitörli a hajót az adatbázisból
 * Átirányít a / -re utána
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};