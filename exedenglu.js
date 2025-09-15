// 初始化应用
function initApp() {
    // 检查是否为移动设备
    checkMobileDevice();
    
    // 初始化用户数据
    initUsers();
    
    // 检查是否有记住的用户
    checkRememberedUser();
}

// 检查是否为移动设备
function checkMobileDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const mobileNotice = document.getElementById('mobile-notice');
    
    if (isMobile) {
        mobileNotice.classList.add('active');
    }
}

// 初始化用户数据
function initUsers() {
    // 检查localStorage中是否已有用户数据
    let users = localStorage.getItem('users');
    
    if (!users) {
        // 添加两个初始用户
        const initialUsers = [
            {
                username: 'admin',
                email: 'admin@example.com',
                password: 'Admin123' // 注意：实际应用中应使用加密存储
            },
            {
                username: 'user1',
                email: 'user1@example.com',
                password: 'User12345'
            }
        ];
        
        // 保存到localStorage
        localStorage.setItem('users', JSON.stringify(initialUsers));
    }
}

// 检查是否有记住的用户
function checkRememberedUser() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        const userData = JSON.parse(rememberedUser);
        document.getElementById('login-username').value = userData.username;
        document.getElementById('login-password').value = userData.password;
        document.getElementById('remember-me').checked = true;
    }
}

// 显示登录表单
function showLogin() {
    hideAllForms();
    document.getElementById('login-form').classList.add('active');
}

// 显示注册表单
function showRegister() {
    hideAllForms();
    document.getElementById('register-form').classList.add('active');
}

// 显示找回密码表单
function showForgotPassword() {
    hideAllForms();
    document.getElementById('forgot-form').classList.add('active');
}

// 隐藏所有表单
function hideAllForms() {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => {
        form.classList.remove('active');
    });
}

// 切换密码可见性
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// 处理登录
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // 获取用户数据
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // 验证用户
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // 处理记住我功能
        if (rememberMe) {
            localStorage.setItem('rememberedUser', JSON.stringify({ username, password }));
        } else {
            localStorage.removeItem('rememberedUser');
        }
        
        // 显示成功消息
        showSuccessModal('登录成功，请稍等！');
        
        // 登录成功后跳转到指定链接
        setTimeout(() => {
            closeSuccessModal();
            window.location.href = 'https://lcy20.netlify.app/gd.html';
        }, 1500);
    } else {
        showSuccessModal('用户名或密码错误，请重试');
    }
}

// 处理注册
function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    // 简单验证
    if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
        showSuccessModal('密码必须至少8个字符，并包含字母和数字');
        return;
    }
    
    // 获取现有用户
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // 检查用户名或邮箱是否已存在
    if (users.some(u => u.username === username)) {
        showSuccessModal('用户名已存在');
        return;
    }
    
    if (users.some(u => u.email === email)) {
        showSuccessModal('邮箱已被注册');
        return;
    }
    
    // 添加新用户
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    // 显示成功消息
    showSuccessModal('注册成功，请登录');
    
    // 重置表单
    document.getElementById('register').reset();
    
    // 返回登录表单
    setTimeout(() => {
        closeSuccessModal();
        showLogin();
    }, 1500);
}

// 处理找回密码
function handleForgotPassword(event) {
    event.preventDefault();
    
    const email = document.getElementById('forgot-email').value;
    
    // 获取用户数据
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // 检查邮箱是否存在
    const user = users.find(u => u.email === email);
    
    if (user) {
        // 实际应用中，这里应该发送重置密码的邮件
        showSuccessModal('重置链接已发送到您的邮箱');
        
        // 重置表单
        document.getElementById('forgot').reset();
        
        // 返回登录表单
        setTimeout(() => {
            closeSuccessModal();
            showLogin();
        }, 1500);
    } else {
        showSuccessModal('该邮箱未注册');
    }
}

// 显示成功模态框
function showSuccessModal(message) {
    const modal = document.getElementById('success-modal');
    const messageElement = document.getElementById('success-message');
    
    messageElement.textContent = message;
    modal.classList.add('active');
    
    // 防止页面滚动
    document.body.style.overflow = 'hidden';
}

// 关闭成功模态框
function closeSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('active');
    
    // 恢复页面滚动
    document.body.style.overflow = 'auto';
}

