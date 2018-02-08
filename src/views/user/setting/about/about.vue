<template>
    <div class="about__content mui-content">
        <div class="plus">
            <div class="about__icon">
                <img src="./app_icon.png"/>
                <span>版本号 2.0.0</span>
            </div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">版权信息</a>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">软件许可使用协议</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.about__icon
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18.5px 0;

    img
    {
        width: 60px;
        height: 60px;
        margin-bottom: 16.5px;
    }
    span
    {
        font-size: 14px;
        color: #666666;
    }
}
.mui-table-view-cell > a
{
    font-size: 15px;
}
</style>