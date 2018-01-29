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

export
{
    getDpi
}