    // 通过id获取页面上已存在的div元素
    const targetTitle = document.getElementById('targetTitle');
    if (targetTitle) {
      // 创建一个文本节点
      const textNode = document.createTextNode('故事不长，也不难讲，短短一句，相识一场！ᖰ˃̶ ꇴ ˂̶ᖳ');
      // 将文本节点添加到div中
      targetTitle.appendChild(textNode);
    }
