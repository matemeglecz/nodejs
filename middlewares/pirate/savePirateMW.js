/**
 * Elmenti a kalózt az adatbázisba
 * Ha kap egy kalózt akkor update, egyébként újat hoz létre
 * Átrányít a /pirates/:shipip -re, ha sikeres
 */

 module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};