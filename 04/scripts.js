const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
function atualizarLista(pacientes,tipoOperacao, nomePaciente) {
    if (tipoOperacao === "atender") {
        console.log(`paciente ${nomePaciente} foi atendido.`);
        pacientes.shift();
    } else {
        pacientes.push(nomePaciente);
        console.log(`paciente ${nomePaciente} foi agendado.`);
        pacientes.shift();
        
    }

    console.log(`Lista: ${pacientes.join(", ")}`);
}

atualizarLista(pacientes, "atender", pacientes[0]);
atualizarLista(pacientes, "agendar", pacientes[0]);
atualizarLista(pacientes, "agendar", pacientes[0]);