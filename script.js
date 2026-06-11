document.addEventListener("DOMContentLoaded", () => {
    const btnEspera = document.getElementById("btn-espera");
    const areaSenha = document.getElementById("area-senha");
    const inputSenha = document.getElementById("input-senha");
    const btnValidar = document.getElementById("btn-validar");
    const erroSenha = document.getElementById("erro-senha");
    const caixaDica = document.getElementById("caixa-dica");
    const statusText = document.getElementById("status-text");
    const temporizadorElement = document.getElementById("temporizador");

    const SENHA_CORRETA = "Luan Santana"; 

    const alvo = new Date();
    alvo.setHours(22, 31, 0, 0);

    const atualizarRelogio = setInterval(() => {
        const agora = new Date().getTime();
        const diferenca = alvo.getTime() - agora;

        if (diferenca <= 0) {
            clearInterval(atualizarRelogio);
            temporizadorElement.innerText = "00:00:00";
            temporizadorElement.style.color = "#ff1a1a"; 
            temporizadorElement.style.textShadow = "0 0 20px rgba(255, 26, 26, 0.8)";
            
            btnEspera.style.display = "none";
            areaSenha.classList.remove("oculto");
            statusText.innerText = "> BLOQUEIO TEMPORAL REMOVIDO. AGUARDANDO RESPOSTA FINAL...";
        } else {
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            const hFormatado = String(horas).padStart(2, '0');
            const mFormatado = String(minutos).padStart(2, '0');
            const sFormatado = String(segundos).padStart(2, '0');

            temporizadorElement.innerText = `${hFormatado}:${mFormatado}:${sFormatado}`;
        }
    }, 1000);

    btnValidar.addEventListener("click", () => {
        const tentativa = inputSenha.value.trim();

        if (tentativa.toUpperCase() === SENHA_CORRETA.toUpperCase()) {
            areaSenha.style.display = "none";
            temporizadorElement.style.display = "none";
            caixaDica.classList.remove("oculto");
            
            statusText.innerText = "> ACESSO FINAL CONCEDIDO. PREPARE-SE PARA A MISSÃO.";
            statusText.style.color = "#ff1a1a";
        } else {
            erroSenha.classList.remove("oculto");
            inputSenha.value = ""; 
            inputSenha.focus();
        }
    });
});