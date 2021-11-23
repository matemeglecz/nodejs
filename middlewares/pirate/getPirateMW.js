/**
 * Betölti egy kalózt az adatbázisból a :pirate paraméter alapján
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const PirateModel = requireOption(objectrepository, 'PirateModel');

    return function (req, res, next) {
        PirateModel.findOne({_id: req.params.pirateid}, (err, pirate) => {
            if(err || !pirate){
                //return next(err)
                console.log("nincs pirate")
            }
        

            res.locals.pirate = pirate
            return next();
        })
    };
};
