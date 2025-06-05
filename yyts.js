    // 通过id获取页面上已存在的div元素
    const targetDiv = document.getElementById('targetDiv');
    if (targetDiv) {
      // 创建一个文本节点
      const textNode = document.createTextNode('背景音乐 : 月亮照山川 - 窝窝');
      // 将文本节点添加到div中
      targetDiv.appendChild(textNode);
    }
