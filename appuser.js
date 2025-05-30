   // 初始化用户
        const INITIAL_USERS = {
            lcy: 'lcy',
            zwcx: 'zwcx'
        };

        // 初始化本地存储
        function initLocalStorage() {
            if (!localStorage.getItem('users')) {
                localStorage.setItem('users', JSON.stringify(INITIAL_USERS));
            }
        }

        // 生成随机验证码
        function generateCaptcha() {
            return Math.floor(10000 + Math.random() * 90000).toString();
        }

        // 刷新验证码
        function refreshCaptcha() {
            const captcha = generateCaptcha();
            document.getElementById('captcha').textContent = captcha;
            return captcha;
        }

        // 切换页面
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(tab => 
                tab.classList.remove('active')
            );
            document.getElementById(tabId).classList.add('active');
            
            // 注册页面刷新验证码
            if (tabId === 'registerTab') {
                refreshCaptcha();
            }
        }

        // 处理登录
        function handleLogin() {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const errorDiv = document.getElementById('loginError');
            const users = JSON.parse(localStorage.getItem('users') || '{}');

            // 检查本地存储用户
            if (users[username] && users[username] === password) {
                loginSuccess();
                return;
            }

            // 检查初始化用户
            if (INITIAL_USERS[username] && INITIAL_USERS[username] === password) {
                loginSuccess();
                return;
            }

            errorDiv.textContent = '用户名或密码错误';
        }

        // 登录成功
        function loginSuccess() {
            alert('登录成功！');
            window.location.href = 'https://lcy20.netlify.app/gd.html';
        }

        // 处理注册
        function handleRegister() {
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            const captchaInput = document.getElementById('captchaInput').value;
            const captcha = document.getElementById('captcha').textContent;
            const users = JSON.parse(localStorage.getItem('users') || '{}');
            const usernameError = document.getElementById('usernameError');
            const errorDiv = document.getElementById('registerError');

            // 验证用户名
            if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {
                usernameError.textContent = '用户名需3-16位字母/数字/下划线';
                return;
            }
            if (users[username] || INITIAL_USERS[username]) {
                usernameError.textContent = '用户名已存在';
                return;
            }
            usernameError.textContent = '';

            // 验证验证码
            if (captchaInput !== captcha) {
                errorDiv.textContent = '验证码错误';
                refreshCaptcha(); // 刷新验证码
                return;
            }
            errorDiv.textContent = '';

            // 保存用户
            users[username] = password;
            localStorage.setItem('users', JSON.stringify(users));
            alert('注册成功！请登录');
            showTab('loginTab');
        }

        // 处理忘记密码
        function handleForgotPassword() {
            const username = document.getElementById('forgotUsername').value;
            const users = JSON.parse(localStorage.getItem('users') || '{}');
            const errorDiv = document.getElementById('forgotError');
            const msgDiv = document.getElementById('newPasswordMsg');

            if (!username) {
                errorDiv.textContent = '请输入用户名';
                return;
            }

            if (!users[username] && !INITIAL_USERS[username]) {
                errorDiv.textContent = '用户名不存在';
                return;
            }

            // 生成8位随机新密码
            const newPassword = Math.random().toString(36).substr(2, 8);
            users[username] = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            msgDiv.textContent = `新密码已生成：${newPassword}`;
            errorDiv.textContent = '';
        }

        // 初始化
        initLocalStorage();
        refreshCaptcha();
        showTab('loginTab');
