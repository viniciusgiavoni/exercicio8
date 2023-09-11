const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));


let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    calculaMedia(); 
});

function adicionarLinha() {
    const inputNameAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNameAtividade.value)) {
        alert(`A atividade: ${inputNameAtividade.value} já foi inserida.`);
    } else {
        atividades.push(inputNameAtividade.value);
        notas.push(parseFloat(notaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNameAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNameAtividade.value = ' ';
    notaAtividade.value = ' ';

};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function calculaMedia () {

    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

};

function calculaMediaFinal() {
    
    let somaNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    
    return somaNotas / notas.length;
};