export function validarCPF(cpf) {
  // Remove caracteres extras
  cpf = cpf.replace(/[^0-9]/g, "");

  // Verifica se o CPF tem o tamanho correto
  if (cpf.length !== 11) return false;

  // Cálculo do primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }

  let resto = soma % 11;
  if (resto === 10 || resto === 0) {
    resto = 0;
  } else {
    return false;
  }

  // Cálculo do segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }

  resto = soma % 11;
  if (resto === 10 || resto === 0) {
    resto = 0;
  } else {
    return false;
  }

  return cpf === resto.toString();
}
