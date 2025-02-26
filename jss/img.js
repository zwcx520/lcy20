function img100(id){
    document.write('<script type="text/javascript" src="fc.3dmgame.com/gimg/'+id+'"></script>');
}

function countIgfull(id, aid, mid){
    ajaxPost('fc.3dmgame.com/dimg/cfull', function(res){}, {irefer:location.origin, id:id,aid:aid,mid:mid});
}

function countIgmatter(id){
	ajaxPost('fc.3dmgame.com/dimg/cmone', function(res){}, {irefer:location.origin, id:id});
}

function countIgmatterUrl(e){
    var url = e.getAttribute('href');
    if(url.indexOf('fc.3dmgame.com/cimg/') > -1){
        var match = url.match(/\/cimg\/(\d+)/i);
        if(match != null){
            countIgmatter(match[1]);
        }
    } 
}

function ajaxPost(url, callback, data) {
    data = data || {};
    var str = "";
    for (var i in data) {
        str += `${i}=${data[i]}&`;
    }
    var xhr = new XMLHttpRequest();
    xhr.timeout = 5000;// 设置超时时间为5秒
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {   //4代表响应完成  200成功
            callback(xhr.responseText);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.withCredentials = true;//允许跨域
    xhr.send(str);
}