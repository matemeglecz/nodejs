/**
 * Elmenti a hajót az adatbázisba
 * Ha kap egy hajót akkor update, egyébként újat hoz létre
 * Átrányít a / -re, ha sikeres
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const ShipModel = requireOption(objectrepository, 'ShipModel')
    
    return function (req, res, next) {        
        if(
            typeof req.body.name === 'undefined' ||
            typeof req.body.lastport === 'undefined' ||
            typeof req.body.cannons === 'undefined'  
        ) {
            return next();
        }

        if(typeof res.locals.ship === 'undefined') {
            res.locals.ship = new ShipModel();
        }

        res.locals.ship.name = req.body.name;
        res.locals.ship.cannons = req.body.cannons;
        res.locals.ship.lastport = req.body.lastport;

        res.locals.ship.save(err => {
            if(err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};