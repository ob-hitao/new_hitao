/**
 * Created by jesse on 2018/1/29.
 */
/**
 * 获取dpi
 * @returns {number}
 */
function getDpi()
{
    return window.devicePixelRatio <= 2 ? 2 : 3;
}

/**
 * post请求数据返回json
 * @param {String} url请求路径常量
 * @param {Object} option请求参数
 * @param {Function} Func 回调方法
 */
function postJSON(url,option,Func)
{
    // option.language = plus.storage.getItem('language');
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
                    // yesAlert(data.error_msg);
                    alert(data.error_msg)
                }
            }
        },'json'
    );
}

export
{
    getDpi,
    postJSON
}