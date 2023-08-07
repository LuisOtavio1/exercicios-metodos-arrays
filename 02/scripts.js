const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupo(nomes, tamanhoDoGrupo) {
    let c = 1;
    let i = 0;
    let indexFinal = tamanhoDoGrupo;
    while(i < nomes.length) {
        grupo = nomes.slice(i, indexFinal);
        grupo = grupo.join(', ');
        console.log(`Grupo${c}: ${grupo}.`);
        c++;
        i += tamanhoDoGrupo;
        indexFinal += tamanhoDoGrupo;
    }
}

dividirGrupo(nomes, tamanhoDoGrupo);