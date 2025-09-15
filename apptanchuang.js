// 弹窗核心配置（关键：新增popupVersion，与公告内容绑定）
var popupNotice = "⭐公告⭐";
var popupMainContent = "本APP为H5 Web型程序，版本为1.7.2，电脑版和APP同步优化上线！详情请点击公告查看";
var popupJoinLink = "https://lcy20.netlify.app/gonggao.html";
// 弹窗版本号：若popupNotice/popupMainContent修改，需同步更新此版本（如从1.0改为1.1）
var popupVersion = "0.1"; 
var shouldPopup = 1; // 总开关，1=允许弹窗，0=完全关闭

// 创建弹窗元素（与原代码一致，无修改）
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

// 弹出弹窗函数（核心修改：增加版本对比逻辑）
function showPopup() {
  // 1. 从localStorage获取用户已看过的弹窗版本
  var viewedPopupVersion = localStorage.getItem("viewedPopupVersion");
  // 2. 满足3个条件才弹窗：总开关开启 + 版本未记录 + 版本有更新
  if (shouldPopup && !viewedPopupVersion || viewedPopupVersion !== popupVersion) {
    document.body.appendChild(popupWrapper);
    // 3. 弹窗后，将当前版本存入localStorage（标记已看过）
    localStorage.setItem("viewedPopupVersion", popupVersion);
  }
}

// 关闭弹窗函数（与原代码一致）
function closePopup() {
  if (document.body.contains(popupWrapper)) {
    document.body.removeChild(popupWrapper);
  }
}

// 监听按钮事件（与原代码一致）
popupCloseButton.addEventListener("click", closePopup);
popupJoinButton.addEventListener("click", function(e) {
  e.preventDefault();
  var link = this.getAttribute("href");
  window.open(link);
});

// 显示弹窗（与原代码一致）
showPopup();
