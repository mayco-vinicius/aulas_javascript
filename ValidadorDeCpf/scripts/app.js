import { validarCPF } from './cpf.js'; // Importa a função de validar o CPF

// Seleciona a opção de informar o CPF
const form = document.getElementById('frmValidador') 

// Adicona um evento 'submit' ao formulario
form.addEventListener('submit', (event) => {
    // Impede o comportamento padao do formulario
    event.preventDefault();

    // Seleciona o input do CPF
    const inputCPF = document.getElementById('txtCpf');

    // Recebe o valor do CPF do input
    const CPF = inputCPF.value;

    // Validar o CPF
    const validCPF =  validarCPF(CPF);

    // Remove caracteres que nao sejam numericos
    const CPFformatado = CPF.replace(/[^0-9]/g, ''); 
    if (CPFformatado.length !== 11) {
        // Exibe uma mensagem de erro para CPF inválido
        document.getElementById('tagInvalido').style.display = 'block';
        document.getElementById('tagValido').style.display = 'none';
        return; // Interrompe a execução se o CPF não tiver 11 dígitos
    }

    // Mostra o resultado da validacao
    if (validCPF) {
        // Mostra o elemento "tagValido"
        document.getElementById('tagValido').style.display = 'block';
        document.getElementById('tagInvalido').style.display = 'none';
    } else {
        // Mostra o elemento "tagInvalido"
        document.getElementById('tagValido').style.display = 'none';
        document.getElementById('tagInvalido').style.display = 'block';
    }

    inputCPF.value = '';
})