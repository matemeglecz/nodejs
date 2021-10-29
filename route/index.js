const renderMW = require('../middlewares/renderMW');
const delPirateMW = require('../middlewares/pirate/delPirateMW');
const getPirateMW = require('../middlewares/pirate/getPirateMW');
const getPiratesMW = require('../middlewares/pirate/getPiratesMW');
const savePirateMW = require('../middlewares/pirate/savePirateMW');
const getShipMW = require('../middlewares/ship/getShipMW');
const getShipsMW = require('../middlewares/ship/getShipsMW');
const delShipMW = require('../middlewares/ship/delShipMW');
const saveShipMW = require('../middlewares/ship/saveShipMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/new',
        saveShipMW(objRepo),
        renderMW(objRepo, 'editship'));

    app.use('/edit/:shipid',
        getShipMW(objRepo),
        saveShipMW(objRepo),
        renderMW(objRepo, 'editship'));

    app.get('/del/:shipid',
        getShipMW(objRepo),
        delShipMW(objRepo));

    app.get('/pirates/:shipid',
        getShipMW(objRepo),
        getPiratesMW(objRepo),
        renderMW(objRepo, 'pirates'));

    app.get('/pirates/:shipid/new',
        getShipMW(objRepo),
        savePirateMW(objRepo),
        renderMW(objRepo, 'editpirate'));

    app.get('/pirates/:shipid/edit/:pirateid',
        getShipMW(objRepo),
        getPirateMW(objRepo),
        savePirateMW(objRepo),
        renderMW(objRepo, 'editpirate'));

    app.get('/pirates/:shipid/del/:pirateid',
        getShipMW(objRepo),
        getPirateMW(objRepo),
        delPirateMW(objRepo));

    app.get('/',
        getShipsMW(objRepo),
        renderMW(objRepo, 'index'));
};