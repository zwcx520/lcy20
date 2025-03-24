  const text = "世界上的好东西都是抢来的 只有弱者才会坐等分配。 一利弗莫尔（黑色传奇）！";
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
