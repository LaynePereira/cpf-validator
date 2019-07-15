const cpfValidator = (cpf) => {
  cpf = cpf.split('').map(Number); // transforma a string em array; transforma o array de string em números;
  return digitsValidation(cpf, 9, 10) === cpf[9] && digitsValidation(cpf, 10, 11) === cpf[10] ? true : false;
}; 
const digitsValidation = (cpf, index, mult) => {
  cpf = cpf.slice(0, index);
  const result = cpf.reduce((acum, curr) => {
    return acum + (curr * (mult --));
  }, 0);
  return (result * 10) % 11;
};
module.exports.cpfValidator = cpfValidator;
