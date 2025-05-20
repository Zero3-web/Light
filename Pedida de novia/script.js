document.addEventListener('DOMContentLoaded', function() {
    function setupSwitch(btnId) {
        const btn = document.getElementById(btnId);
        if (!btn) return;
        btn.addEventListener('click', function() {
            btn.classList.toggle('on');
            const span = btn.querySelector('span');
            const isOn = btn.classList.contains('on');
            if (isOn) {
                span.textContent = 'ON';
                document.getElementById('lamp-container').classList.add('lamp-on');
                document.body.classList.add('lamp-on');
                typeLoveMessage();
            } else {
                span.textContent = 'OFF';
                document.getElementById('lamp-container').classList.remove('lamp-on');
                document.body.classList.remove('lamp-on');
                resetLoveMessage();
            }
        });
    }
    setupSwitch('desktop-btn');
    setupSwitch('mobile-btn');

    // Efecto máquina de escribir para el mensaje
    const msgEl = document.getElementById('love-message');
    const msgText = msgEl ? msgEl.textContent : '';
    function typeLoveMessage() {
        if (!msgEl) return;
        msgEl.textContent = '';
        let i = 0;
        function type() {
            if (i <= msgText.length) {
                msgEl.textContent = msgText.slice(0, i);
                i++;
                setTimeout(type, 60);
            }
        }
        type();
    }
    function resetLoveMessage() {
        if (!msgEl) return;
        msgEl.textContent = '';
    }
});