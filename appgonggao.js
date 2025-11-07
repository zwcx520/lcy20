document.addEventListener('DOMContentLoaded', function() {
            const popupOverlay = document.getElementById('popupOverlay');
            const showPopupBtn = document.getElementById('showPopup');
            const closePopupBtn = document.getElementById('closePopup');
            const cancelBtn = document.getElementById('cancelBtn');
            const viewBtn = document.getElementById('viewBtn');
            
            // 检查是否已经显示过公告
            const announcementSeen = localStorage.getItem('announcementSeen');
            const announcementVersion = localStorage.getItem('announcementVersion');
            const currentVersion = '2025-09-06';
            
            // 如果公告版本已更新或者用户手动点击，则显示弹窗
            if (announcementVersion !== currentVersion) {
                setTimeout(() => {
                    popupOverlay.classList.add('active');
                }, 1000);
            }
            
            // 显示弹窗按钮
            showPopupBtn.addEventListener('click', function() {
                popupOverlay.classList.add('active');
            });
            
            // 关闭弹窗
            function closePopup() {
                popupOverlay.classList.remove('active');
                // 存储已读状态和版本号
                localStorage.setItem('announcementSeen', 'true');
                localStorage.setItem('announcementVersion', currentVersion);
            }
            
            // 关闭按钮事件
            closePopupBtn.addEventListener('click', closePopup);
            cancelBtn.addEventListener('click', closePopup);
            
            // 查看详情按钮事件
            viewBtn.addEventListener('click', function() {
                // 这里可以替换为实际链接
                alert('即将跳转到公告详情页面');
                // window.location.href = 'https://lcy20.netlify.app/gonggao.html';
                closePopup();
            });
            
            // 点击遮罩层关闭弹窗
            popupOverlay.addEventListener('click', function(e) {
                if (e.target === popupOverlay) {
                    closePopup();
                }
            });
            
            // ESC键关闭弹窗
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
                    closePopup();
                }
            });
        });
 
	