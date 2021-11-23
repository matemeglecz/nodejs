/**
 * Kitörli a kalózt az adatbázisból
 * Átirányít a /pirates/:shipid/ -re utána
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

     return function (req, res, next) {
        if (typeof res.locals.pirate === 'undefined') {
            return next();
        }

        res.locals.pirate.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/pirates/${res.locals.ship._id}`);
        })
            
    };
};