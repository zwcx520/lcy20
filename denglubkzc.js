let users = [
        { username: 'lcy', password: 'lcy' },
        { username: '1234', password: '1111' }
    ];

    function login() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const errorElement = document.getElementById('loginError');
        // 查找匹配的用户
        const foundUser = users.find(user => user.username === username && user.password === password);
        if (foundUser) {
            // 登录成功后，使用window.location.href进行页面跳转，这里跳转到success.html页面，可按需修改
            window.location.href = "https://yyxc.netlify.app/yxc.html";
        } else {
            errorElement.textContent = '账号或密码错误，请重新输入，临时账号只可使用一次！';
        }
    }

    function showRegisterForm() {
        // 显示提示信息，注册功能已取消
        alert('注册功能已取消，如有需要请联系管理员。');
        document.getElementById('registerForm').style.display = 'none';
    }

    function showLoginForm() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }