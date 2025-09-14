/*

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
            window.location.href = 'gd.html';
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
*/


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
    const captchaElement = document.getElementById('captcha');
    if (captchaElement) captchaElement.textContent = captcha;
    return captcha;
}

// 切换页面
function showTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active');
    
    // 注册页面刷新验证码
    if (tabId === 'registerTab') {
        refreshCaptcha();
    }
}

// 处理登录
function handleLogin() {
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');
    const errorDiv = document.getElementById('loginError');
    
    // 校验元素是否存在
    if (!usernameInput || !passwordInput || !errorDiv) {
        errorDiv?.textContent('页面元素缺失，请检查页面结构');
        return;
    }
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    // 清空之前的错误提示
    errorDiv.textContent = '';

    // 校验输入不为空
    if (!username) {
        errorDiv.textContent = '请输入用户名';
        return;
    }
    if (!password) {
        errorDiv.textContent = '请输入密码';
        return;
    }

    // 检查本地存储用户和初始化用户
    if ((users[username] && users[username] === password) || 
        (INITIAL_USERS[username] && INITIAL_USERS[username] === password)) {
        loginSuccess();
        return;
    }

    errorDiv.textContent = '用户名或密码错误';
}

// 登录成功（跳转至指定链接）
function loginSuccess() {
    alert('登录成功！即将跳转至首页');
    // 跳转至目标页面
    window.location.href = 'https://lcy20.netlify.app/gd.html';
}

// 处理注册
function handleRegister() {
    const usernameInput = document.getElementById('registerUsername');
    const passwordInput = document.getElementById('registerPassword');
    const captchaInput = document.getElementById('captchaInput');
    const captchaElement = document.getElementById('captcha');
    const usernameError = document.getElementById('usernameError');
    const errorDiv = document.getElementById('registerError');
    
    // 校验元素是否存在
    if (!usernameInput || !passwordInput || !captchaInput || !captchaElement || !usernameError || !errorDiv) {
        errorDiv?.textContent('页面元素缺失，请检查页面结构');
        return;
    }
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const captchaInputVal = captchaInput.value.trim();
    const captcha = captchaElement.textContent;
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    // 清空之前的错误提示
    usernameError.textContent = '';
    errorDiv.textContent = '';

    // 校验用户名
    if (!username) {
        usernameError.textContent = '请输入用户名';
        return;
    }
    if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {
        usernameError.textContent = '用户名需3-16位字母/数字/下划线';
        return;
    }
    if (users[username] || INITIAL_USERS[username]) {
        usernameError.textContent = '用户名已存在';
        return;
    }

    // 校验密码不为空
    if (!password) {
        errorDiv.textContent = '请输入密码';
        return;
    }

    // 校验验证码
    if (!captchaInputVal) {
        errorDiv.textContent = '请输入验证码';
        return;
    }
    if (captchaInputVal !== captcha) {
        errorDiv.textContent = '验证码错误';
        refreshCaptcha(); // 刷新验证码
        return;
    }

    // 保存用户到本地存储
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('注册成功！请登录');
    showTab('loginTab');
    // 清空注册表单
    usernameInput.value = '';
    passwordInput.value = '';
    captchaInput.value = '';
}

// 处理忘记密码
function handleForgotPassword() {
    const usernameInput = document.getElementById('forgotUsername');
    const errorDiv = document.getElementById('forgotError');
    const msgDiv = document.getElementById('newPasswordMsg');
    
    // 校验元素是否存在
    if (!usernameInput || !errorDiv || !msgDiv) {
        errorDiv?.textContent('页面元素缺失，请检查页面结构');
        return;
    }
    
    const username = usernameInput.value.trim();
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    // 清空之前的提示
    errorDiv.textContent = '';
    msgDiv.textContent = '';

    // 校验用户名
    if (!username) {
        errorDiv.textContent = '请输入用户名';
        return;
    }
    if (!users[username] && !INITIAL_USERS[username]) {
        errorDiv.textContent = '用户名不存在';
        return;
    }

    // 生成8位随机新密码（字母+数字组合）
    const newPassword = Math.random().toString(36).slice(2, 10); // 确保8位
    // 更新密码（若为初始用户，同步更新到本地存储）
    users[username] = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    
    msgDiv.textContent = `新密码已生成：${newPassword}，请复制并登录`;
    // 清空忘记密码表单
    usernameInput.value = '';
}

// 初始化（确保DOM加载完成后执行）
document.addEventListener('DOMContentLoaded', function() {
    initLocalStorage();
    refreshCaptcha();
    showTab('loginTab');

    // 可选：为表单按钮绑定点击事件（若HTML中未绑定）
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const forgotBtn = document.getElementById('forgotBtn');
    const refreshCaptchaBtn = document.getElementById('refreshCaptchaBtn');

    loginBtn?.addEventListener('click', handleLogin);
    registerBtn?.addEventListener('click', handleRegister);
    forgotBtn?.addEventListener('click', handleForgotPassword);
    refreshCaptchaBtn?.addEventListener('click', function() {
        refreshCaptcha();
        // 清空验证码输入框
        const captchaInput = document.getElementById('captchaInput');
        captchaInput?.value = '';
    });

    // 可选：为登录表单添加回车键提交
    const loginForm = document.getElementById('loginForm');
    loginForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });

    // 可选：为注册表单添加回车键提交
    const registerForm = document.getElementById('registerForm');
    registerForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        handleRegister();
    });

    // 可选：为忘记密码表单添加回车键提交
    const forgotForm = document.getElementById('forgotForm');
    forgotForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        handleForgotPassword();
    });
});
