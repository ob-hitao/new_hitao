/**
 * Created by jesse on 2018/1/29.
 */
/**
 * 时间格式化
 * @param {String} fmt 格式化样式
 */
Date.prototype.Format = function(fmt)
{
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

/**
 *
 * @desc 获取dpi
 * @returns {number}
 */
function getDpi()
{
    return window.devicePixelRatio <= 2 ? 2 : 3;
}

/**
 *
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @returns {Boolean}
 */
function isEmail(str)
{
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 *
 * @desc   判断是否为链接
 * @param str
 * @returns {boolean}
 */
function isUrl(str)
{
    return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/.test(str);
}

/**
 *
 * @param {Object} url 页面请求路径
 * @param {Object} name 需要获取的参数名
 */
function getQueryString(url,name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

/**
 *
 * @desc   获取电商网站ID
 * @returns {{num_iid: *, type: string}}
 */
function getUrlId(query)
{
    let num_iid, type;

    if(/.1688./.test(query))
    {
        let str = String(query.match(/\/[0-9]+.html/));
        num_iid = str.substr(1,str.length-6);
        type = 'ALIBABA';
    }
    else if (query.indexOf('jd.') != -1)
    {
        num_iid = /(\d+)\.html/.exec(query)[1];
        type = 'JD';
    }
    else if (query.indexOf('amazon.') != -1)
    {
        let match = /amazon\.([^\/]+)\/dp\/([\w\d]+)/ig.exec(query);
        if(!match[2]) match = /amazon\.([^\/]+)\/[^\/]+\/dp\/([\w\d]+)/ig.exec(query);
        num_iid = match[2];
        type = 'AMAZON';
    }
    else
    {
        num_iid = getQueryString(query.split('?')[1].trim(),'id');
        type = 'TAOBAO';
    }

    return {
        num_iid,
        type
    }
}

/**
 *
 * @desc 判断是否为6-20位的密码
 * @param str
 * @returns {boolean}
 */
function isPassworld(str)
{
    return /^\w{6,20}$/.test(str);
}

/**
 * 封装好弹框提示
 * @param {String} message
 * @param {Function} callback
 */
function yesAlert(message,callback)
{
    mui.alert(message, 'hitao', '确定', callback);
}

/**
 *
 * @desc 确认框
 * @param {Function} callback
 */
function confirm(callback)
{
    mui.confirm('', 'hitao', ['女', '男'], callback)
}

/**
 *
 * @desc  输入弹窗
 * @param title
 * @param deftext
 * @param ntitle
 * @param callback
 */
function prompt(callback)
{
    // mui.prompt('text','deftext','title',['true','false'],callback,'div')
    mui.prompt('', '请输入', 'hitao', ['否','是'], callback);
}

/**
 * 使用canvas对大图片进行压缩
 * @param {Object} img 图片
 */
function compress(img) {
    var initSize = img.src.length;
    var width = img.width;
    var height = img.height;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    //瓦片canvas
    var tCanvas = document.createElement('canvas');
    var tctx = tCanvas.getContext("2d");
    //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
    var ratio;
    if ((ratio = width * height / 4000000) > 1) {
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
    } else {
        ratio = 1;
    }
    canvas.width = width;
    canvas.height = height;
    //铺底色
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //如果图片像素大于100万则使用瓦片绘制
    var count;
    if ((count = width * height / 1000000) > 1) {
        count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
        //计算每块瓦片的宽和高
        var nw = ~~(width / count);
        var nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < count; j++) {
                tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
        }
    } else {
        ctx.drawImage(img, 0, 0, width, height);
    }
    //进行最小压缩
    var ndata = canvas.toDataURL('image/jpeg', 0.1);
    tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
    return ndata;
}

/**
 * post请求数据返回json
 * @param {String} url请求路径常量
 * @param {Object} option请求参数
 * @param {Function} Func 回调方法
 */
function postJSON(url,option,Func)
{
    mui.post
    (
        url,
        option,
        function(data)
        {
            if(data.status=='success')
            {
                Func(data.result);
            }
            else
            {
                if(data.error_code == -2)
                {
                    Func(data)
                }
                else
                {
                    //TODO错误信息国际化error
                    yesAlert(data.error_msg);
                }
            }
        },'json'
    );
}
/**
 * get请求数据返回json
 * @param {Object} url 请求路径常量
 * @param {Object} option 请求参数
 * @param {Function} Func 回调方法
 */
function getJSON(url,option,Func){
    mui.getJSON
    (
        url,
        option,
        function (data)
        {
            if (data.status == 'success')
            {
                //执行回调
                Func(data.result);
            }
            else
            {
                if (data.error_code == -2)
                {
                    Func(data)
                }
                //TODO错误信息国际化error
                yesAlert(data.error_msg);
            }
        }
    );
}

/**
 *
 * @desc 切换状态栏样式
 * @param bg
 * @param style
 */
function taggleBg(bg, style)
{
    mui.plusReady(() =>
    {
        // 系统顶部样式
        plus.navigator.setStatusBarBackground(bg);
        plus.navigator.setStatusBarStyle(style);
    });
}

/**
 * 设置剪贴板内容
 * @param {String} text内容
 */
function setClipText(text){
    if(plus.os.name=='Android')
    {
        var Context = plus.android.importClass("android.content.Context");
        var main = plus.android.runtimeMainActivity();
        var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
        plus.android.invoke(clip, "setText", text);
    }
    else if(plus.os.name=='iOS')
    {
        var UIPasteboard  = plus.ios.importClass("UIPasteboard");
        var generalPasteboard = UIPasteboard.generalPasteboard();

        // 设置
        generalPasteboard.plusCallMethod
        ({
            setValue: text,
            forPasteboardType: "public.utf8-plain-text"
        });
    }
}

export
{
    getUrlId,
    getDpi,
    isEmail,
    isPassworld,
    isUrl,
    getQueryString,
    yesAlert,
    prompt,
    confirm,
    postJSON,
    getJSON,
    compress,
    taggleBg,
    setClipText
}