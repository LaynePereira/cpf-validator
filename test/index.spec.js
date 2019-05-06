const chai = require('chai');
const expect = chai.expect;
const cpf = require('../index');


describe('cpfValidator', () => {

    it('CPF is not valid', () => {
        expect(cpf.cpfValidator('391.071.738-14')).to.equal(false);
    });

    it('CPF is valid', () => {
        expect(cpf.cpfValidator('39107173814')).to.equal(true);
    });

    it('CPF is not valid', () => {
        expect(cpf.cpfValidator('39107173815')).to.equal(false);
    });

    it('CPF is incomplete', () => {
        expect(cpf.cpfValidator('3910717')).to.equal(false);
    });

    it('CPF can not be empty', () => {
        expect(cpf.cpfValidator('')).to.equal(false);
    });
    it('CPF is valid', () => {
        expect(cpf.cpfValidator('10726985368')).to.equal(true);
    });
});