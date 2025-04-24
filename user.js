  // 初始用户数组
        let users = [
            {
                username: "廖聪颖",
                password: "lcy"
            },
            {
                username: "zwcx",
                password: "zwcx"
            }
        ];

        // 从本地存储中读取用户数据，如果没有则初始化为空数组
        const localUsers = JSON.parse(localStorage.getItem('users')) || [];

        function switchForm(formType) {
            // 切换选项卡样式
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelector(`.tab[onclick="switchForm('${formType}')"]`).classList.add('active');

            // 切换表单显示
            document.querySelectorAll('.form').forEach(form => {
                form.classList.remove('active');
            });
            document.getElementById(`${formType}Form`).classList.add('active');

            // 隐藏提示信息
            document.getElementById('loginMessage').innerHTML = "";
            document.getElementById('registerMessage').innerHTML = "";
        }

        function handleLogin(e) {
            e.preventDefault();
            const account = document.getElementById('loginAccount').value;
            const password = document.getElementById('loginPassword').value;

            // 先检查初始用户数组
            let user = users.find(u => u.username === account && u.password === password);
            // 再检查本地存储中的用户数组
            if (!user) {
                user = localUsers.find(u => u.username === account && u.password === password);
            }

            const messageElement = document.getElementById('loginMessage');
            if (user) {
                messageElement.className = "message success";
                messageElement.innerHTML = "登录成功，正在跳转...";
                setTimeout(() => {
                    window.location.href = "https://lcy20.netlify.app/gd.html";
                }, 1500);
            } else {
                messageElement.className = "message error";
                messageElement.innerHTML = "用户名/密码错误！";
            }

            return false;
        }

        function handleRegister(e) {
            e.preventDefault();
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;

            const messageElement = document.getElementById('registerMessage');
            // 密码一致性验证
            if (password!== confirmPassword) {
                messageElement.className = "message error";
                messageElement.innerHTML = "两次输入的密码不一致！";
                return false;
            }

            // 检查初始用户数组中用户是否已存在
            if (users.some(u => u.username === username)) {
                messageElement.className = "message error";
                messageElement.innerHTML = "用户名已被注册！";
                return false;
            }

            // 检查本地存储用户数组中用户是否已存在
            if (localUsers.some(u => u.username === username)) {
                messageElement.className = "message error";
                messageElement.innerHTML = "用户名已被注册！";
                return false;
            }

            // 保存新用户到初始用户数组
            const newUser = {
                username: username,
                password: password
            };
            users.push(newUser);

            // 将新用户添加到本地存储的用户数组中，并更新本地存储
            localUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(localUsers));

            messageElement.className = "message success";
            messageElement.innerHTML = "注册成功！";
            setTimeout(() => {
                switchForm('login');
            }, 1500);

            return false;
        }