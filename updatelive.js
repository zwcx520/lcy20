    /**
     * ============================================================
     * 版本检查器（最终修复版）
     * 核心逻辑：版本一致 → 零弹窗、零定时器、零开销
     * ============================================================
     */
    class VersionChecker {
        constructor(options) {
            // 合并配置
            this.config = Object.assign({
                selector: '#versionLabel',
                latestVersion: '',
                checkInterval: 100,
                title: '🎉 发现新版本',
                updateUrl: '',
                btnCloseText: '稍后再说',
                btnUpdateText: '立即更新',
                modalClass: 'vc-modal-container'
            }, options);

            this.intervalId = null;
            this.isModalShowing = false;
            this.dismissed = false;

            // 立即执行初始化
            this.init();
        }

        /**
         * 初始化：注入样式 → 同步检测 → 决定是否启动
         */
        init() {
            this.injectStyles();

            // 同步获取页面版本号
            const current = this.getCurrentVersion();

            // 调试日志：方便你在控制台确认比对结果
            console.log('🔍 版本检测 → 页面版本:', current, '| JS版本:', this.config.latestVersion);

            // 找不到元素，停止
            if (!current) {
                console.warn('⚠️ 未找到版本号元素，停止检测');
                return;
            }

            // ★ 核心判断：版本一致，直接退出，不启动任何检测
            if (current === this.config.latestVersion) {
                console.log('✅ 版本一致，不弹窗，不启动定时器');
                return; // 直接 return，后面所有代码都不执行
            }

            // 版本不一致，启动定时检测
            console.log('❌ 版本不一致，启动定时检测');
            this.startChecking();
        }

        /**
         * 动态注入 CSS
         */
        injectStyles() {
            if (document.getElementById('vc-style')) return;

            const style = document.createElement('style');
            style.id = 'vc-style';
            style.textContent = `
                .vc-modal-container {
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: vcFadeIn 0.4s ease;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                }

                .vc-modal-box {
                    background: #fff;
                    width: 360px;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
                    animation: vcScaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                }

                .vc-modal-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 40px 30px 30px;
                    text-align: center;
                    position: relative;
                }

                .vc-modal-header::after {
                    content: '';
                    position: absolute;
                    top: -50%; left: -50%;
                    width: 200%; height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
                    pointer-events: none;
                }

                .vc-icon-wrap {
                    width: 72px; height: 72px;
                    margin: 0 auto 16px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .vc-icon { font-size: 36px; }

                .vc-modal-header h2 {
                    margin: 0; color: #fff;
                    font-size: 20px; font-weight: 600;
                    position: relative; z-index: 1;
                }

                .vc-modal-body {
                    padding: 30px;
                    text-align: center;
                }

                .vc-version-compare {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    margin-bottom: 20px;
                }

                .vc-version-badge {
                    padding: 8px 16px;
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: 600;
                }

                .vc-version-badge.old {
                    background: #f5f5f5; color: #999;
                }

                .vc-version-badge.new {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: #fff;
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
                }

                .vc-arrow { color: #ccc; font-size: 18px; }

                .vc-desc {
                    color: #666; font-size: 14px;
                    line-height: 1.6; margin-bottom: 28px;
                }

                .vc-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .vc-btn {
                    width: 100%;
                    padding: 14px 0;
                    border: none;
                    border-radius: 14px;
                    font-size: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: block;
                    box-sizing: border-box;
                    font-weight: 600;
                }

                .vc-btn-update {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: #fff;
                    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);
                }

                .vc-btn-update:hover {
                    box-shadow: 0 12px 28px rgba(102, 126, 234, 0.5);
                    transform: translateY(-2px);
                }

                .vc-btn-close {
                    background: transparent;
                    color: #999;
                    font-weight: 400;
                    font-size: 14px;
                }

                .vc-btn-close:hover {
                    color: #666;
                    background: #f9f9f9;
                }

                @keyframes vcFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes vcScaleIn {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        /**
         * 获取页面当前版本号
         * 使用 textContent，比 innerText 更可靠
         */
        getCurrentVersion() {
            const el = document.querySelector(this.config.selector);
            if (!el) return null;
            return el.textContent.trim();
        }

        /**
         * 启动定时检测（仅在版本不一致时才会被调用）
         */
        startChecking() {
            // 设置循环定时器
            this.intervalId = setInterval(() => {
                if (this.dismissed) return;

                const current = this.getCurrentVersion();
                if (!current) {
                    this.destroy();
                    return;
                }

                // 版本一致 → 销毁一切
                if (current === this.config.latestVersion) {
                    console.log('✅ 检测中版本已同步，销毁弹窗和定时器');
                    this.destroy();
                    return;
                }

                // 版本不一致 → 弹窗
                this.showModal(current);
            }, this.config.checkInterval);
        }

        /**
         * 创建并显示弹窗
         */
        showModal(currentVersion) {
            if (this.isModalShowing) return;
            this.isModalShowing = true;

            const modal = document.createElement('div');
            modal.className = this.config.modalClass;
            modal.innerHTML = `
                <div class="vc-modal-box">
                    <div class="vc-modal-header">
                        <div class="vc-icon-wrap">
                            <span class="vc-icon">🎉</span>
                        </div>
                        <h2>${this.config.title}</h2>
                    </div>
                    <div class="vc-modal-body">
                        <div class="vc-version-compare">
                            <span class="vc-version-badge old">v${currentVersion}</span>
                            <span class="vc-arrow">→</span>
                            <span class="vc-version-badge new">v${this.config.latestVersion}</span>
                        </div>
                        <p class="vc-desc">新版本已就绪<br>更新后体验更流畅的功能</p>
                        <div class="vc-actions">
                            <a class="vc-btn vc-btn-update" href="${this.config.updateUrl}" target="_blank" rel="noopener" download>${this.config.btnUpdateText}</a>
                            <button class="vc-btn vc-btn-close" onclick="window.__vcInstance.dismiss()">${this.config.btnCloseText}</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        /**
         * 关闭弹窗（本次会话不再提示）
         */
        dismiss() {
            this.dismissed = true;
            this.isModalShowing = false;
            const modal = document.querySelector('.' + this.config.modalClass);
            if (modal) modal.remove();
            clearInterval(this.intervalId);
            console.log('💤 已关闭，本次会话不再提醒');
        }

        /**
         * 彻底销毁
         */
        destroy() {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.isModalShowing = false;
            const modal = document.querySelector('.' + this.config.modalClass);
            if (modal) modal.remove();
        }
    }

    /**
     * 初始化
     * ★ 测试：把 latestVersion 改成 '1.0.1'（和页面一致），刷新后不会弹窗
     */
    window.__vcInstance = new VersionChecker({
        selector: '#versionLabel',
        latestVersion: '1.7.6',      //新版本号控制修改                  // ← 改成 '1.0.1' 试试，绝对不弹
        checkInterval: 1000,
        updateUrl: 'https://lcy20.netlify.app/gdjb.apk'
    });
