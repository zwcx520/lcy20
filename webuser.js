// 从本地存储加载用户数据
let users = JSON.parse(localStorage.getItem('users')) || {};

// 显示注册表单
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    clearMessages('register');
}

// 显示登录表单
function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    clearMessages('login');
    
    // 检查是否有记住的用户名和密码
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        const { username, password } = JSON.parse(rememberedUser);
        document.getElementById('login-username').value = username;
        document.getElementById('login-password').value = password;
        document.getElementById('remember-me').checked = true;
    }
}

// 清除消息
function clearMessages(formType) {
    if (formType === 'login' || formType === 'both') {
        document.getElementById('login-error').textContent = '';
    }
    if (formType === 'register' || formType === 'both') {
        document.getElementById('register-error').textContent = '';
        document.getElementById('register-success').textContent = '';
    }
}

// 注册函数
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const errorElement = document.getElementById('register-error');
    const successElement = document.getElementById('register-success');

    // 重置消息
    clearMessages('register');

    // 验证
    if (!username || !password) {
        showError(errorElement, '用户名和密码不能为空');
        return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        showError(errorElement, '用户名只能包含字母和数字');
        return;
    }

    if (password.length < 3) {
        showError(errorElement, '密码长度至少为3位');
        return;
    }

    if (password !== confirmPassword) {
        showError(errorElement, '两次输入的密码不一致');
        return;
    }

    // 检查用户名是否已存在
    if (users[username]) {
        showError(errorElement, '用户名已存在');
        return;
    }

    // 注册用户
    users[username] = password;
    
    // 保存到本地存储
    localStorage.setItem('users', JSON.stringify(users));
    
    showSuccess(successElement, '注册成功，请登录');

    // 清空表单
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-confirm-password').value = '';

    // 添加成功动画
    successElement.classList.add('animate-success');
    
    // 3秒后自动切换到登录表单
    setTimeout(() => {
        showLoginForm();
        successElement.classList.remove('animate-success');
    }, 3000);
}

// 登录函数
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');
    const rememberMe = document.getElementById('remember-me').checked;

    // 重置错误消息
    clearMessages('login');

    // 验证
    if (!username || !password) {
        showError(errorElement, '用户名和密码不能为空');
        return;
    }

    // 检查用户
    if (!users[username]) {
        showError(errorElement, '用户不存在');
        return;
    }

    // 验证密码
    if (users[username] !== password) {
        showError(errorElement, '密码错误');
        return;
    }

    // 处理记住登录状态
    if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify({ username, password }));
    } else {
        localStorage.removeItem('rememberedUser');
    }

    // 登录成功，添加加载动画
    const loginButton = document.querySelector('#login-form button');
    loginButton.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i> 登录中...';
    loginButton.disabled = true;

    // 2秒后跳转到百度
    setTimeout(() => {
        window.location.href = 'gd.html';
    }, 2000);
}

// 显示错误消息
function showError(element, message) {
    element.textContent = message;
    element.classList.add('shake');
    setTimeout(() => {
        element.classList.remove('shake');
    }, 500);
}

// 显示成功消息
function showSuccess(element, message) {
    element.textContent = message;
    element.classList.add('fade-in');
}

// 添加背景装饰元素
function addBackgroundDecoration() {
    const bgDecoration = document.querySelector('.bg-decoration');
    const count = Math.floor(Math.random() * 8) + 7; // 7-14个装饰元素

    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        const size = Math.floor(Math.random() * 200) + 100; // 100-300px
        const left = Math.floor(Math.random() * 100);
        const top = Math.floor(Math.random() * 100);
        const delay = Math.floor(Math.random() * 15);
        const duration = Math.floor(Math.random() * 30) + 15; // 15-45秒

        span.style.width = `${size}px`;
        span.style.height = `${size}px`;
        span.style.left = `${left}%`;
        span.style.top = `${top}%`;
        span.style.animationDelay = `${delay}s`;
        span.style.animationDuration = `${duration}s`;
        span.style.opacity = Math.random() * 0.3 + 0.2; // 0.2-0.5

        bgDecoration.appendChild(span);
    }
}

// 添加额外的CSS动画
function addExtraStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes animate-success {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .shake {
            animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        
        .fade-in {
            animation: fade-in 0.5s ease forwards;
        }
        
        .animate-success {
            animation: animate-success 1s ease-in-out;
        }
    `;
    document.head.appendChild(style);
}

// 页面加载时执行
window.onload = function() {
    addBackgroundDecoration();
    addExtraStyles();
    
    // 添加表单提交事件
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        login();
    });
    
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        register();
    });
    
    // 如果已经登录过，显示登录表单
    showLoginForm();
};
    
