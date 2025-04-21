let users = [
        { username: 'lcy', password: 'lcy' }
    ];

    function login() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const errorElement = document.getElementById('loginError');
        // 查找匹配的用户
        const foundUser = users.find(user => user.username === username && user.password === password);
        if (foundUser) {
            // 登录成功后，使用window.location.href进行页面跳转，这里跳转到success.html页面，可按需修改
            window.location.href = "https://lcy20.netlify.app/gd.html";
        } else {
            errorElement.textContent = '账号或密码错误，请重新输入，临时账号只可使用一次！';
        }
    }

    function register() {
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const errorElement = document.getElementById('registerError');
        // 简单验证，账号和密码不能为空
        if (username && password) {
            users.push({ username, password });
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
            errorElement.textContent = '注册成功！请登录';
        } else {
            errorElement.textContent = '账号和密码不能为空，请重新注册';
        }
    }

    function showRegisterForm() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    }

    function showLoginForm() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
