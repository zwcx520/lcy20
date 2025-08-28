/*   //原始代码
// 弹窗内容
var popupNotice = "⭐公告⭐";
var popupMainContent = "本APP暂时无ios版本\n下载页重新布局设计，现已发布新版1.7.1版，电脑版同步优化，内容在2025年8月24日后停止更新，更多声明可以点击查看更多公告选择新版本体验！";
var popupJoinLink = "https://lcy20.netlify.app/gonggao.html";

// 是否弹出弹窗的变量
var shouldPopup = 1;

// 创建弹窗元素
var popupWrapper = document.createElement("div");
popupWrapper.className = "popup-wrapper";

var popupContent = document.createElement("div");
popupContent.className = "popup-content";

var popupNoticeElement = document.createElement("div");
popupNoticeElement.className = "popup-notice";
popupNoticeElement.textContent = popupNotice;

var popupMainContentElement = document.createElement("div");
popupMainContentElement.className = "popup-main-content";
popupMainContentElement.textContent = popupMainContent;

var popupButtons = document.createElement("div");
popupButtons.className = "popup-buttons";

var popupCloseButton = document.createElement("button");
popupCloseButton.className = "popup-btn-close";
popupCloseButton.textContent = "取消";

var popupJoinButton = document.createElement("a");
popupJoinButton.className = "popup-btn-join";
popupJoinButton.textContent = "公告";
popupJoinButton.href = popupJoinLink;

popupButtons.appendChild(popupCloseButton);
popupButtons.appendChild(popupJoinButton);

popupContent.appendChild(popupNoticeElement);
popupContent.appendChild(popupMainContentElement);
popupContent.appendChild(popupButtons);

popupWrapper.appendChild(popupContent);

// 弹出弹窗函数
function showPopup() {
  if (shouldPopup) {
    document.body.appendChild(popupWrapper);
  }
}

// 关闭弹窗函数
function closePopup() {
  document.body.removeChild(popupWrapper);
}

// 监听关闭按钮点击事件
popupCloseButton.addEventListener("click", closePopup);

// 监听加群按钮点击事件
popupJoinButton.addEventListener("click", function(e) {
  e.preventDefault();
  var link = this.getAttribute("href");
  window.open(link);
});

// 显示弹窗
showPopup();
*/

/* 新改代码  */
// 1. 定义弹窗核心配置（关键：新增contentVersion版本号，内容更新时修改此版本号）
var popupConfig = {
    notice: "⭐公告⭐",
    mainContent: "本APP暂时无ios版本\n下载页重新布局设计，现已发布新版1.7.1版，电脑版同步优化，内容在2025年8月24日后停止更新，更多声明可以点击查看更多公告选择新版本体验！",
    joinLink: "https://lcy20.netlify.app/gonggao.html",
    contentVersion: "1.0" // ！！内容更新时必须修改此版本号（如改为1.1），否则不会重新弹窗
};

// 2. 本地存储相关工具函数（简化判断逻辑）
const StorageKey = {
    shownVersion: "popup_shown_version", // 记录已弹窗的内容版本号
    isShown: "popup_has_shown" // 记录当前版本是否已弹窗
};

// 检查是否需要弹窗：内容未弹窗 或 内容已更新（版本号变化）
function needShowPopup() {
    const savedVersion = localStorage.getItem(StorageKey.shownVersion); // 本地已存的版本号
    const savedIsShown = localStorage.getItem(StorageKey.isShown) === "true"; // 本地已存的弹窗状态
    
    // 条件：①内容是新版本（版本号不匹配）；②当前版本未弹窗过
    return popupConfig.contentVersion !== savedVersion || !savedIsShown;
}

// 弹窗显示后，更新本地存储（记录当前版本+已弹窗状态）
function updatePopupStorage() {
    localStorage.setItem(StorageKey.shownVersion, popupConfig.contentVersion);
    localStorage.setItem(StorageKey.isShown, "true");
}

// 3. 创建弹窗元素（与原逻辑一致，仅变量替换为popupConfig）
var popupWrapper = document.createElement("div");
popupWrapper.className = "popup-wrapper";
var popupContent = document.createElement("div");
popupContent.className = "popup-content";

var popupNoticeElement = document.createElement("div");
popupNoticeElement.className = "popup-notice";
popupNoticeElement.textContent = popupConfig.notice;

var popupMainContentElement = document.createElement("div");
popupMainContentElement.className = "popup-main-content";
popupMainContentElement.textContent = popupConfig.mainContent;

var popupButtons = document.createElement("div");
popupButtons.className = "popup-buttons";

var popupCloseButton = document.createElement("button");
popupCloseButton.className = "popup-btn-close";
popupCloseButton.textContent = "取消";

var popupJoinButton = document.createElement("a");
popupJoinButton.className = "popup-btn-join";
popupJoinButton.textContent = "公告";
popupJoinButton.href = popupConfig.joinLink;

// 组装弹窗结构
popupButtons.appendChild(popupCloseButton);
popupButtons.appendChild(popupJoinButton);
popupContent.appendChild(popupNoticeElement);
popupContent.appendChild(popupMainContentElement);
popupContent.appendChild(popupButtons);
popupWrapper.appendChild(popupContent);

// 4. 弹窗核心逻辑（新增版本判断）
function showPopup() {
    if (needShowPopup()) { // 仅当需要弹窗时才显示
        document.body.appendChild(popupWrapper);
        updatePopupStorage(); // 显示后立即更新本地存储，避免刷新后重复弹窗
    }
}

function closePopup() {
    if (document.body.contains(popupWrapper)) {
        document.body.removeChild(popupWrapper);
    }
}

// 5. 绑定按钮事件（与原逻辑一致）
popupCloseButton.addEventListener("click", closePopup);
popupJoinButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(this.getAttribute("href"));
    closePopup(); // 点击“公告”跳转后关闭弹窗
});

// 6. 初始化弹窗（页面加载时执行）
showPopup();
