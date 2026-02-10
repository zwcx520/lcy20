class MusicPlayer {
    constructor() {
        this.audioElement = document.getElementById('audio-player');
        this.musicList = document.getElementById('music-list');
        this.playButton = document.getElementById('play-btn');
        this.prevButton = document.getElementById('prev-btn');
        this.nextButton = document.getElementById('next-btn');
        this.progressBar = document.querySelector('.progress-bar');
        this.progress = document.getElementById('progress');
        this.currentTimeEl = document.getElementById('current-time');
        this.durationEl = document.getElementById('duration');
        this.volumeBar = document.querySelector('.volume-bar');
        this.volumeLevel = document.getElementById('volume-level');
        this.currentTitleEl = document.getElementById('current-title');
        this.currentArtistEl = document.getElementById('current-artist');
        this.currentCoverEl = document.getElementById('current-cover').querySelector('img');
        this.recentPlaysEl = document.getElementById('recent-plays');
        
        this.musicData = [];
        this.currentIndex = -1;
        this.isPlaying = false;
        this.shuffleMode = false;
        this.repeatMode = false;
        this.volume = 0.7;
        
        this.init();
    }
    
    init() {
        this.loadMusicFiles();
        this.setupEventListeners();
        this.loadRecentPlays();
        this.setDefaultCover();
    }
    
    setDefaultCover() {
        this.currentCoverEl.src = 'https://picsum.photos/300/300';
    }
    
    loadMusicFiles() {
        const musicFiles = [
            {
                filename: '不见桃花不见秋-小流年.mp3',
                title: '小流年',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=0',
                created: '2026-02-08',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 1990.mp3',
                title: '1990',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=1',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 321 (追吻辰星 remix).mp3',
                title: '321 (追吻辰星 remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=2',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - Drown (追吻辰星 remix).mp3',
                title: 'Drown (追吻辰星 remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=3',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - Heist (追吻辰星 remix).mp3',
                title: 'Heist (追吻辰星 remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=4',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - Imaging (追吻辰星 remix).mp3',
                title: 'Imaging (追吻辰星 remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=5',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - Natural (追吻辰星 remix).mp3',
                title: 'Natural (追吻辰星 remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=6',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - Ride It (追吻辰星 remix).mp3',
                title: 'Ride It (追吻辰星 remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=7',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - Trade (追吻辰星 remix).mp3',
                title: 'Trade (追吻辰星 remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=8',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - it (Remix).mp3',
                title: 'it (Remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=9',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - 一个人的十字路口.mp3',
                title: '一个人的十字路口',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=10',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 乘风的我.mp3',
                title: '乘风的我',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=11',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 他总在深夜数着期待.mp3',
                title: '他总在深夜数着期待',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=12',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 住在心里的陌生人.mp3',
                title: '住在心里的陌生人',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=13',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 余温·一.mp3',
                title: '余温·一',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=14',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 余温·二.mp3',
                title: '余温·二',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=15',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 你存在我第二个不存在的世界.mp3',
                title: '你存在我第二个不存在的世界',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=16',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 借我一个依靠.mp3',
                title: '借我一个依靠',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=17',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 回忆中的风.mp3',
                title: '回忆中的风',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=18',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 回忆存折.mp3',
                title: '回忆存折',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=19',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 太空旋律 (追吻辰星 remix).mp3',
                title: '太空旋律 (追吻辰星 remix)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=20',
                created: '2026-02-07',
                category: 'Remix'
            },
            {
                filename: '不见桃花不见秋 - 她的故乡威远.mp3',
                title: '她的故乡威远',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=21',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 季风信封.mp3',
                title: '季风信封',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=22',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 寂.mp3',
                title: '寂',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=23',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 寄往昨日收件人.mp3',
                title: '寄往昨日收件人',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=24',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 寒阶落梅.mp3',
                title: '寒阶落梅',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=25',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 念.mp3',
                title: '念',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=26',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 惊艳时光温柔岁月的你.mp3',
                title: '惊艳时光温柔岁月的你',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=27',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 想念的夜.mp3',
                title: '想念的夜',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=28',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 散不去的余温.mp3',
                title: '散不去的余温',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=29',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 旅途.mp3',
                title: '旅途',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=30',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 无尽思念.mp3',
                title: '无尽思念',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=31',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 时光折痕.mp3',
                title: '时光折痕',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=32',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 月满庭.mp3',
                title: '月满庭',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=33',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 未完成的故事.mp3',
                title: '未完成的故事',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=34',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 某夜的梦.mp3',
                title: '某夜的梦',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=35',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 橘色星途.mp3',
                title: '橘色星途',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=36',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 没有你的日子会下雪.mp3',
                title: '没有你的日子会下雪',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=37',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 灰烬标本.mp3',
                title: '灰烬标本',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=38',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 烂尾剧本.mp3',
                title: '烂尾剧本',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=39',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 电台情歌.mp3',
                title: '电台情歌',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=40',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 缝补时光的你.mp3',
                title: '缝补时光的你',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=41',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 落日归航.mp3',
                title: '落日归航',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=42',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 褪色日历.mp3',
                title: '褪色日历',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=43',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 过期的船票.mp3',
                title: '过期的船票',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=44',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 过期约定.mp3',
                title: '过期约定',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=45',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 遇见你刚刚好.mp3',
                title: '遇见你刚刚好',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=46',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 阴雨过后.mp3',
                title: '阴雨过后',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=47',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 难.mp3',
                title: '难',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=48',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 雨鸣.mp3',
                title: '雨鸣',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=49',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 雪吻·一.mp3',
                title: '雪吻·一',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=50',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 雪吻·二.mp3',
                title: '雪吻·二',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=51',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 雪落无归·一.mp3',
                title: '雪落无归·一',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=52',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 雪落无归·二.mp3',
                title: '雪落无归·二',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=53',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 雾中的白玫瑰 (温柔版).mp3',
                title: '雾中的白玫瑰 (温柔版)',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=54',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 青春里的温柔印记.mp3',
                title: '青春里的温柔印记',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=55',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 静.mp3',
                title: '静',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=56',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋 - 风.mp3',
                title: '风',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=57',
                created: '2026-02-07',
                category: '原创作品'
            },
            {
                filename: '不见桃花不见秋、贺存朋 - 风一样的老贺.mp3',
                title: '风一样的老贺',
                artist: '不见桃花不见秋、贺存朋',
                cover: 'https://picsum.photos/300/300?random=58',
                created: '2026-02-07',
                category: '合作作品'
            },
            {
                filename: '不见桃花不见秋、贺存朋 - 风会记得一朵花.mp3',
                title: '风会记得一朵花',
                artist: '不见桃花不见秋、贺存朋',
                cover: 'https://picsum.photos/300/300?random=59',
                created: '2026-02-07',
                category: '合作作品'
            },
            {
                filename: '不见桃花不见秋-未寄出的信.mp3',
                title: '未寄出的信',
                artist: '不见桃花不见秋',
                cover: 'https://picsum.photos/300/300?random=60',
                created: '2026-02-11',
                category: '原创作品'
            }
        ];
        
        this.musicData = musicFiles;
        this.renderMusicList();
    }
    
    renderMusicList() {
        this.musicList.innerHTML = '';
        
        this.musicData.forEach((music, index) => {
            const musicItem = document.createElement('div');
            musicItem.className = 'music-item';
            musicItem.dataset.index = index;
            
            musicItem.innerHTML = `
                <div class="music-cover">
                    <img src="${music.cover}" alt="${music.title} 封面">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="music-category" style="position: absolute; top: 10px; left: 10px; background-color: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem; font-weight: 500; cursor: pointer;">
                        ${music.category}
                    </div>
                </div>
                <div class="music-info">
                    <h3 class="music-title">${music.title}</h3>
                    <p class="music-artist">${music.artist}</p>
                    <div class="music-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${music.created}</span>
                        <span><i class="fas fa-music"></i> ${music.category}</span>
                    </div>
                </div>
            `;
            
            musicItem.addEventListener('click', () => this.playMusic(index));
            musicItem.querySelector('.music-category').addEventListener('click', (e) => {
                e.stopPropagation();
                this.filterByCategory(music.category);
            });
            this.musicList.appendChild(musicItem);
        });
    }
    
    setupEventListeners() {
        // 播放/暂停按钮
        this.playButton.addEventListener('click', () => this.togglePlay());
        
        // 上一首/下一首按钮
        this.prevButton.addEventListener('click', () => this.playPrev());
        this.nextButton.addEventListener('click', () => this.playNext());
        
        // 音频事件
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
        this.audioElement.addEventListener('ended', () => this.handleEnded());
        this.audioElement.addEventListener('loadedmetadata', () => this.updateDuration());
        
        // 进度条点击事件
        this.progressBar.addEventListener('click', (e) => this.setProgress(e));
        
        // 音量条点击事件
        this.volumeBar.addEventListener('click', (e) => this.setVolume(e));
        
        // 搜索功能
        const searchInput = document.querySelector('.search-box input');
        const searchButton = document.querySelector('.search-box button');
        
        searchButton.addEventListener('click', () => this.searchMusic(searchInput.value));
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchMusic(searchInput.value);
            }
        });
        
        // 排序功能
        const sortButtons = document.querySelectorAll('.sort-options button');
        sortButtons[0].addEventListener('click', () => this.sortMusic('title'));
        sortButtons[1].addEventListener('click', () => this.sortMusic('created'));
        
        // 分类导航
        const categoryLinks = document.querySelectorAll('.sidebar-section:first-child ul li a');
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterByCategory(link.textContent);
            });
        });
    }
    
    playMusic(index) {
        console.log('playMusic called with index:', index);
        
        if (index === this.currentIndex && this.isPlaying) {
            console.log('Same song playing, toggling play/pause');
            this.togglePlay();
            return;
        }
        
        this.currentIndex = index;
        console.log('Updated currentIndex:', this.currentIndex);
        
        if (!this.musicData[index]) {
            console.error('Music data not found for index:', index);
            return;
        }
        
        const music = this.musicData[index];
        console.log('Playing song:', music.title, 'by', music.artist);
        
        this.audioElement.src = music.filename;
        this.currentTitleEl.textContent = music.title;
        this.currentArtistEl.textContent = music.artist;
        this.currentCoverEl.src = music.cover;
        
        this.audioElement.play().then(() => {
            console.log('Audio started playing successfully');
            this.isPlaying = true;
            this.updatePlayButton();
            this.updateMusicItemStatus();
            this.addToRecentPlays(music);
        }).catch(error => {
            console.error('Error playing audio:', error);
            this.isPlaying = false;
            this.updatePlayButton();
        });
    }
    
    togglePlay() {
        if (this.isPlaying) {
            this.audioElement.pause();
        } else {
            this.audioElement.play();
        }
        this.isPlaying = !this.isPlaying;
        this.updatePlayButton();
    }
    
    playPrev() {
        if (this.musicData.length === 0) return;
        
        console.log('Before playPrev - currentIndex:', this.currentIndex);
        console.log('Music data length:', this.musicData.length);
        
        if (this.shuffleMode) {
            const randomIndex = Math.floor(Math.random() * this.musicData.length);
            console.log('Random index:', randomIndex);
            this.playMusic(randomIndex);
        } else {
            if (this.currentIndex === -1) {
                this.currentIndex = this.musicData.length - 1;
                console.log('No music playing, starting with last song - currentIndex:', this.currentIndex);
            } else if (this.currentIndex <= 0) {
                this.currentIndex = this.musicData.length - 1;
                console.log('At start of list, looping to end - currentIndex:', this.currentIndex);
            } else {
                this.currentIndex -= 1;
                console.log('Moving to previous song - currentIndex:', this.currentIndex);
            }
            this.playMusic(this.currentIndex);
        }
    }
    
    playNext() {
        if (this.musicData.length === 0) return;
        
        console.log('Before playNext - currentIndex:', this.currentIndex);
        console.log('Music data length:', this.musicData.length);
        
        if (this.shuffleMode) {
            const randomIndex = Math.floor(Math.random() * this.musicData.length);
            console.log('Random index:', randomIndex);
            this.playMusic(randomIndex);
        } else {
            if (this.currentIndex === -1) {
                this.currentIndex = 0;
                console.log('No music playing, starting with first song - currentIndex:', this.currentIndex);
            } else if (this.currentIndex >= this.musicData.length - 1) {
                this.currentIndex = 0;
                console.log('Reached end of list, looping to start - currentIndex:', this.currentIndex);
            } else {
                this.currentIndex += 1;
                console.log('Moving to next song - currentIndex:', this.currentIndex);
            }
            this.playMusic(this.currentIndex);
        }
    }
    
    handleEnded() {
        if (this.repeatMode) {
            this.audioElement.currentTime = 0;
            this.audioElement.play();
        } else {
            this.playNext();
        }
    }
    
    updateProgress() {
        const currentTime = this.audioElement.currentTime;
        const duration = this.audioElement.duration || 0;
        const progressPercent = (currentTime / duration) * 100;
        
        this.progress.style.width = `${progressPercent}%`;
        this.currentTimeEl.textContent = this.formatTime(currentTime);
    }
    
    updateDuration() {
        const duration = this.audioElement.duration || 0;
        this.durationEl.textContent = this.formatTime(duration);
    }
    
    setProgress(e) {
        const width = this.progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = this.audioElement.duration || 0;
        const seekTime = (clickX / width) * duration;
        
        this.audioElement.currentTime = seekTime;
    }
    
    setVolume(e) {
        const width = this.volumeBar.clientWidth;
        const clickX = e.offsetX;
        const volume = clickX / width;
        
        this.volume = volume;
        this.audioElement.volume = volume;
        this.volumeLevel.style.width = `${volume * 100}%`;
    }
    
    updatePlayButton() {
        const icon = this.playButton.querySelector('i');
        if (this.isPlaying) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    }
    
    updateMusicItemStatus() {
        document.querySelectorAll('.music-item').forEach((item, index) => {
            if (index === this.currentIndex) {
                item.classList.add('playing');
            } else {
                item.classList.remove('playing');
            }
        });
    }
    
    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    addToRecentPlays(music) {
        let recentPlays = JSON.parse(localStorage.getItem('recentPlays') || '[]');
        
        recentPlays = recentPlays.filter(item => item.filename !== music.filename);
        recentPlays.unshift(music);
        
        if (recentPlays.length > 5) {
            recentPlays = recentPlays.slice(0, 5);
        }
        
        localStorage.setItem('recentPlays', JSON.stringify(recentPlays));
        this.loadRecentPlays();
    }
    
    loadRecentPlays() {
        const recentPlays = JSON.parse(localStorage.getItem('recentPlays') || '[]');
        this.recentPlaysEl.innerHTML = '';
        
        if (recentPlays.length === 0) {
            const li = document.createElement('li');
            li.textContent = '暂无播放记录';
            this.recentPlaysEl.appendChild(li);
            return;
        }
        
        recentPlays.forEach((music, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = `${music.title} - ${music.artist}`;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const musicIndex = this.musicData.findIndex(m => m.filename === music.filename);
                if (musicIndex !== -1) {
                    this.playMusic(musicIndex);
                }
            });
            li.appendChild(a);
            this.recentPlaysEl.appendChild(li);
        });
    }
    
    searchMusic(query) {
        if (!query) {
            this.renderMusicList();
            return;
        }
        
        const queryLower = query.toLowerCase();
        const filteredMusic = this.musicData.filter(music => 
            music.title.toLowerCase().includes(queryLower) ||
            music.artist.toLowerCase().includes(queryLower) ||
            music.created.toLowerCase().includes(queryLower)
        );
        
        this.musicList.innerHTML = '';
        
        if (filteredMusic.length === 0) {
            const noResult = document.createElement('div');
            noResult.className = 'no-result';
            noResult.style.textAlign = 'center';
            noResult.style.padding = '2rem';
            noResult.style.color = 'var(--text-secondary)';
            noResult.textContent = '未找到匹配的音乐';
            this.musicList.appendChild(noResult);
            return;
        }
        
        const highlightText = (text, searchQuery) => {
            if (!searchQuery) return text;
            const regex = new RegExp(`(${searchQuery})`, 'gi');
            return text.replace(regex, '<span class="highlight">$1</span>');
        };
        
        filteredMusic.forEach((music, index) => {
            const originalIndex = this.musicData.findIndex(m => m.filename === music.filename);
            const musicItem = document.createElement('div');
            musicItem.className = 'music-item';
            musicItem.dataset.index = originalIndex;
            
            musicItem.innerHTML = `
                <div class="music-cover">
                    <img src="${music.cover}" alt="${music.title} 封面">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="music-category" style="position: absolute; top: 10px; left: 10px; background-color: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem; font-weight: 500; cursor: pointer;">
                        ${highlightText(music.category, query)}
                    </div>
                </div>
                <div class="music-info">
                    <h3 class="music-title">${highlightText(music.title, query)}</h3>
                    <p class="music-artist">${highlightText(music.artist, query)}</p>
                    <div class="music-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${highlightText(music.created, query)}</span>
                        <span><i class="fas fa-music"></i> ${highlightText(music.category, query)}</span>
                    </div>
                </div>
            `;
            
            musicItem.addEventListener('click', () => this.playMusic(originalIndex));
            musicItem.querySelector('.music-category').addEventListener('click', (e) => {
                e.stopPropagation();
                this.filterByCategory(music.category);
            });
            this.musicList.appendChild(musicItem);
        });
    }
    
    sortMusic(criteria) {
        if (criteria === 'title') {
            this.musicData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (criteria === 'created') {
            this.musicData.sort((a, b) => new Date(b.created) - new Date(a.created));
        }
        
        this.renderMusicList();
    }
    
    filterByCategory(category) {
        const filteredMusic = this.musicData.filter(music => music.category === category);
        
        this.musicList.innerHTML = '';
        
        if (filteredMusic.length === 0) {
            const noResult = document.createElement('div');
            noResult.className = 'no-result';
            noResult.style.textAlign = 'center';
            noResult.style.padding = '2rem';
            noResult.style.color = 'var(--text-secondary)';
            noResult.textContent = `未找到${category}分类的音乐`;
            this.musicList.appendChild(noResult);
            return;
        }
        
        filteredMusic.forEach((music, index) => {
            const originalIndex = this.musicData.findIndex(m => m.filename === music.filename);
            const musicItem = document.createElement('div');
            musicItem.className = 'music-item';
            musicItem.dataset.index = originalIndex;
            
            musicItem.innerHTML = `
                <div class="music-cover">
                    <img src="${music.cover}" alt="${music.title} 封面">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="music-category" style="position: absolute; top: 10px; left: 10px; background-color: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem; font-weight: 500; cursor: pointer;">
                        ${music.category}
                    </div>
                </div>
                <div class="music-info">
                    <h3 class="music-title">${music.title}</h3>
                    <p class="music-artist">${music.artist}</p>
                    <div class="music-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${music.created}</span>
                        <span><i class="fas fa-music"></i> ${music.category}</span>
                    </div>
                </div>
            `;
            
            musicItem.addEventListener('click', () => this.playMusic(originalIndex));
            musicItem.querySelector('.music-category').addEventListener('click', (e) => {
                e.stopPropagation();
                this.filterByCategory(music.category);
            });
            
            this.musicList.appendChild(musicItem);
        });
    }
}

// 初始化音乐播放器
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});

// 添加键盘快捷键功能
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    
    switch (e.key) {
        case ' ': // 空格键
            e.preventDefault();
            const player = window.musicPlayer || new MusicPlayer();
            player.togglePlay();
            break;
        case 'ArrowLeft': // 左箭头
            if (e.ctrlKey) {
                e.preventDefault();
                const player = window.musicPlayer || new MusicPlayer();
                player.playPrev();
            }
            break;
        case 'ArrowRight': // 右箭头
            if (e.ctrlKey) {
                e.preventDefault();
                const player = window.musicPlayer || new MusicPlayer();
                player.playNext();
            }
            break;
    }
});

// 全局访问
try {
    window.musicPlayer = new MusicPlayer();
} catch (error) {
    console.error('Failed to initialize music player:', error);

}


