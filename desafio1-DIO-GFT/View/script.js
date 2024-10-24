function classificarHeroi() {
    const nome = document.getElementById('nomeHeroi').value;
    const xp = Number(document.getElementById('xpHeroi').value);
    
    if (!nome || !xp) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    resultado.innerHTML += `
        <div class="heroi-item">
            O Herói de nome ${nome} está no nível de ${nivel}!
        </div>
    `;

    document.getElementById('nomeHeroi').value = '';
    document.getElementById('xpHeroi').value = '';
}