        // 预设的用户数据（在实际应用中应存储在安全的后端数据库中）
        const users = [
            { username: '廖聪颖', password: 'lcy' },
            { username: '追吻辰星', password: 'zwcx' }
        ];

        // 获取表单和错误消息元素
        const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('errorMessage');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        // 表单提交事件处理
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 阻止默认提交行为

            const enteredUsername = usernameInput.value.trim();
            const enteredPassword = passwordInput.value.trim();
            errorMessage.style.display = 'none'; // 隐藏之前的错误消息

            // 查找匹配的用户
            const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

            if (user) {
                // 登录成功，跳转到百度
                window.location.href = 'https://lcy20.netlify.app/yj/yj.html';
            } else {
                // 显示错误消息
                errorMessage.textContent = '用户名或密码错误！';
                errorMessage.style.display = 'block';
                // 可选：轻微摇动效果提示错误
                document.querySelector('.login-container').classList.add('shake');
                setTimeout(() => {
                    document.querySelector('.login-container').classList.remove('shake');
                }, 500);
            }
        });
