/**
 * Created by jesse on 2018/1/29.
 */
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

export
{
    getDpi,
    isEmail,
    isPassworld,
    yesAlert,
    postJSON,
    getJSON,
    compress
}