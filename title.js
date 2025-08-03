    // 通过id获取页面上已存在的div元素
    const targetTitle = document.getElementById('targetTitle');
    if (targetTitle) {
      // 创建一个文本节点
      const textNode = document.createTextNode('人,只有义无反顾地前行,才能在大地上留下通往光明的履痕。ᖰ˃̶ ꇴ ˂̶ᖳ      ');
      // 将文本节点添加到div中
      targetTitle.appendChild(textNode);
    }
