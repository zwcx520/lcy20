// 日记数据
const diaryData = [
  {
    id: 1,
    time: '2026-03-18 14:30',
    content: '今天一起去吃了火锅，你笑起来真的好甜呀，希望每天都能这样开心。'
  }
];

// 按年月日分类日记
function categorizeDiaryByDate(diaryList) {
  const categorized = {};
  
  diaryList.forEach(item => {
    const date = item.time.split(' ')[0];
    const [year, month, day] = date.split('-');
    
    if (!categorized[year]) {
      categorized[year] = {};
    }
    if (!categorized[year][month]) {
      categorized[year][month] = {};
    }
    if (!categorized[year][month][day]) {
      categorized[year][month][day] = [];
    }
    
    categorized[year][month][day].push(item);
  });
  
  return categorized;
}

// 渲染日记列表
function renderDiaryList(filterText = '') {
  const diaryContainer = document.getElementById('diary-list');
  if (!diaryContainer) return;
  
  diaryContainer.innerHTML = '';
  
  const filteredDiary = filterText ? 
    diaryData.filter(item => item.content.includes(filterText)) : 
    diaryData;
  
  const categorizedDiary = categorizeDiaryByDate(filteredDiary);
  
  // 按年份降序排序
  Object.keys(categorizedDiary).sort((a, b) => b - a).forEach(year => {
    const yearDiv = document.createElement('div');
    yearDiv.className = 'year-section mb-4';
    yearDiv.innerHTML = `<h5 class="year-title">${year}年</h5>`;
    
    // 按月降序排序
    Object.keys(categorizedDiary[year]).sort((a, b) => b - a).forEach(month => {
      const monthDiv = document.createElement('div');
      monthDiv.className = 'month-section mb-3';
      monthDiv.innerHTML = `<h6 class="month-title">${month}月</h6>`;
      
      // 按日降序排序
      Object.keys(categorizedDiary[year][month]).sort((a, b) => b - a).forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day-section mb-2';
        dayDiv.innerHTML = `<div class="day-title">${day}日</div>`;
        
        // 渲染当天的日记
        categorizedDiary[year][month][day].forEach(item => {
          const diaryItem = document.createElement('div');
          diaryItem.className = 'diary-item';
          
          let content = item.content;
          if (filterText) {
            // 高亮显示搜索文本
            const regex = new RegExp(`(${filterText})`, 'gi');
            content = content.replace(regex, '<span class="highlight">$1</span>');
          }
          
          diaryItem.innerHTML = `
            <div class="time">${item.time.split(' ')[1]}</div>
            <div class="content">${content}</div>
          `;
          
          dayDiv.appendChild(diaryItem);
        });
        
        monthDiv.appendChild(dayDiv);
      });
      
      yearDiv.appendChild(monthDiv);
    });
    
    diaryContainer.appendChild(yearDiv);
  });
}

// 初始化页面
function initDiaryPage() {
  renderDiaryList();
  
  // 绑定搜索事件
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      renderDiaryList(this.value);
    });
  }
}
