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

    // Inicia mostrando o primeiro evento
    if (events.length > 0) {
        showEvent('event1');
    }
});
