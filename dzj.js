  const text = "世界上的好东西都是抢来的 只有弱者才会坐等分配，也许终有一天我会静下来， 像个局外人一样看着自己的故事！";
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