// 添加键盘事件监听
function addKeyboardListeners() {
    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSuccessModal();
        }
    });
    
    // 点击模态框外部关闭
    document.getElementById('success-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('success-modal')) {
            closeSuccessModal();
        }
    });
}

// 初始化应用
window.addEventListener('DOMContentLoaded', () => {
    initApp();
    addKeyboardListeners();
    initMatrixRain();
});

// 初始化几何数学函数线条效果
function initMatrixRain() {
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    
    // 设置canvas尺寸
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 线条配置
    const lineCount = 20; // 线条数量
    const lines = []; // 存储所有线条
    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#0080ff', '#ff8000'];
    
    // 初始化线条
    for (let i = 0; i < lineCount; i++) {
        lines.push({
            functionType: Math.floor(Math.random() * 5), // 0-4: 正弦、余弦、抛物线、立方、圆
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 0.02 + 0.005, // 移动速度
            phase: Math.random() * Math.PI * 2, // 相位偏移
            amplitude: Math.random() * 50 + 20, // 振幅
            frequency: Math.random() * 0.02 + 0.005, // 频率
            offsetX: Math.random() * canvas.width, // X轴偏移
            offsetY: Math.random() * canvas.height, // Y轴偏移
            thickness: Math.random() * 2 + 1, // 线宽
            points: [], // 存储线条上的点
            glowIntensity: Math.random() * 0.5 + 0.5 // 发光强度
        });
    }
    
    // 计算函数点
    function calculatePoints(line) {
        const points = [];
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        
        // 根据函数类型计算点
        for (let x = 0; x <= width; x += 5) {
            let y = 0;
            
            // 将x坐标归一化到-1到1范围
            const normalizedX = (x - centerX) / (width / 2);
            
            // 根据函数类型计算y值
            switch (line.functionType) {
                case 0: // 正弦函数
                    y = Math.sin(normalizedX * line.frequency * Math.PI + line.phase) * line.amplitude + line.offsetY;
                    break;
                case 1: // 余弦函数
                    y = Math.cos(normalizedX * line.frequency * Math.PI + line.phase) * line.amplitude + line.offsetY;
                    break;
                case 2: // 抛物线
                    y = (normalizedX * normalizedX * line.amplitude * 2) + line.offsetY;
                    break;
                case 3: // 立方函数
                    y = (normalizedX * normalizedX * normalizedX * line.amplitude) + line.offsetY;
                    break;
                case 4: // 圆形/椭圆
                    const radius = line.amplitude * 2;
                    const angle = normalizedX * Math.PI + line.phase;
                    y = Math.sin(angle) * radius + centerY;
                    const circleX = Math.cos(angle) * radius + centerX;
                    points.push({x: circleX, y: y});
                    continue; // 跳过下面的push
            }
            
            points.push({x: x + line.offsetX, y: y});
        }
        
        return points;
    }
    
    // 绘制单条线
    function drawLine(line) {
        const points = calculatePoints(line);
        
        if (points.length < 2) return;
        
        // 创建渐变颜色
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
        gradient.addColorStop(0.5, line.color);
        gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
        
        // 设置发光效果
        ctx.shadowColor = line.color;
        ctx.shadowBlur = line.glowIntensity * 10;
        
        // 绘制线条
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = line.thickness;
        ctx.stroke();
        
        // 重置阴影
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        
        // 添加一些点作为亮点
        if (Math.random() > 0.7) {
            const randomPoint = points[Math.floor(Math.random() * points.length)];
            ctx.beginPath();
            ctx.arc(randomPoint.x, randomPoint.y, line.thickness * 2, 0, Math.PI * 2);
            ctx.fillStyle = line.color;
            ctx.fill();
        }
    }
    
    // 动画循环
    function animate() {
        // 半透明背景，产生拖尾效果
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 更新并绘制所有线条
        lines.forEach(line => {
            // 更新相位，使线条动起来
            line.phase += line.speed;
            
            // 绘制线条
            drawLine(line);
            
            // 随机改变一些参数，增加变化
            if (Math.random() > 0.99) {
                line.functionType = Math.floor(Math.random() * 5);
                line.color = colors[Math.floor(Math.random() * colors.length)];
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    // 开始动画
    animate();
}