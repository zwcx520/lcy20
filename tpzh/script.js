class AnimeImageConverter {
    constructor() {
        this.files = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.initAnimations();
    }

    bindEvents() {
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const convertBtn = document.getElementById('convertBtn');
        const loadingOverlay = document.getElementById('loadingOverlay');

        // 点击上传区域触发文件选择
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        // 文件选择事件
        fileInput.addEventListener('change', (e) => {
            this.handleFileSelect(e.target.files);
        });

        // 拖拽上传
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = 'var(--secondary-dark)';
            uploadArea.style.backgroundColor = 'rgba(78, 205, 196, 0.1)';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = 'var(--secondary)';
            uploadArea.style.backgroundColor = 'rgba(78, 205, 196, 0.05)';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = 'var(--secondary)';
            uploadArea.style.backgroundColor = 'rgba(78, 205, 196, 0.05)';
            this.handleFileSelect(e.dataTransfer.files);
        });

        // 转换按钮点击事件
        convertBtn.addEventListener('click', () => {
            this.convertImages();
        });

        // 滚动动画
        window.addEventListener('scroll', () => {
            this.handleScrollAnimations();
        });
    }

    initAnimations() {
        // 初始化页面动画
        setTimeout(() => {
            this.handleScrollAnimations();
        }, 100);
    }

    handleScrollAnimations() {
        const elements = document.querySelectorAll('.anime-card');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight * 0.8) {
                element.classList.add('scroll-animate', 'visible');
            }
        });
    }

    handleFileSelect(fileList) {
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            if (this.isImageFile(file)) {
                this.addFile(file);
            } else {
                this.showMessage('请上传图片文件', 'error');
            }
        }
    }

    isImageFile(file) {
        return file.type.startsWith('image/');
    }

    addFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileData = {
                id: Date.now() + Math.random(),
                file: file,
                preview: e.target.result
            };
            this.files.push(fileData);
            this.updateFileList();
            this.showMessage('文件上传成功', 'success');
        };
        reader.onerror = () => {
            this.showMessage('文件读取失败', 'error');
        };
        reader.readAsDataURL(file);
    }

    updateFileList() {
        const fileListEl = document.getElementById('fileList');
        fileListEl.innerHTML = '';

        this.files.forEach(fileData => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.dataset.id = fileData.id;

            const fileSize = this.formatFileSize(fileData.file.size);

            fileItem.innerHTML = `
                <div class="file-info">
                    <img src="${fileData.preview}" alt="Preview" class="file-preview">
                    <div class="file-details">
                        <div class="file-name">${fileData.file.name}</div>
                        <div class="file-size">${fileSize}</div>
                    </div>
                </div>
                <button class="remove-file" onclick="animeConverter.removeFile(${fileData.id})">移除</button>
            `;

            fileListEl.appendChild(fileItem);

            // 添加动画效果
            setTimeout(() => {
                fileItem.style.animation = 'slideInUp 0.5s ease-out';
            }, 100);
        });
    }

    removeFile(id) {
        const fileItem = document.querySelector(`.file-item[data-id="${id}"]`);
        if (fileItem) {
            fileItem.style.animation = 'slideInUp 0.5s ease-out reverse';
            setTimeout(() => {
                this.files = this.files.filter(fileData => fileData.id !== id);
                this.updateFileList();
                this.showMessage('文件已移除', 'success');
            }, 500);
        }
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    async convertImages() {
        if (this.files.length === 0) {
            this.showMessage('请先上传图片文件', 'error');
            return;
        }

        const outputFormat = document.getElementById('outputFormat').value;
        const resultSection = document.getElementById('resultSection');
        const resultList = document.getElementById('resultList');
        const loadingOverlay = document.getElementById('loadingOverlay');

        // 显示加载动画
        loadingOverlay.classList.add('active');

        try {
            // 清空结果列表
            resultList.innerHTML = '';

            // 转换每个文件
            for (let i = 0; i < this.files.length; i++) {
                const fileData = this.files[i];
                const convertedBlob = await this.convertImage(fileData.file, outputFormat);
                await this.addResultItem(fileData, convertedBlob, outputFormat);
            }

            // 显示结果区域
            resultSection.style.display = 'block';
            resultSection.classList.add('scroll-animate', 'visible');

            this.showMessage('图片转换完成！', 'success');
        } catch (error) {
            console.error('转换失败:', error);
            this.showMessage('转换失败，请重试', 'error');
        } finally {
            // 隐藏加载动画
            setTimeout(() => {
                loadingOverlay.classList.remove('active');
            }, 1000);
        }
    }

    convertImage(file, outputFormat) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.onload = () => {
                // 设置canvas尺寸
                canvas.width = img.width;
                canvas.height = img.height;

                // 绘制图片
                ctx.drawImage(img, 0, 0);

                // 根据输出格式转换
                let mimeType;
                switch (outputFormat) {
                    case 'jpeg':
                        mimeType = 'image/jpeg';
                        break;
                    case 'png':
                        mimeType = 'image/png';
                        break;
                    case 'webp':
                        mimeType = 'image/webp';
                        break;
                    case 'bmp':
                        // Canvas不直接支持BMP，使用png代替
                        mimeType = 'image/png';
                        break;
                    case 'gif':
                        // Canvas不直接支持GIF动画，使用png代替
                        mimeType = 'image/png';
                        break;
                    case 'svg':
                        // Canvas不直接支持SVG矢量格式，使用png代替
                        mimeType = 'image/png';
                        break;
                    case 'tiff':
                        // Canvas不直接支持TIFF，使用png代替
                        mimeType = 'image/png';
                        break;
                    case 'heic':
                        // Canvas不直接支持HEIC，使用png代替
                        mimeType = 'image/png';
                        break;
                    case 'ico':
                        // Canvas不直接支持ICO，使用png代替
                        mimeType = 'image/png';
                        break;
                    default:
                        mimeType = 'image/jpeg';
                }

                // 将canvas转换为blob
                canvas.toBlob((blob) => {
                    if (blob) {
                        resolve(blob);
                    } else {
                        reject(new Error('转换失败'));
                    }
                }, mimeType);
            };

            img.onerror = () => {
                reject(new Error('图片加载失败'));
            };

            // 加载图片
            const reader = new FileReader();
            reader.onload = (e) => {
                img.src = e.target.result;
            };
            reader.onerror = () => {
                reject(new Error('文件读取失败'));
            };
            reader.readAsDataURL(file);
        });
    }

    addResultItem(fileData, convertedBlob, outputFormat) {
        return new Promise((resolve) => {
            const resultList = document.getElementById('resultList');
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            // 创建下载链接
            const url = URL.createObjectURL(convertedBlob);
            const fileName = this.getOutputFileName(fileData.file.name, outputFormat);

            // 生成预览
            const reader = new FileReader();
            reader.onload = (e) => {
                const previewUrl = e.target.result;
                resultItem.innerHTML = `
                    <div class="result-info">
                        <img src="${previewUrl}" alt="Converted" class="result-preview">
                        <div class="result-details">
                            <h4>${fileName}</h4>
                            <p>${this.formatFileSize(convertedBlob.size)}</p>
                        </div>
                    </div>
                    <a href="${url}" download="${fileName}" class="download-btn">下载</a>
                `;

                // 添加到结果列表
                resultList.appendChild(resultItem);

                // 添加动画效果
                setTimeout(() => {
                    resultItem.style.animation = 'slideInUp 0.5s ease-out';
                }, 100);

                resolve();
            };
            reader.readAsDataURL(convertedBlob);
        });
    }

    getOutputFileName(originalName, outputFormat) {
        const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
        return `${nameWithoutExt}.${outputFormat}`;
    }

    showMessage(text, type) {
        // 清除之前的消息
        this.clearMessages();

        const messageEl = document.createElement('div');
        messageEl.className = type === 'error' ? 'error-message' : 'success-message';
        messageEl.textContent = text;
        messageEl.style.display = 'block';

        const convertSection = document.querySelector('.convert-section');
        convertSection.appendChild(messageEl);

        // 3秒后自动清除消息
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.style.animation = 'slideInLeft 0.5s ease-out reverse';
                setTimeout(() => {
                    messageEl.parentNode.removeChild(messageEl);
                }, 500);
            }
        }, 3000);
    }

    clearMessages() {
        const messages = document.querySelectorAll('.error-message, .success-message');
        messages.forEach(msg => msg.remove());
    }

    initAnimations() {
        // 初始化背景动画
        this.initBackgroundAnimations();

        // 初始化滚动动画
        this.initScrollAnimations();
    }

    initBackgroundAnimations() {
        // 背景星星动画已在CSS中定义
    }

    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// 初始化应用
const animeConverter = new AnimeImageConverter();

// 处理页面加载完成
window.addEventListener('DOMContentLoaded', () => {
    console.log('Anime Image Converter initialized');
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// 添加鼠标跟随效果
window.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.position = 'fixed';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    cursor.style.backgroundColor = 'var(--accent)';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.opacity = '0.5';
    cursor.style.animation = 'fadeOut 1s ease-out forwards';
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        if (cursor.parentNode) {
            cursor.parentNode.removeChild(cursor);
        }
    }, 1000);
});

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 0.5; transform: scale(1); }
        to { opacity: 0; transform: scale(0); }
    }
    
    .cursor-trail {
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// 导出供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimeImageConverter;
}
