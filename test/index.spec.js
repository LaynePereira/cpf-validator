const chai = require('chai');
const expect = chai.expect;
const cpf = require('../index');


describe('cpfValidator', () => {

    it('CPF is not valid', () => {
        expect(cpf.cpfValidator('391.071.738-14')).to.equal(false);
    });

    it('CPF is valid', () => {
        const CPF_TEST = '39107173814';
        expect(cpf.cpfValidator(CPF_TEST)).to.equal(true);
    });

    it('CPF is not valid', () => {
        const CPF_TEST = '39107173815';
        expect(cpf.cpfValidator(CPF_TEST)).to.equal(false);
    });

    it('CPF is incomplete', () => {
        const CPF_TEST = '3910717';
        expect(cpf.cpfValidator(CPF_TEST)).to.equal(false);
    });

    it('CPF can not be empty', () => {
        const CPF_TEST = '';
        expect(cpf.cpfValidator(CPF_TEST)).to.equal(false);
    });
    it('CPF is valid', () => {
        const CPF_TEST = '10726985368';
        expect(cpf.cpfValidator(CPF_TEST)).to.equal(true);
    });
});