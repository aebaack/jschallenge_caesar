const caesar = require('../caesarShift.js');
const expect = require('chai').expect;

describe('Decoder',function(){
    it('Function decode Should exist', function() {
        expect(typeof caesar.decode).to.equal('function');
    });
    it('Should Decode Correctly', function(){
        expect(caesar.decode('Yhql, ylgl, ylfl.')).to.equal('Veni, vidi, vici.');
        expect(caesar.decode('Dohd ldfwd hvw.')).to.equal('Alea iacta est.');
    });
    it('Should Decode A Correctly', function(){
        expect(caesar.decode('A')).to.equal('X');
        expect(caesar.decode('a')).to.equal('x');
    });
});