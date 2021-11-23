/**
 * Kitörli a hajót az adatbázisból
 * Átirányít a / -re utána
 */
const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

     return function (req, res, next) {
        if (typeof res.locals.ship === 'undefined') {
            return next();
        }

        res.locals.pirates.forEach(element => {
            element.remove(err => {
                if(err) {
                    return next(err);
                }
            })
        });

        res.locals.ship.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        })
            
    };
};