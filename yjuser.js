        // 预设用户信息
        const initialUsers = [
            { username: "廖聪颖", password: "lcy", email: "1837601513@qq.com" }
        ];

        // 从localStorage加载用户信息
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // 合并初始用户和本地存储用户
        users = [...initialUsers, ...users];

        function login(event) {
            event.preventDefault();
            const identifier = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            const loginMessage = document.getElementById('login-message');

            // 检查用户名或邮箱和密码是否匹配
            const user = users.find(u => (u.username === identifier || u.email === identifier) && u.password === password);

            if (user) {
                loginMessage.className = 'message success';
                loginMessage.innerText = "登录成功！";
                // 登录成功后跳转到百度页面
                window.location.href = "yj.html";
            } else {
                loginMessage.className = 'message error';
                loginMessage.innerText = "用户名或邮箱或密码错误！";
            }
        }

        function register(event) {
            event.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const registerMessage = document.getElementById('register-message');

            // 检查密码是否一致
            if (password !== confirmPassword) {
                registerMessage.className = 'message error';
                registerMessage.innerText = "两次输入的密码不一致！";
                return;
            }

            // 检查用户名或邮箱是否已存在
            const existingUser = users.find(u => u.username === username || u.email === email);
            if (existingUser) {
                registerMessage.className = 'message error';
                registerMessage.innerText = "用户名或邮箱已存在！";
                return;
            }

            // 添加新用户到数组
            users.push({ username, password, email });

            // 保存到localStorage
            localStorage.setItem('users', JSON.stringify(users));

            registerMessage.className = 'message success';
            registerMessage.innerText = "注册成功！";
            showLoginForm();
        }

        function showRegisterForm() {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('register-form').style.display = 'block';
        }

        function showLoginForm() {
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('register-form').style.display = 'none';
        }

        // 监听输入框的焦点事件
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', () => {
                // 禁止滚动和缩放
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden';
            });

            input.addEventListener('blur', () => {
                // 恢复滚动和缩放
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            });
        });