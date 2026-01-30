// 浪漫问候语数组
const greetings = [
    "你是我生命中最美好的相遇",
    "每一次见到你，我的心跳都会加速",
    "你的笑容是我每天最大的动力",
    "愿我们的爱情像星星一样永恒",
    "你是我心中最美的风景",
    "和你在一起的每一刻都值得珍惜",
    "你是我生命中的阳光，温暖着我的心",
    "我爱你，不仅仅是今天，而是每一天",
    "你的存在让我的生活变得更加美好",
    "愿我们的故事像童话一样美丽",
    "你是我想共度一生的人",
    "和你在一起，时间总是过得太快",
    "你的声音是我最想听的旋律",
    "你是我心中永远的唯一",
    "愿我们的爱情如花朵般绽放",
    "你是我生命中最重要的人",
    "每一个有你的夜晚都充满了甜蜜",
    "你是我最想守护的人",
    "和你在一起的每一天都是情人节",
    "你是我生命中的奇迹",
    "你的拥抱是我最温暖的港湾",
    "我爱你，直到永远",
    "你是我心中最美的梦",
    "和你在一起，我感到无比幸福",
    "你是我生命中最珍贵的礼物",
    "你的眼睛像星星一样闪亮",
    "和你在一起的时光是我最美好的回忆",
    "你是我生命中不可或缺的一部分",
    "愿我们的爱情像钻石一样永恒不变",
    "你的温柔让我沉醉",
    "每一次和你说话，我都感到无比快乐",
    "你是我心中的唯一",
    "愿我们的未来充满阳光和欢笑",
    "你的爱让我的生命变得完整",
    "和你在一起，我忘记了所有的烦恼",
    "你是我最想陪伴的人",
    "愿我们的爱情像春天的花朵一样美丽",
    "你的笑容让我的一天都充满了阳光",
    "和你在一起的每一分钟都是珍贵的",
    "你是我生命中最大的幸运",
    "愿我们的爱情像海洋一样深邃",
    "你的关心让我感到无比温暖",
    "每一次想起你，我的心都会感到甜蜜",
    "你是我最想保护的人",
    "愿我们的未来像彩虹一样美丽",
    "你的存在让我的生活变得有意义",
    "和你在一起，我感到无比的幸福和满足",
    "你是我生命中最美好的礼物",
    "愿我们的爱情像火焰一样炽热",
    "你的温柔和体贴让我感到无比幸福",
    "每一次和你相处，我都感到无比快乐",
    "你是我心中最爱的人",
    "愿我们的未来充满希望和梦想",
    "你的爱让我的生命变得更加精彩",
    "和你在一起，我忘记了时间的流逝",
    "你是我最想珍惜的人",
    "愿我们的爱情像星星一样闪耀",
    "你的笑容是我最想看到的画面",
    "每一次和你在一起，我都感到无比的幸福",
    "你是我生命中最重要的人",
    "愿我们的未来充满爱和温暖",
    "你的关心和爱护让我感到无比幸福",
    "和你在一起，我感到无比的快乐和满足",
    "你是我最想共度一生的人",
    "愿我们的爱情像春天一样充满生机",
    "你的温柔和善良让我感到无比幸福",
    "每一次想起你，我的心都会感到温暖",
    "你是我心中最珍贵的人",
    "愿我们的未来充满阳光和欢笑",
    "你的爱让我的生命变得更加美好",
    "和你在一起，我感到无比的幸福和快乐",
    "你是我最想陪伴的人",
    "愿我们的爱情像钻石一样永恒",
    "你的笑容让我的一天都充满了阳光",
    "每一次和你说话，我都感到无比的快乐",
    "你是我生命中最美好的相遇",
    "愿我们的未来充满希望和梦想",
    "你的关心和爱护让我感到无比温暖",
    "和你在一起，我忘记了所有的烦恼",
    "你是我最想珍惜的人",
    "愿我们的爱情像火焰一样炽热",
    "你的温柔和体贴让我感到无比幸福",
    "每一次和你相处，我都感到无比的快乐",
    "你是我心中最爱的人",
    "愿我们的未来充满爱和温暖",
    "你的爱让我的生命变得更加精彩",
    "和你在一起，我感到无比的幸福和满足",
    "你是我最想共度一生的人",
    "愿我们的爱情像春天一样充满生机",
    "你的笑容是我最想看到的画面",
    "每一次想起你，我的心都会感到甜蜜",
    "你是我生命中最重要的人",
    "愿我们的未来充满阳光和欢笑",
    "你的关心和爱护让我感到无比幸福",
    "和你在一起，我感到无比的快乐和满足",
    "你是我最想陪伴的人",
    "愿我们的爱情像钻石一样永恒",
    "你的温柔和善良让我感到无比幸福",
    "每一次和你说话，我都感到无比的快乐",
    "你是我心中最珍贵的人"
];

// 弹窗容器
const popupContainer = document.getElementById('popup-container');

// 弹窗生成间隔
let popupInterval;
// 爱心生成间隔
let heartInterval;

// 自动开始生成弹窗
window.addEventListener('load', function() {
    // 生成背景爱心
    createHearts();
    
    // 进一步加快弹窗速度，每0.1秒生成一个弹窗
    popupInterval = setInterval(createPopup, 100);
});

// 创建弹窗
function createPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    
    // 随机选择一个问候语
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    popup.innerHTML = `<p>${randomGreeting}</p>`;
    
    // 随机位置，在全屏内不限区域
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    
    popup.style.left = `${randomX}px`;
    popup.style.top = `${randomY}px`;
    
    // 随机颜色边框
    const colors = ['#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    popup.style.borderLeft = `4px solid ${randomColor}`;
    
    // 添加到容器
    popupContainer.appendChild(popup);
    
    // 3秒后移除弹窗
    setTimeout(() => {
        popup.classList.add('fade-out');
        setTimeout(() => {
            popup.remove();
        }, 500);
    }, 3000);
}

// 创建背景爱心
function createHearts() {
    heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // 随机位置
        const randomX = Math.random() * window.innerWidth;
        heart.style.left = `${randomX}px`;
        
        // 随机大小
        const randomSize = Math.random() * 10 + 10;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;
        
        // 随机飘落速度
        const randomDuration = Math.random() * 10 + 10;
        heart.style.animationDuration = `${randomDuration}s`;
        
        // 随机延迟
        const randomDelay = Math.random() * 5;
        heart.style.animationDelay = `${randomDelay}s`;
        
        // 添加到页面
        document.body.appendChild(heart);
        
        // 动画结束后移除
        setTimeout(() => {
            heart.remove();
        }, (randomDuration + randomDelay) * 1000);
    }, 500);
}

// 页面加载时添加背景效果
window.addEventListener('load', function() {
    // 创建背景效果容器
    const backgroundEffect = document.createElement('div');
    backgroundEffect.className = 'background-effect';
    document.body.appendChild(backgroundEffect);
    
    // 页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
});