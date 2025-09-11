document.addEventListener('DOMContentLoaded', function() {
    // 新增：存储两个初始密码到本地存储，初始密码不可注册但可登录
    const initPasswords = ['zwcx', '1513']; // 可自行修改初始密码
    const storedInitPasswords = localStorage.getItem('initFourDigitPasswords');
    
    if (!storedInitPasswords) {
        localStorage.setItem('initFourDigitPasswords', JSON.stringify(initPasswords));
    }

    // 原代码开始（以下仅修改登录功能逻辑，其余不变）
    const digitInputs = document.querySelectorAll('.digit-input');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const clearBtn = document.getElementById('clearBtn');
    const messageDiv = document.getElementById('message');
    const strengthBars = document.querySelectorAll('.strength-bar');
    const particlesContainer = document.getElementById('particles');
    
    // 创建背景粒子效果
    function createParticles() {
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 20 + 5;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = 10 + Math.random() * 20;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();
    
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
    
    function getStrengthColor(strength) {
        const colors = ['#e74c3c', '#f39c12', '#3498db', '#2ecc71'];
        return colors[Math.min(strength, 4) - 1];
    }
    
    // 自动跳转输入框
    digitInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            this.classList.add('filled');
            updateStrengthIndicator();
            checkPasswordExists();
            
            if (this.value.length === 1 && index < digitInputs.length - 1) {
                digitInputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace') {
                this.classList.remove('filled');
                updateStrengthIndicator();
                
                if (this.value === '' && index > 0) {
                    digitInputs[index - 1].focus();
                }
            }
        });
    });
    
    // 获取输入的密码
    function getPassword() {
        let password = '';
        digitInputs.forEach(input => {
            password += input.value || '';
        });
        return password;
    }
    
    // 检测密码是否已注册
    function checkPasswordExists() {
        const password = getPassword();
        const savedPassword = localStorage.getItem('fourDigitPassword');
        const initPasswords = JSON.parse(localStorage.getItem('initFourDigitPasswords')) || [];
        
        // 输入4位完整密码时提示：区分初始密码、已注册密码、未注册密码
        if (password.length === 4) {
            if (initPasswords.includes(password)) {
                showMessage('尊敬的主人，欢迎登陆！', 'info');
            } else if (savedPassword === password) {
                showMessage('该密码已注册，请更换其他密码', 'warning');
            } else {
                showMessage('该密码未注册，可进行注册', 'info');
            }
        }
    }
    
    // 显示消息
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
        
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                messageDiv.className = 'message';
                messageDiv.style.opacity = '1';
            }, 500);
        }, 5000);
    }
    
    // 登录功能（核心修改：同时校验初始密码和用户注册密码）
    loginBtn.addEventListener('click', function() {
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
    });
    
    // 注册功能（保持初始密码不可注册）
    registerBtn.addEventListener('click', function() {
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
    });
    
    // 清除密码
    clearBtn.addEventListener('click', function() {
        digitInputs.forEach(input => {
            input.value = '';
            input.classList.remove('filled');
        });
        digitInputs[0].focus();
        updateStrengthIndicator();
        showMessage('密码已清除', 'info');
    });
});
