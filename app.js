let campo = document.querySelector('input');
let listaDeParticipantes = [];


function adicionarAmigo() {
    if (campo.value === '') {
        alert('Digite um nome válido!'); 
        return;
    }

    listaDeParticipantes.push(campo.value);
        let lista = document.getElementById('listaAmigos');
        const listaAmigos = document.createElement('ul');
        listaAmigos.textContent = campo.value;
        lista.appendChild(listaAmigos);
        campo.value = '';
        
        
    }

function sortearAmigo() {
    let sortear = listaDeParticipantes[Math.floor(Math.random() * listaDeParticipantes.length)];
    let sorteado = document.getElementById('resultado');
    let lista = document.getElementById('listaAmigos');
            lista.style.display = 'none';
    sorteado.innerHTML = `O amigo secreto é: ${sortear}`;
    
}
