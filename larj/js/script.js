// ============== 实时状态栏时间 + 动态电量 ==============
let batteryLevel = 99;
const batteryIcon = document.getElementById('batteryIcon');
const batteryText = document.getElementById('batteryText');
const realTime = document.getElementById('realTime');

// 更新实时时间
function updateTime() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  realTime.innerText = `${h}:${m}`;
}

// 更新模拟电量
function updateBattery() {
  if (batteryLevel <= 0) batteryLevel = 100;
  batteryText.innerText = batteryLevel + '%';

  if (batteryLevel > 80) {
    batteryIcon.className = 'fa-solid fa-battery-full';
  } else if (batteryLevel > 50) {
    batteryIcon.className = 'fa-solid fa-battery-three-quarters';
  } else if (batteryLevel > 20) {
    batteryIcon.className = 'fa-solid fa-battery-half';
  } else if (batteryLevel > 5) {
    batteryIcon.className = 'fa-solid fa-battery-quarter';
  } else {
    batteryIcon.className = 'fa-solid fa-battery-empty';
  }
  batteryLevel -= 1;
}

// ============== 计算恋爱天数 ==============
function updateLoveDays() {
  const startDate = new Date('2012-03-18 00:00:00');
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // 更新首页的恋爱天数
  const loveDaysElement = document.querySelector('.lover-head .text-muted');
  if (loveDaysElement) {
    loveDaysElement.innerText = `相恋第 ${diffDays} 天`;
  }
  
  // 更新情侣信息卡片的恋爱天数
  const loverDaysNumElement = document.getElementById('lover-days-num');
  if (loverDaysNumElement) {
    loverDaysNumElement.innerText = diffDays;
  }
  
  // 更新倒计时卡片中的恋爱天数
  const countItemElement = document.querySelector('.count-item .num');
  if (countItemElement && countItemElement.nextElementSibling && countItemElement.nextElementSibling.innerText === '相恋天数') {
    countItemElement.innerText = diffDays;
  }
  
  // 更新纪念日页面的相恋天数
  const anniversaryElement = document.getElementById('love-days');
  if (anniversaryElement) {
    anniversaryElement.innerText = `${diffDays} 天`;
  }
}

// ============== 生日管理 ==============
// 生日数据
const birthdays = {
  boy: {
    name: '廖先生',
    birthday: '2004-10-22' // 假设男生生日
  },
  girl: {
    name: '某女士',
    birthday: '2000-01-01' // 假设女生生日
  }
};

