/**
 * Betölti a hajókat az adatbázisból
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const ShipModel = requireOption(objectrepository, 'ShipModel');

    return function (req, res, next) {
        ShipModel.find({}, (err, ships) => {
            if(err){
                return next(err);
            }
        

            res.locals.ships = ships
            return next();
    })};
};