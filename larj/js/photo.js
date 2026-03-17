// 照片数据
const photoData = [
  {
    id: 1,
    date: '2026-03-18',
    src: 'https://picsum.photos/seed/cp1/300/300.jpg',
    description: '一起去公园散步'
  },
  {
    id: 2,
    date: '2026-03-18',
    src: 'https://picsum.photos/seed/cp2/300/300.jpg',
    description: '午餐约会'
  },
  {
    id: 3,
    date: '2026-03-17',
    src: 'https://picsum.photos/seed/cp3/300/300.jpg',
    description: '看电影'
  },
  {
    id: 4,
    date: '2026-03-17',
    src: 'https://picsum.photos/seed/cp4/300/300.jpg',
    description: '逛街'
  },
  {
    id: 5,
    date: '2026-02-14',
    src: 'https://picsum.photos/seed/cp5/300/300.jpg',
    description: '情人节'
  },
  {
    id: 6,
    date: '2026-02-14',
    src: 'https://picsum.photos/seed/cp6/300/300.jpg',
    description: '情人节晚餐'
  },
  {
    id: 7,
    date: '2025-12-25',
    src: 'https://picsum.photos/seed/cp7/300/300.jpg',
    description: '圣诞节'
  },
  {
    id: 8,
    date: '2025-12-25',
    src: 'https://picsum.photos/seed/cp8/300/300.jpg',
    description: '圣诞礼物'
  },
  {
    id: 9,
    date: '2025-12-25',
    src: 'https://picsum.photos/seed/cp9/300/300.jpg',
    description: '圣诞树'
  }
];

// 按年月日分类照片
function categorizePhotosByDate(photos) {
  const categorized = {};
  
  photos.forEach(photo => {
    const [year, month, day] = photo.date.split('-');
    
    if (!categorized[year]) {
      categorized[year] = {};
    }
    if (!categorized[year][month]) {
      categorized[year][month] = {};
    }
    if (!categorized[year][month][day]) {
      categorized[year][month][day] = [];
    }
    
    categorized[year][month][day].push(photo);
  });
  
  return categorized;
}

// 渲染照片列表
function renderPhotoList(filterText = '') {
  const photoContainer = document.getElementById('photo-list');
  if (!photoContainer) return;
  
  photoContainer.innerHTML = '';
  
  const filteredPhotos = filterText ? 
    photoData.filter(item => item.date.includes(filterText)) : 
    photoData;
  
  const categorizedPhotos = categorizePhotosByDate(filteredPhotos);
  
  // 按年份降序排序
  Object.keys(categorizedPhotos).sort((a, b) => b - a).forEach(year => {
    const yearDiv = document.createElement('div');
    yearDiv.className = 'year-section mb-4';
    yearDiv.innerHTML = `<h5 class="year-title">${year}年</h5>`;
    
    // 按月降序排序
    Object.keys(categorizedPhotos[year]).sort((a, b) => b - a).forEach(month => {
      const monthDiv = document.createElement('div');
      monthDiv.className = 'month-section mb-3';
      monthDiv.innerHTML = `<h6 class="month-title">${month}月</h6>`;
      
      // 按日降序排序
      Object.keys(categorizedPhotos[year][month]).sort((a, b) => b - a).forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day-section mb-3';
        dayDiv.innerHTML = `<div class="day-title">${day}日</div>`;
        
        // 创建照片网格
        const photoGrid = document.createElement('div');
        photoGrid.className = 'photo-grid';
        
        // 渲染当天的照片
        categorizedPhotos[year][month][day].forEach(photo => {
          const photoItem = document.createElement('div');
          photoItem.className = 'photo-item';
          photoItem.innerHTML = `
            <img src="${photo.src}" alt="${photo.description}">
            <div class="photo-description">${photo.description}</div>
          `;
          
          photoGrid.appendChild(photoItem);
        });
        
        dayDiv.appendChild(photoGrid);
        monthDiv.appendChild(dayDiv);
      });
      
      yearDiv.appendChild(monthDiv);
    });
    
    photoContainer.appendChild(yearDiv);
  });
}

// 初始化页面
function initPhotoPage() {
  renderPhotoList();
  
  // 绑定搜索事件
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      renderPhotoList(this.value);
    });
  }
}