  const text = "记得那片月下，一生一次开的花，记得那句牵挂，可惜来不及回答，记得有一滴泪，风干已看不见，秋风里的人，梦里见过多少遍。那一年，花开不知落的叶，就怕秋风翻开思念，它一卷卷 一篇篇。那一年，月下飞花已漫天，落入泥土埋藏思念，深深堆叠，又一年！";
    const typingEffect = document.getElementById('typingEffect');
    let index = 0;

    function type() {
      if (index < text.length) {
        typingEffect.textContent += text[index];
        index++;
        setTimeout(type, 250);
      }
    }

    type();
