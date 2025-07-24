const popup = document.getElementById('popup');
        const countdown = document.getElementById('countdown');
        let seconds = 3;

        const startCountdown = () => {
            const timer = setInterval(() => {
                seconds--;
                countdown.textContent = seconds;
                
                if (seconds <= 0) {
                    clearInterval(timer);
                    popup.style.display = 'none';
                }
            }, 1000);
        };

        window.onload = startCountdown;