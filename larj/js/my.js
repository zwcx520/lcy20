// 关于页面数据
const aboutData = {
  title: "恋爱日记",
  subtitle: "我们的恋爱日记 | 情侣专属空间",
  developerImage: "favicon.png",
  websiteInfo: {
    title: "💖 程序介绍",
    description: "这是一个开发者自己专为另一半设计的恋爱日记程序，旨在记录另一半之间的甜蜜时光和重要纪念日。通过这个程序，可以：",
    features: [
      "查看恋爱日常和重要事件",
      "管理和查看重要纪念日",
      "存储和分类甜蜜照片",
      "查看相恋天数和生日倒计时",
      "随机获取浪漫情话"
    ]
  },
  developerInfo: {
    title: "👨‍💻 开发者信息",
    details: [
      { label: "开发者", value: "不见桃花不见秋" },
      { label: "版本", value: "1.0.0" },
      { label: "发布日期", value: "2026-03-18" },
      { label: "联系方式", value: "1837601513@qq.com" }
    ]
  },
  terms: {
    title: "📄 使用条款",
    content: "本程序仅供开发者及开发者伴侣之间使用，未向网上发公布任何源代码及信息，所有数据仅保存在本地，不会上传到任何服务器。请妥善保管设备和浏览器数据。"
  }
};

// 获取当前年份
function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}

// 动态插入关于页面内容
function renderAboutPage() {
  // 更新页面标题
  const pageTitle = document.querySelector('.app-header');
  if (pageTitle) {
    pageTitle.innerText = "关于";
  }
  
  // 渲染开发者信息卡片
  const devCard = document.getElementById('dev-card');
  if (devCard) {
    devCard.innerHTML = `
      <img src="${aboutData.developerImage}" class="rounded-circle" width="100">
      <h5 class="mt-3 mb-1">${aboutData.title}</h5>
      <p class="small text-muted">${aboutData.subtitle}</p>
    `;
  }
  
  // 渲染APP介绍卡片
  const websiteCard = document.getElementById('website-card');
  if (websiteCard) {
    let featuresHtml = '';
    aboutData.websiteInfo.features.forEach(feature => {
      featuresHtml += `<li class="mb-2"><i class="fa-solid fa-check text-success me-2"></i> ${feature}</li>`;
    });
    
    websiteCard.innerHTML = `
      <h6 class="mb-3">${aboutData.websiteInfo.title}</h6>
      <p class="mb-3">${aboutData.websiteInfo.description}</p>
      <ul class="list-unstyled">
        ${featuresHtml}
      </ul>
    `;
  }
  
  // 渲染开发者信息卡片
  const developerCard = document.getElementById('developer-card');
  if (developerCard) {
    let detailsHtml = '';
    aboutData.developerInfo.details.forEach(detail => {
      detailsHtml += `
        <div class="d-flex justify-content-between mb-1">
          <span class="text-muted">${detail.label}</span>
          <span>${detail.value}</span>
        </div>
      `;
    });
    
    developerCard.innerHTML = `
      <h6 class="mb-3">${aboutData.developerInfo.title}</h6>
      <div class="mb-3">
        ${detailsHtml}
      </div>
    `;
  }
  
  // 渲染使用条款卡片
  const termsCard = document.getElementById('terms-card');
  if (termsCard) {
    termsCard.innerHTML = `
      <h6 class="mb-3">${aboutData.terms.title}</h6>
      <p class="small">${aboutData.terms.content}</p>
    `;
  }
  
  // 渲染版权信息卡片
  const copyrightCard = document.getElementById('copyright-card');
  if (copyrightCard) {
    const currentYear = getCurrentYear();
    copyrightCard.innerHTML = `
      <p class="text-muted small">© ${currentYear} 我们的恋爱日记 - 让爱情更美好</p>
    `;
  }
}

// 页面加载完成后渲染
window.onload = renderAboutPage;
