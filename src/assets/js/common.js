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
    getJSON
}