// 计算距离生日的天数
function getDaysUntilBirthday(birthday) {
  const today = new Date();
  const [year, month, day] = birthday.split('-');
  const nextBirthday = new Date(today.getFullYear(), month - 1, day);
  
  if (nextBirthday < today) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  
  const diffTime = nextBirthday - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// 计算互相陪对方度过的生日
function calculateBirthdaysTogether() {
  const startDate = new Date('2012-03-18'); // 相恋开始日期
  const now = new Date();
  
  // 计算男生过了几个生日（女生陪男生过的）
  const [boyYear, boyMonth, boyDay] = birthdays.boy.birthday.split('-');
  let boyBirthdays = 0;
  for (let year = startDate.getFullYear(); year <= now.getFullYear(); year++) {
    const birthdayDate = new Date(year, boyMonth - 1, boyDay);
    if (birthdayDate >= startDate && birthdayDate <= now) {
      boyBirthdays++;
    }
  }
  
  // 计算女生过了几个生日（男生陪女生过的）
  const [girlYear, girlMonth, girlDay] = birthdays.girl.birthday.split('-');
  let girlBirthdays = 0;
  for (let year = startDate.getFullYear(); year <= now.getFullYear(); year++) {
    const birthdayDate = new Date(year, girlMonth - 1, girlDay);
    if (birthdayDate >= startDate && birthdayDate <= now) {
      girlBirthdays++;
    }
  }
  
  return { boyBirthdays, girlBirthdays };
}

// 更新生日信息
function updateBirthdayInfo() {
  // 更新情侣名字
  const coupleNamesElement = document.getElementById('couple-names');
  if (coupleNamesElement) {
    coupleNamesElement.innerText = `${birthdays.boy.name} & ${birthdays.girl.name}`;
  }
  
  // 更新男生名字和生日信息
  const boyNameElement = document.getElementById('boy-name');
  const boyBirthdayElement = document.getElementById('boy-birthday');
  const boyCountdownElement = document.getElementById('boy-birthday-countdown');
  if (boyNameElement) {
    boyNameElement.innerText = birthdays.boy.name;
  }
  if (boyBirthdayElement && boyCountdownElement) {
    boyBirthdayElement.innerText = birthdays.boy.birthday;
    const boyDays = getDaysUntilBirthday(birthdays.boy.birthday);
    boyCountdownElement.innerText = `${boyDays} 天`;
  }
  
  // 更新女生名字和生日信息
  const girlNameElement = document.getElementById('girl-name');
  const girlBirthdayElement = document.getElementById('girl-birthday');
  const girlCountdownElement = document.getElementById('girl-birthday-countdown');
  if (girlNameElement) {
    girlNameElement.innerText = birthdays.girl.name;
  }
  if (girlBirthdayElement && girlCountdownElement) {
    girlBirthdayElement.innerText = birthdays.girl.birthday;
    const girlDays = getDaysUntilBirthday(birthdays.girl.birthday);
    girlCountdownElement.innerText = `${girlDays} 天`;
  }
  
  // 更新互相陪对方度过的生日数量
  const boyNameInTotalElement = document.getElementById('boy-name-in-total');
  const boyBirthdaysTotalElement = document.getElementById('boy-birthdays-total');
  const girlNameInTotalElement = document.getElementById('girl-name-in-total');
  const girlBirthdaysTotalElement = document.getElementById('girl-birthdays-total');
  
  const birthdaysTogether = calculateBirthdaysTogether();
  
  if (boyNameInTotalElement) {
    boyNameInTotalElement.innerText = birthdays.boy.name;
  }
  if (boyBirthdaysTotalElement) {
    boyBirthdaysTotalElement.innerText = `${birthdaysTogether.boyBirthdays} 个`;
  }
  if (girlNameInTotalElement) {
    girlNameInTotalElement.innerText = birthdays.girl.name;
  }
  if (girlBirthdaysTotalElement) {
    girlBirthdaysTotalElement.innerText = `${birthdaysTogether.girlBirthdays} 个`;
  }
}

// 每秒刷新时间 & 每30秒掉电1%
updateTime();
updateBattery();
updateLoveDays();
updateBirthdayInfo();
setInterval(updateTime, 1000);
setInterval(updateBattery, 30000);
setInterval(updateLoveDays, 1000);
setInterval(updateBirthdayInfo, 1000);

// ============== 浪漫语录 ==============
const loveQuotes = [
  "山野千里，你是我藏在微风中的欢喜。",
  "我攒了好多年的温柔，全部都给你。",
  "世界一般，但你超值。",
  "你是年少的欢喜，也是余生的甜蜜。",
  "晚风踩着云，而我只喜欢你。",
  "你是我绕过山河错落，才找到的人间烟火。",
  "我喜欢你，胜于昨日，略匮明朝。",
  "你是我明目张胆的偏爱，是我众所周知的私心。",
  "人间烟火，山河远阔，无一是你，无一不是你。",
  "你是我一生只会遇见一次的惊喜。",
  "我想和你一起，看尽人间烟火，尝遍世间冷暖。",
  "你是我藏在云层里的月亮，也是我穷极一生寻找的宝藏。",
  "我对你的喜欢，就像夏天的风，吹过了整个季节。",
  "你是我所有的温柔和偏爱。",
  "我喜欢你，不是情话，是心里话。",
  "你是我生命中最美好的意外。",
  "我想和你一起，从新鲜感走到归属感。",
  "你是我明目张胆的喜欢，众所周知的偏爱。",
  "人间值得，因为有你。",
  "你是我漫漫人生里，斩钉截铁的选择。",
  "我想和你一起，度过每一个春夏秋冬。",
  "你是我见过最美好的人。",
  "我喜欢你，像风走了八千里，不问归期。",
  "你是我生命中最温暖的存在。",
  "我想和你一起，看遍所有的风景。",
  "你是我明目张胆的偏爱，是我众所周知的私心。",
  "人间烟火，山河远阔，无一是你，无一不是你。",
  "你是我一生只会遇见一次的惊喜。",
  "我想和你一起，看尽人间烟火，尝遍世间冷暖。",
  "你是我藏在云层里的月亮，也是我穷极一生寻找的宝藏。",
  "我对你的喜欢，就像夏天的风，吹过了整个季节。",
  "你是我所有的温柔和偏爱。",
  "我喜欢你，不是情话，是心里话。",
  "你是我生命中最美好的意外。",
  "我想和你一起，从新鲜感走到归属感。",
  "你是我明目张胆的喜欢，众所周知的偏爱。",
  "人间值得，因为有你。",
  "你是我漫漫人生里，斩钉截铁的选择。",
  "我想和你一起，度过每一个春夏秋冬。",
  "你是我见过最美好的人。",
  "我喜欢你，像风走了八千里，不问归期。",
  "你是我生命中最温暖的存在。",
  "我想和你一起，看遍所有的风景。",
  "你是我明目张胆的偏爱，是我众所周知的私心。",
  "人间烟火，山河远阔，无一是你，无一不是你。",
  "你是我一生只会遇见一次的惊喜。",
  "我想和你一起，看尽人间烟火，尝遍世间冷暖。",
  "你是我藏在云层里的月亮，也是我穷极一生寻找的宝藏。",
  "我对你的喜欢，就像夏天的风，吹过了整个季节。",
  "你是我所有的温柔和偏爱。",
  "我喜欢你，不是情话，是心里话。",
  "你是我生命中最美好的意外。",
  "我想和你一起，从新鲜感走到归属感。",
  "你是我明目张胆的喜欢，众所周知的偏爱。",
  "人间值得，因为有你。",
  "你是我漫漫人生里，斩钉截铁的选择。",
  "我想和你一起，度过每一个春夏秋冬。",
  "你是我见过最美好的人。",
  "我喜欢你，像风走了八千里，不问归期。",
  "你是我生命中最温暖的存在。",
  "我想和你一起，看遍所有的风景。",
  "你是我明目张胆的偏爱，是我众所周知的私心。",
  "人间烟火，山河远阔，无一是你，无一不是你。",
  "你是我一生只会遇见一次的惊喜。",
  "我想和你一起，看尽人间烟火，尝遍世间冷暖。",
  "你是我藏在云层里的月亮，也是我穷极一生寻找的宝藏。",
  "我对你的喜欢，就像夏天的风，吹过了整个季节。",
  "你是我所有的温柔和偏爱。",
  "我喜欢你，不是情话，是心里话。",
  "你是我生命中最美好的意外。",
  "我想和你一起，从新鲜感走到归属感。",
  "你是我明目张胆的喜欢，众所周知的偏爱。",
  "人间值得，因为有你。",
  "你是我漫漫人生里，斩钉截铁的选择。",
  "我想和你一起，度过每一个春夏秋冬。",
  "你是我见过最美好的人。",
  "我喜欢你，像风走了八千里，不问归期。",
  "你是我生命中最温暖的存在。",
  "我想和你一起，看遍所有的风景。",
  "你是我明目张胆的偏爱，是我众所周知的私心。",
  "人间烟火，山河远阔，无一是你，无一不是你。",
  "你是我一生只会遇见一次的惊喜。",
  "我想和你一起，看尽人间烟火，尝遍世间冷暖。",
  "你是我藏在云层里的月亮，也是我穷极一生寻找的宝藏。",
  "我对你的喜欢，就像夏天的风，吹过了整个季节。",
  "你是我所有的温柔和偏爱。",
  "我喜欢你，不是情话，是心里话。",
  "你是我生命中最美好的意外。",
  "我想和你一起，从新鲜感走到归属感。",
  "你是我明目张胆的喜欢，众所周知的偏爱。",
  "人间值得，因为有你。",
  "你是我漫漫人生里，斩钉截铁的选择。"
];

// 随机显示一条浪漫语录
function showRandomQuote() {
  const todayWord = document.getElementById('todayWord');
  if (todayWord) {
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    todayWord.innerHTML = randomQuote;
  }
}

// 初始化时显示随机语录
showRandomQuote();
