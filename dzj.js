  const text = "有人曾说：年少时别遇见太过惊艳的人，否则这一生会太孤独，因为念念不忘。太过惊艳，会成为你一生的床前白月光，心口朱砂痣。以至于认为大概一生都无法遇到如此惊艳之人，再无法遇到那个初见踏光而来，照亮自己整个世界，惊艳自己余生岁月的人了。但她曾经是我生命中的一束光,也许是我太自私了,我竟想永远拥有这束光。可能是这束光给我的温暖让我忘记了她不会永远属于我。我这片黑暗有可能这辈子只能允许她一束光照进来,可她这辈子会照亮很多黑暗，她最后也会找到自己的归宿,可是我从未后悔过,因为这束光的的确确照耀在我身上过。我为她的闪耀感到自豪,也因为自己的黑暗,觉得配不上她,她是那么的耀眼,而我这一片黑暗在一堆黑暗里又怎能显得耀眼";
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
