  // 初始化本地存储的用户数据
    const users = JSON.parse(localStorage.getItem('users')) || [
      { username: '廖聪颖', password: 'lcy' },
      { username: '追吻辰星', password: 'zwcx' }
    ];
    localStorage.setItem('users', JSON.stringify(users));

    // 登录功能
    document.getElementById('login-form').addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      const user = users.find(u => u.username === username && u.password === password);
      const loginMessage = document.getElementById('login-message');
      if (user) {
        loginMessage.className ='message success';
        loginMessage.textContent = '登录成功！';
        setTimeout(() => {
          window.location.href = 'https://www.baidu.com'; // 跳转到百度
        }, 1500);
      } else {
        loginMessage.className ='message error';
        loginMessage.textContent = '用户名或密码错误！';
      }
    });

    // 注册功能
    document.getElementById('register-form').addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('register-username').value;
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-confirm-password').value;
      const registerMessage = document.getElementById('register-message');
      if (password!== confirmPassword) {
        registerMessage.className ='message error';
        registerMessage.textContent = '两次输入的密码不一致！';
        return;
      }
      if (users.some(u => u.username === username)) {
        registerMessage.className ='message error';
        registerMessage.textContent = '用户名已存在！';
        return;
      }
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      registerMessage.className ='message success';
      registerMessage.textContent = '注册成功！';
      setTimeout(() => {
        document.getElementById('switch-to-login').click();
      }, 1500);
    });

    // 重置密码功能
    document.getElementById('reset-form').addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('reset-username').value;
      const newPassword = document.getElementById('reset-new-password').value;
      const confirmNewPassword = document.getElementById('reset-confirm-password').value;
      if (newPassword!== confirmNewPassword) {
        alert('两次输入的新密码不一致！');
        return;
      }
      const userIndex = users.findIndex(u => u.username === username);
      if (userIndex === -1) {
        alert('用户名不存在！');
        return;
      }
      users[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      alert('密码重置成功！');
      document.getElementById('switch-to-login-reset').click();
    });

    // 切换到注册页面
    document.getElementById('switch-to-register').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('register-container').style.display = 'block';
    });

    // 切换到登录页面
    document.getElementById('switch-to-login').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('register-container').style.display = 'none';
      document.getElementById('login-container').style.display = 'block';
    });

    // 切换到重置密码页面
    document.getElementById('switch-to-reset').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('reset-container').style.display = 'block';
    });

    // 从重置密码页面返回登录页面
    document.getElementById('switch-to-login-reset').addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('reset-container').style.display = 'none';
      document.getElementById('login-container').style.display = 'block';
    });
