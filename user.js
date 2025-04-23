// 初始用户名和密码
  const initialUser1 = {
    username: "lcy",
    password: "lcy"
  };
  const initialUser2 = {
    username: "zwcx",
    password: "zwcx"
  };
 
  const users = [initialUser1, initialUser2];

  function showLogin() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('registerContainer').style.display = 'none';
  }

  function showRegister() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
  }

  function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // 检查用户名是否为空
    if (username === "") {
      document.getElementById('registerMessage').textContent = "用户名不能为空";
      return;
    }
    // 检查密码是否为空
    if (password === "") {
      document.getElementById('registerMessage').textContent = "密码不能为空";
      return;
    }
    // 检查确认密码是否为空
    if (confirmPassword === "") {
      document.getElementById('registerMessage').textContent = "确认密码不能为空";
      return;
    }

    if (password!== confirmPassword) {
      document.getElementById('registerMessage').textContent = '两次输入的密码不一致';
      return;
    }

    // 检查用户名是否已存在
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      document.getElementById('registerMessage').textContent = '该用户名已被注册，请更换用户名';
      return;
    }

    const user = users.push({ username, password });
    document.getElementById('registerMessage').textContent = '注册成功';
    showLogin();
  }

  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // 检查用户名是否为空
    if (username === "") {
      document.getElementById('loginMessage').textContent = "用户名不能为空";
      return;
    }
    // 检查密码是否为空
    if (password === "") {
      document.getElementById('loginMessage').textContent = "密码不能为空";
      return;
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      document.getElementById('loginMessage').textContent = '登录成功';
      window.location.href = "https://lcy20.netlify.app/gd.html";
    } else {
      document.getElementById('loginMessage').textContent = '用户名或密码错误，临时账号只能使用一次，若要永久账号请联系管理员！';
    }
  }