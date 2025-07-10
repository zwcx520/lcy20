// 从本地存储加载用户数据，若为空则初始化两个预设用户
let users = JSON.parse(localStorage.getItem('users')) || {
  'lcy': 'lcy',   //预设用户
  'testuser': 'test123' // 预设用户2
};
// 初始化时将预设用户保存到本地存储（若之前为空）
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(users));
}

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

  clearMessages('register');

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
  if (users[username]) {
    showError(errorElement, '用户名已存在');
    return;
  }

  // 注册新用户并更新本地存储
  users[username] = password;
  localStorage.setItem('users', JSON.stringify(users));
  showSuccess(successElement, '注册成功，请登录');

  document.getElementById('register-username').value = '';
  document.getElementById('register-password').value = '';
  document.getElementById('register-confirm-password').value = '';

  successElement.classList.add('animate-success');
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

  clearMessages('login');

  if (!username || !password) {
    showError(errorElement, '用户名和密码不能为空');
    return;
  }
  if (!users[username]) {
    showError(errorElement, '用户不存在');
    return;
  }
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

  // 登录成功动画
  const loginButton = document.querySelector('#login-form button');
  loginButton.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i> 登录中...';
  loginButton.disabled = true;
  setTimeout(() => {
    window.location.href = 'gd.html';
  }, 2000);
}

// 显示错误消息
function showError(element, message) {
  element.textContent = message;
  element.classList.add('shake');
  setTimeout(() => { element.classList.remove('shake'); }, 500);
}

// 显示成功消息
function showSuccess(element, message) {
  element.textContent = message;
  element.classList.add('fade-in');
}

// 添加背景装饰
function addBackgroundDecoration() {
  const bgDecoration = document.querySelector('.bg-decoration');
  const count = Math.floor(Math.random() * 8) + 7;
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    const size = Math.floor(Math.random() * 200) + 100;
    const left = Math.floor(Math.random() * 100);
    const top = Math.floor(Math.random() * 100);
    const delay = Math.floor(Math.random() * 15);
    const duration = Math.floor(Math.random() * 30) + 15;
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;
    span.style.left = `${left}%`;
    span.style.top = `${top}%`;
    span.style.animationDelay = `${delay}s`;
    span.style.animationDuration = `${duration}s`;
    span.style.opacity = Math.random() * 0.3 + 0.2;
    bgDecoration.appendChild(span);
  }
}

// 添加额外样式
function addExtraStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); } 20%, 40%, 60%, 80% { transform: translateX(5px); } }
    @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes animate-success { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
    .shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
    .fade-in { animation: fade-in 0.5s ease forwards; }
    .animate-success { animation: animate-success 1s ease-in-out; }
  `;
  document.head.appendChild(style);
}

// 页面加载时执行
window.onload = function() {
  addBackgroundDecoration();
  addExtraStyles();
  
  // 绑定表单提交事件
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    login();
  });
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    register();
  });

  showLoginForm();
};
