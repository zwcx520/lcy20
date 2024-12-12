$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "lcy" && pwd == "lcy") {
        
        event.preventDefault();
        $('form').fadeOut(2500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "https://lcy20.netlify.app/";
        }, 1000);
    } else {
        alert("用户名或密码不正确\n如果多次错误❌请联系开发者获取账号密码\n\n联系方式:  1837601513@qq.com！");
    }
});
