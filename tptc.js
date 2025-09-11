        // 获取弹窗和倒计时元素
        const modal = document.getElementById('imageModal');
        const countdownText = document.getElementById('countdown');
        let seconds = 5;

        // 倒计时函数
        const countdown = setInterval(() => {
            seconds--;
            countdownText.textContent = `${seconds}秒后关闭`;
            // 倒计时结束关闭弹窗
            if (seconds <= 0) {
                clearInterval(countdown);
                modal.style.display = 'none';
            }
        }, 1000);

        // 点击弹窗空白处手动关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                clearInterval(countdown);
                modal.style.display = 'none';
            }
        });
