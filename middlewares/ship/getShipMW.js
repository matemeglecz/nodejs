/**
 * Betölti egy hajót az adatbázisból a :ship paraméter alapján
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    const ShipModel = requireOption(objectrepository, 'ShipModel');
    
    return function (req, res, next) {
        ShipModel.findOne({_id: req.params.shipid}, (err, ship) => {
            if(err || !ship){
                console.log("nincs ship")
            }

            res.locals.ship = ship
            console.log(req.body)
            return next();
        })    
    };
};