const getPageContainers = () => {
            return {
                register: document.getElementById('register-container'),
                login: document.getElementById('login-container'),
                forgot: document.getElementById('forgot-container'),
                changePassword: document.getElementById('change-password-container')
            };
        };

        // 获取所有消息显示元素
        const getMessageElements = () => {
            return {
                register: document.getElementById('register-message'),
                login: document.getElementById('login-message'),
                forgot: document.getElementById('forgot-message'),
                changePassword: document.getElementById('change-password-message')
            };
        };

        // 获取所有链接元素
        const getLinkElements = () => {
            return {
                loginLink: document.getElementById('login-link'),
                registerLink: document.getElementById('register-link'),
                forgotLink: document.getElementById('forgot-link'),
                loginLinkFromForgot: document.getElementById('login-link-from-forgot'),
                registerLinkFromForgot: document.getElementById('register-link-from-forgot'),
                forgotLinkFromLogin: document.getElementById('forgot-link-from-login'),
                loginLinkFromChange: document.getElementById('login-link-from-change'),
                registerLinkFromChange: document.getElementById('register-link-from-change'),
                forgotLinkFromChange: document.getElementById('forgot-link-from-change'),
                changePasswordLink: document.getElementById('change-password-link'),
                changePasswordLinkFromLogin: document.getElementById('change-password-link-from-login'),
                changePasswordLinkFromForgot: document.getElementById('change-password-link-from-forgot')
            };
        };

        // 切换页面函数
        const showPage = (page) => {
            const { register, login, forgot, changePassword } = getPageContainers();
            switch (page) {
                case'register':
                    register.style.display = 'block';
                    login.style.display = 'none';
                    forgot.style.display = 'none';
                    changePassword.style.display = 'none';
                    break;
                case 'login':
                    register.style.display = 'none';
                    login.style.display = 'block';
                    forgot.style.display = 'none';
                    changePassword.style.display = 'none';
                    break;
                case 'forgot':
                    register.style.display = 'none';
                    login.style.display = 'none';
                    forgot.style.display = 'block';
                    changePassword.style.display = 'none';
                    break;
                case 'changePassword':
                    register.style.display = 'none';
                    login.style.display = 'none';
                    forgot.style.display = 'none';
                    changePassword.style.display = 'block';
                    break;
                default:
                    break;
            }
        };

        // 检查用户名是否存在
        const checkUsernameExists = (username) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            return users.some(user => user.username === username);
        };

        // 保存用户到本地存储
        const saveUserToLocalStorage = (user) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        };

        // 从本地存储获取用户
        const getUserFromLocalStorage = (username, password) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            return users.find(user => user.username === username && user.password === password);
        };

        // 初始化两个初始用户
        (function initUsers() {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.length === 0) {
                users.push({ username: "廖聪颖", password: "lcy" });
                users.push({ username: "追吻辰星", password: "zwcx" });
                localStorage.setItem('users', JSON.stringify(users));
            }
        })();

        // 获取页面容器、消息元素和链接元素
        const { register, login, forgot, changePassword } = getPageContainers();
        const { register: registerMessage, login: loginMessage, forgot: forgotMessage, changePassword: changePasswordMessage } = getMessageElements();
        const { loginLink, registerLink, forgotLink, loginLinkFromForgot, registerLinkFromForgot, forgotLinkFromLogin, loginLinkFromChange, registerLinkFromChange, forgotLinkFromChange, changePasswordLink, changePasswordLinkFromLogin, changePasswordLinkFromForgot } = getLinkElements();

        // 注册页面链接
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('register');
        });

        // 登录页面链接
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('login');
        });

        // 查询密码页面链接
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('forgot');
        });

        // 从查询密码页面切换到登录页面
        loginLinkFromForgot.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('login');
        });

        // 从查询密码页面切换到注册页面
        registerLinkFromForgot.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('register');
        });

        // 从登录页面切换到查询密码页面
        forgotLinkFromLogin.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('forgot');
        });

        // 从修改密码页面切换到登录页面
        loginLinkFromChange.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('login');
        });

        // 从修改密码页面切换到注册页面
        registerLinkFromChange.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('register');
        });

        // 从修改密码页面切换到查询密码页面
        forgotLinkFromChange.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('forgot');
        });

        // 从注册页面切换到修改密码页面
        changePasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('changePassword');
        });

        // 从登录页面切换到修改密码页面
        changePasswordLinkFromLogin.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('changePassword');
        });

        // 从查询密码页面切换到修改密码页面
        changePasswordLinkFromForgot.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('changePassword');
        });

        // 查询密码功能函数
        const forgotPasswordFunction = (form, messageElement) => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('forgot-username').value;
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const user = users.find(user => user.username === username);

                if (user) {
                    messageElement.className ='success message';
                    messageElement.textContent = `您的密码是：${user.password}`;
                    setTimeout(() => {
                        messageElement.style.display = 'none';
                    }, 5000);
                } else {
                    messageElement.className = 'error message';
                    messageElement.textContent = '未找到该用户名！';
                    setTimeout(() => {
                        messageElement.style.display = 'none';
                    }, 5000);
                }
            });
        };

        // 修改密码功能函数
        const changePasswordFunction = (form, messageElement) => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('change-username').value;
                const oldPassword = document.getElementById('old-password').value;
                const newPassword = document.getElementById('new-password').value;
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const user = users.find(user => user.username === username && user.password === oldPassword);

                if (user) {
                    user.password = newPassword;
                    localStorage.setItem('users', JSON.stringify(users));
                    messageElement.className ='success message';
                    messageElement.textContent = '密码修改成功！';
                    setTimeout(() => {
                        messageElement.style.display = 'none';
                    }, 5000);
                } else {
                    messageElement.className = 'error message';
                    messageElement.textContent = '用户名或旧密码错误！';
                    setTimeout(() => {
                        messageElement.style.display = 'none';
                    }, 5000);
                }
            });
        };

        // 注册功能
        document.getElementById('register-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;

            if (checkUsernameExists(username)) {
                registerMessage.className = 'error message';
                registerMessage.textContent = '用户名已存在，请重新注册！';
                setTimeout(() => {
                    registerMessage.style.display = 'none';
                }, 5000);
                return;
            }

            saveUserToLocalStorage({ username, password });
            registerMessage.className ='success message';
            registerMessage.textContent = '注册成功！';
            setTimeout(() => {
                registerMessage.style.display = 'none';
            }, 5000);
        });

        // 登录功能
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            const user = getUserFromLocalStorage(username, password);

            if (user) {
                loginMessage.className ='success message';
                loginMessage.textContent = '登录成功！';
                window.location.href = "https://lcy20.netlify.app/yj/yj.html"; // 登录成功后立即跳转
            } else {
                loginMessage.className = 'error message';
                loginMessage.textContent = '用户名或密码错误！';
                setTimeout(() => {
                    loginMessage.style.display = 'none';
                }, 5000);
            }
        });

        // 调用查询密码功能函数
        forgotPasswordFunction(document.getElementById('forgot-form'), forgotMessage);

        // 调用修改密码功能函数
        changePasswordFunction(document.getElementById('change-password-form'), changePasswordMessage);
