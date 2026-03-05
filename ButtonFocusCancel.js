document.addEventListener('DOMContentLoaded', function () {
  // 选中所有链接和按钮
  const elements = document.querySelectorAll('a, button');

  // 页面加载时先全部清除高亮
  elements.forEach(el => {
    el.style.outline = 'none';
    el.style.webkitTapHighlightColor = 'transparent';
  });

  // 点击任意 链接/按钮 时，全局再清除一次
  document.body.addEventListener('click', function (e) {
    if (e.target.closest('a, button')) {
      document.querySelectorAll('a, button').forEach(el => {
        el.style.outline = 'none';
        el.style.webkitTapHighlightColor = 'transparent';
      });
    }
  });
});