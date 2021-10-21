/**
 * Kitörli a kalózt az adatbázisból
 * Átirányít a /pirates/:shipid/ -re utána
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};