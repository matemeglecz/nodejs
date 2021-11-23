/**
 * Betölti a kalózokat az adatbázisból
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const PirateModel = requireOption(objectrepository, 'PirateModel');

    return function(req, res, next) {
        PirateModel.find({ _ship: res.locals.ship }, (err, pirates) => {
            if(err){
                //return next(err)
                console.log("nincs pirates")
            }
        
            res.locals.pirates = pirates
            return next();
        })
    };
};