/*
Vinculação dos elementos HTML a uma constante javascript
para que possamos manipular o elemento via código.
*/
// elemento <button> com atributo id=btnClique 
const btnClique = document.getElementById("btnClique");
// elemento <button> com atributo id=btnLimpa 
const btnLimpar = document.getElementById("btnLimpa");
// elemento <h1> com atributo id=txtContador
const txtContador = document.getElementById("txtContador"); 

// Declaração de uma variável para registrar a contagem
let contador = 0;

// Função que atualiza o contador visualizado.
function atualizaContador(){
    // utiliza a propriedade innerText do elemento
    // para alterar o texto. 
    txtContador.innerText = contador;
}

// Adiciona evento de clique ao elemento vinculado a const btnClique 
btnClique.addEventListener("click",(evt) => {
    contador++; // incrementa valor da variável
    atualizaContador(); // executa a função atualizaContador
});

// Adiciona evento de clique ao elemento vinculado a const btnLimpar
btnLimpar.addEventListener("click",(evt) => {
    contador = 0; // altera o valor da variável para 0
    atualizaContador(); // executa a função atualizaContador
});