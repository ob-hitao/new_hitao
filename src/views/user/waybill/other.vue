<template>
    <div class="transport_submit">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <span class="ps">快件单号</span>
                <input type="text" placeholder="请输入国内快件单号">
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    <span class="ps">物流公司</span>
                    <select id="tbkuaidi">
                        <option>请选择物流公司</option>
                    </select>
                    <span class="right"></span>
                </a>
            </li>
        </ul>
        <button class="off">提交</button>
    </div>
</template>

<script>
    export default {
        name: "other"
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.transport_submit
{
    .mui-table-view-cell
    {
        font-size: 14px;

        &::after
        {
            right: 15px;
        }
        .mui-navigate-right
        {
            color: #c7c7ca;
            padding-right: 35px;

            .right
            {
                float: right;
                color: #000000;
            }
        }
        .ps
        {
            display: inline-block;
            width: 76px;
            color: #666666;
        }
        input
        {
            width: auto;
            height: auto;
            padding: 0;
            margin: 0;
            border: none;
            font-size: 14px;
            background: transparent;
        }
    }
    .off
    {
        display: block;
        width: 270px;
        height: 40px;
        margin: 20px auto;
        background: #e95168;
        color: #fff;
        text-align: center;
        border: none;
        border-radius: 20px;
    }
}
</style>