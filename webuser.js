document.addEventListener('DOMContentLoaded', function() {
    // 创建流星雨和星空背景
    function createMeteorShower() {
        // 首先检查是否已存在流星容器
        let meteorContainer = document.querySelector('.meteor-shower');
        let starsContainer = document.querySelector('.stars');
        
        if (!meteorContainer) {
            meteorContainer = document.createElement('div');
            meteorContainer.className = 'meteor-shower';
            document.body.appendChild(meteorContainer);
        }
        
        if (!starsContainer) {
            starsContainer = document.createElement('div');
            starsContainer.className = 'stars';
            document.body.appendChild(starsContainer);
        }
        
        // 创建星空背景
        const starCount = 150;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const size = Math.random() * 2 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = 2 + Math.random() * 3;
            const delay = Math.random() * 5;
            
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${posX}%`;
            star.style.top = `${posY}%`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            
            starsContainer.appendChild(star);
        }
        
        // 创建流星效果
        function createMeteor() {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');
            
            const width = 2 + Math.random() * 4;
            const height = width * 2;
            const posX = Math.random() * 100;
            const posY = -10;
            const duration = 1 + Math.random() * 2;
            const opacity = 0.4 + Math.random() * 0.6;
            
            meteor.style.width = `${width}px`;
            meteor.style.height = `${height}px`;
            meteor.style.left = `${posX}%`;
            meteor.style.top = `${posY}%`;
            meteor.style.animationDuration = `${duration}s`;
            meteor.style.opacity = opacity;
            
            meteorContainer.appendChild(meteor);
            
            // 流星消失后移除DOM元素
            setTimeout(() => {
                meteor.remove();
            }, duration * 1000);
        }
        
        // 定时创建流星
        setInterval(createMeteor, 100);
    }

    // 初始化本地存储的初始密码
    function initLocalStorage() {
        const initPasswords = ['zwcx', '1513']; // 可自行修改初始密码
        const storedInitPasswords = localStorage.getItem('initFourDigitPasswords');
        
        if (!storedInitPasswords) {
            localStorage.setItem('initFourDigitPasswords', JSON.stringify(initPasswords));
        }
    }

    // 加载登录和注册功能
    function loadAuthenticationModules() {
        // 首先初始化本地存储
        initLocalStorage();
        
        // 登录功能模块
        (function() {
            // 登录相关DOM元素
            const digitInputs = document.querySelectorAll('.digit-input');
            const loginBtn = document.getElementById('loginBtn');
            const messageDiv = document.getElementById('message');
            
            // 绑定登录相关事件
            function bindLoginEvents() {
                // 自动跳转输入框
                digitInputs.forEach((input, index) => {
                    input.addEventListener('input', function() {
                        this.classList.add('filled');
                        checkPasswordExists();
                        
                        if (this.value.length === 1 && index < digitInputs.length - 1) {
                            digitInputs[index + 1].focus();
                        }
                    });
                    
                    input.addEventListener('keydown', function(e) {
                        if (e.key === 'Backspace') {
                            this.classList.remove('filled');
                            
                            if (this.value === '' && index > 0) {
                                digitInputs[index - 1].focus();
                            }
                        }
                    });
                });
                
                // 登录按钮事件
                loginBtn.addEventListener('click', function() {
                    login();
                });
            }

            // 获取输入的密码
            function getPassword() {
                let password = '';
                digitInputs.forEach(input => {
                    password += input.value || '';
                });
                return password;
            }

            // 检测密码是否已存在（初始密码或已注册密码）
            function checkPasswordExists() {
                const password = getPassword();
                const savedPassword = localStorage.getItem('fourDigitPassword');
                const initPasswords = JSON.parse(localStorage.getItem('initFourDigitPasswords')) || [];
                
                // 输入4位完整密码时提示
                if (password.length === 4) {
                    if (initPasswords.includes(password)) {
                        showMessage('尊贵的主人大大，欢迎登陆😘', 'info');
                    } else if (savedPassword === password) {
                        showMessage('该密码已注册，请更换其他密码', 'warning');
                    } else {
                        showMessage('该密码未注册，可进行注册', 'info');
                    }
                }
            }

            // 登录功能
            function login() {
                const password = getPassword();
                const savedPassword = localStorage.getItem('fourDigitPassword');
                const initPasswords = JSON.parse(localStorage.getItem('initFourDigitPasswords')) || [];
                
                if (password.length !== 4) {
                    showMessage('请输入4位密码', 'error');
                    return;
                }
                
                // 登录校验规则：输入密码是初始密码 或 是用户已注册密码，均视为登录成功
                if (initPasswords.includes(password) || password === savedPassword) {
                    showMessage('登录成功！正在登陆...', 'success');
                    
                    digitInputs.forEach(input => {
                        input.style.borderColor = '#2ecc71';
                        input.style.boxShadow = '0 0 20px rgba(46, 204, 113, 0.6)';
                    });
                    
                    setTimeout(() => {
                        window.location.href = 'gd.html';
                    }, 1500);
                } else {
                    showMessage('密码错误，请重试', 'error');
                    
                    digitInputs.forEach(input => {
                        input.style.borderColor = '#e74c3c';
                        input.style.boxShadow = '0 0 20px rgba(231, 76, 60, 0.6)';
                        setTimeout(() => {
                            input.style.borderColor = '';
                            input.style.boxShadow = '';
                        }, 1000);
                    });
                }
            }

            // 初始化登录功能
            bindLoginEvents();
        })();

        // 注册功能模块
        (function() {
            // 注册相关DOM元素
            const digitInputs = document.querySelectorAll('.digit-input');
            const registerBtn = document.getElementById('registerBtn');
            const clearBtn = document.getElementById('clearBtn');
            const messageDiv = document.getElementById('message');
            const strengthBars = document.querySelectorAll('.strength-bar');

            // 绑定注册相关事件
            function bindRegisterEvents() {
                // 输入框事件
                digitInputs.forEach((input, index) => {
                    input.addEventListener('input', function() {
                        updateStrengthIndicator();
                    });
                    
                    input.addEventListener('keydown', function(e) {
                        if (e.key === 'Backspace') {
                            updateStrengthIndicator();
                        }
                    });
                });
                
                // 注册按钮事件
                registerBtn.addEventListener('click', function() {
                    register();
                });
                
                // 清除按钮事件
                if (clearBtn) {
                    clearBtn.addEventListener('click', function() {
                        clearPassword();
                    });
                }
            }

            // 获取输入的密码
            function getPassword() {
                let password = '';
                digitInputs.forEach(input => {
                    password += input.value || '';
                });
                return password;
            }

            // 更新密码强度指示器
            function updateStrengthIndicator() {
                const password = getPassword();
                const strength = password.length;
                
                strengthBars.forEach((bar, index) => {
                    if (index < strength) {
                        bar.style.background = getStrengthColor(strength);
                    } else {
                        bar.style.background = '#e0e0e0';
                    }
                });
            }

            // 获取密码强度对应的颜色
            function getStrengthColor(strength) {
                const colors = ['#e74c3c', '#f39c12', '#3498db', '#2ecc71'];
                return colors[Math.min(strength, 4) - 1];
            }

            // 注册功能
            function register() {
                const password = getPassword();
                const savedPassword = localStorage.getItem('fourDigitPassword');
                const initPasswords = JSON.parse(localStorage.getItem('initFourDigitPasswords')) || [];
                
                if (password.length !== 4) {
                    showMessage('请输入4位密码', 'error');
                    return;
                }
                
                // 禁止初始密码注册
                if (initPasswords.includes(password)) {
                    showMessage('该密码为初始密码，不可注册', 'error');
                    return;
                }
                
                // 禁止重复注册
                if (savedPassword === password) {
                    showMessage('该密码已注册，无需重复注册', 'error');
                    return;
                }
                
                localStorage.setItem('fourDigitPassword', password);
                showMessage('密码注册成功！', 'success');
                
                digitInputs.forEach(input => {
                    input.style.borderColor = '#3498db';
                    input.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.6)';
                    setTimeout(() => {
                        input.style.borderColor = '';
                        input.style.boxShadow = '';
                    }, 1000);
                });
            }

            // 清除密码
            function clearPassword() {
                digitInputs.forEach(input => {
                    input.value = '';
                    input.classList.remove('filled');
                });
                digitInputs[0].focus();
                updateStrengthIndicator();
                showMessage('密码已清除', 'info');
            }

            // 初始化注册功能
            updateStrengthIndicator();
            bindRegisterEvents();
        })();

        // 通用函数 - 显示消息
        window.showMessage = function(text, type) {
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = text;
            messageDiv.className = 'message ' + type;
            
            setTimeout(() => {
                messageDiv.style.opacity = '0';
                setTimeout(() => {
                    messageDiv.className = 'message';
                    messageDiv.style.opacity = '1';
                }, 500);
            }, 5000);
        };
    }

    // 启动认证系统
    createMeteorShower();
    loadAuthenticationModules();
});
