  const text = "有人曾说：年少时别遇见太过惊艳的人，否则这一生会太孤独，因为念念不忘。太过惊艳，会成为你一生的床前白月光，心口朱砂痣。以至于认为大概一生都无法遇到如此惊艳之人，再无法遇到那个初见踏光而来，照亮自己整个世界，惊艳自己余生岁月的人了。";
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
