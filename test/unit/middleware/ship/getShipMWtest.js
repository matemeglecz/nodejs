var expect = require('chai').expect;
var getShipMW = require('../../../../middlewares/ship/getShipMW');

describe('getShip middleware test', function () {

  it('should set res.locals.ship with ship', function (done) {
    const mw = getShipMW({
            ShipModel: {
                findOne: (some, cb) => {
                    expect(some).to.be.eql({_id: '22'});
                    cb(null, 'bigship')
                  }
            }
    })

    const resMock = {
        locals: {}
    }

    mw(
        {
            params: {
                shipid: '22',
            }
        },
        resMock,
        (err) => {
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({ship: 'bigship'})
            done();
        }
    )
  });

  it('should call next with err, db error', function (done) {
    const mw = getShipMW({
        ShipModel: {
            findOne: (some, cb) => {
                expect(some).to.be.eql({_id: '22'});
                cb('problem', null)
              }
        }
})

    const resMock = {
        locals: {}
    }

    mw(
        {
            params: {
                shipid: '22',
            }
        },
        resMock,
        (err) => {
            expect(err).to.be.eql('problem');            
            done();
        }
    )
  });  

  it('should call next with err, ship undefined, not in db', function (done) {
    const mw = getShipMW({
        ShipModel: {
            findOne: (some, cb) => {
                expect(some).to.be.eql({_id: '22'});
                cb(undefined, null)
              }
        }
})

    const resMock = {
        locals: {}
    }

    mw(
        {
            params: {
                shipid: '22',
            }
        },
        resMock,
        (err) => {
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({})
            done();
        }
    )
  });
});