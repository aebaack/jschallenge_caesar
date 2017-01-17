const caesar = require('../caesarShift.js');
const expect = require('chai').expect;

describe('Encoder',function(){
    it('Function encode should exist', function() {
        expect(typeof caesar.encode).to.equal('function');
    });
    it('Should Encode Correctly', function(){
        expect(caesar.encode('The fault, dear Brutus, is not in our stars, but in ourselves.')).to.equal('Wkh idxow, ghdu Euxwxv, lv qrw lq rxu vwduv, exw lq rxuvhoyhv.');
        expect(caesar.encode('Et tu, Brute?')).to.equal('Hw wx, Euxwh?');
    });
    it('Should Encode Z Correctly', function(){
        expect(caesar.encode('Z')).to.equal('C');
        expect(caesar.encode('z')).to.equal('c');
    });
});