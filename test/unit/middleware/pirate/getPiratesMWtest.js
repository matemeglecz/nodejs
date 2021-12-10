var expect = require('chai').expect;
var getPiratesMW = require('../../../../middlewares/pirate/getPiratesMW');

describe('getPirates middleware test', function () {

  it('should set res.locals.pirates with pirates', function (done) {
    const mw = getPiratesMW({
            PirateModel: {
                find: (some, cb) => {
                    expect(some).to.be.eql({_ship: '22'});
                    cb(null, ['pirate1', 'pirate2'])
                  }
            }
    })

    const resMock = {
        locals: {
            ship: '22',
        }
    }

    mw(
        {},
        resMock,
        (err) => {
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({ship: '22', pirates: ['pirate1', 'pirate2']})
            done();
        }
    )
  });

  it('should call next with err, db error', function (done) {
    const mw = getPiratesMW({
            PirateModel: {
                find: (some, cb) => {
                    expect(some).to.be.eql({_ship: '22'});
                    cb('problem', null)
                  }
            }
    })

    const resMock = {
        locals: {
            ship: '22',
        }
    }

    mw(
        {},
        resMock,
        (err) => {
            expect(err).to.be.eql('problem');            
            done();
        }
    )
  });  
});