document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.timeline-point');
    const events = document.querySelectorAll('.event-detail');

    // Função para mostrar o evento e marcar o ponto
    function showEvent(eventId) {
        // Esconde todos os eventos
        events.forEach(event => event.classList.remove('active'));
        // Mostra o evento selecionado
        document.getElementById(eventId).classList.add('active');

        // Adiciona classe ao ponto para destacar (opcional)
        points.forEach(point => point.classList.remove('active-point'));
        document.querySelector(`.timeline-point[data-event="${eventId}"]`).classList.add('active-point');
    }

    // Adiciona listeners aos pontos
    points.forEach(point => {
        point.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event');
            showEvent(eventId);
        });
    });

    });

// Esse código pega o ano atual e coloca no lugar do elemento com id "ano"
document.getElementById("ano").innerHTML = new Date().getFullYear();

// Colocamos a lógica do ano aqui dentro também por segurança
    const elementoAno = document.getElementById("ano");
    if (elementoAno) {
        elementoAno.innerHTML = new Date().getFullYear();
    }
