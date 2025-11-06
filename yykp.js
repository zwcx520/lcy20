document.addEventListener('DOMContentLoaded', function() {
            const musicPlayer = document.querySelector('.music-player');
            const toggleBtn = document.querySelector('.toggle-btn');
            const playPauseBtn = document.querySelector('.play-pause');
            const playIcon = playPauseBtn.querySelector('i');
            const progressBar = document.querySelector('.progress-bar');
            const progress = document.querySelector('.progress');
            const currentTimeEl = document.querySelector('.current');
            const durationEl = document.querySelector('.duration');
            const volumeSlider = document.querySelector('.volume-slider');
            const volumeProgress = document.querySelector('.volume-progress');
            const loopBtn = document.querySelector('.fa-redo');
            
            // 模拟音频对象
            const audio = new Audio();
            audio.src = "webyy.mp3"; // 示例音频
            
            // 设置自动播放和循环
            audio.loop = true; // 启用循环播放
            let isAutoPlayEnabled = true; // 标记自动播放是否启用
            
            // 切换播放器展开/收起
            toggleBtn.addEventListener('click', function() {
                musicPlayer.classList.toggle('expanded');
                const icon = toggleBtn.querySelector('i');
                if (musicPlayer.classList.contains('expanded')) {
                    icon.classList.remove('fa-music');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-music');
                }
            });
            
            // 播放/暂停功能
            playPauseBtn.addEventListener('click', function() {
                if (audio.paused) {
                    audio.play();
                    playIcon.classList.remove('fa-play');
                    playIcon.classList.add('fa-pause');
                } else {
                    audio.pause();
                    playIcon.classList.remove('fa-pause');
                    playIcon.classList.add('fa-play');
                }
            });
            
            // 更新进度条
            audio.addEventListener('timeupdate', function() {
                const currentTime = audio.currentTime;
                const duration = audio.duration;
                
                if (duration) {
                    const progressPercent = (currentTime / duration) * 100;
                    progress.style.width = `${progressPercent}%`;
                    
                    // 更新时间显示
                    const currentMinutes = Math.floor(currentTime / 60);
                    const currentSeconds = Math.floor(currentTime % 60);
                    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
                    
                    const durationMinutes = Math.floor(duration / 60);
                    const durationSeconds = Math.floor(duration % 60);
                    durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
                }
            });
            
            // 点击进度条跳转
            progressBar.addEventListener('click', function(e) {
                const progressWidth = this.clientWidth;
                const clickedOffsetX = e.offsetX;
                const duration = audio.duration;
                
                audio.currentTime = (clickedOffsetX / progressWidth) * duration;
            });
            
            // 音量控制
            volumeSlider.addEventListener('click', function(e) {
                const volumeWidth = this.clientWidth;
                const clickedOffsetX = e.offsetX;
                const volume = clickedOffsetX / volumeWidth;
                
                audio.volume = volume;
                volumeProgress.style.width = `${volume * 100}%`;
            });
            
            // 循环播放控制
            loopBtn.addEventListener('click', function() {
                audio.loop = !audio.loop;
                if (audio.loop) {
                    loopBtn.style.color = '#ff6b6b';
                } else {
                    loopBtn.style.color = '';
                }
            });
            
            // 初始化音量和循环状态
            audio.volume = 0.7;
            loopBtn.style.color = '#ff6b6b'; // 初始状态为启用循环
            
            // 模拟音频加载完成
            audio.addEventListener('loadedmetadata', function() {
                const durationMinutes = Math.floor(audio.duration / 60);
                const durationSeconds = Math.floor(audio.duration % 60);
                durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
                
                // 自动播放音乐
                if (isAutoPlayEnabled) {
                    audio.play().then(() => {
                        playIcon.classList.remove('fa-play');
                        playIcon.classList.add('fa-pause');
                    }).catch(error => {
                        console.log('自动播放被阻止:', error);
                        // 如果自动播放被阻止，显示提示
                        const playBtn = document.querySelector('.play-pause');
                        playBtn.style.animation = 'pulse 2s infinite';
                        
                        // 添加CSS动画
                        const style = document.createElement('style');
                        style.textContent = `
                            @keyframes pulse {
                                0% { transform: scale(1); }
                                50% { transform: scale(1.1); }
                                100% { transform: scale(1); }
                            }
                        `;
                        document.head.appendChild(style);
                    });
                }
            });
            
            // 响应式调整 - 窗口大小变化时调整播放器位置
            window.addEventListener('resize', function() {
                if (window.innerWidth <= 576 && musicPlayer.classList.contains('expanded')) {
                    musicPlayer.style.top = '50%';
                    musicPlayer.style.left = '50%';
                    musicPlayer.style.transform = 'translate(-50%, -50%)';
                } else if (musicPlayer.classList.contains('expanded')) {
                    musicPlayer.style.top = '50%';
                    musicPlayer.style.transform = 'translateY(-50%)';
                }
            });
        });
