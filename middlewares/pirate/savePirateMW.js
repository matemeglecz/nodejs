/**
 * Elmenti a kalózt az adatbázisba
 * Ha kap egy kalózt akkor update, egyébként újat hoz létre
 * Átrányít a /pirates/:shipip -re, ha sikeres
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const PirateModel = requireOption(objectrepository, 'PirateModel')
    
    return function(req, res, next) {        
        if(
            typeof req.body.name === 'undefined' ||
            typeof req.body.parrots === 'undefined' ||
            typeof req.body.lostteeth === 'undefined' ||
            typeof res.locals.ship === 'undefined'
        ) {     
            return next();
        }

        if(typeof res.locals.pirate === 'undefined') {
            res.locals.pirate = new PirateModel();
        }

        res.locals.pirate.name = req.body.name;
        res.locals.pirate.parrots = req.body.parrots;
        res.locals.pirate.lostteeth = req.body.lostteeth;
        res.locals.pirate._ship = res.locals.ship._id;

        res.locals.pirate.save(err => {
            if(err) {
                console.log("problem")
            }
            
            return res.redirect(`/pirates/${res.locals.ship._id}`);
        });
    };
};