<template>
    <div class="add_address">
        <v-header title="新增收货地址">
            <span class="right">保存</span>
        </v-header>
        <div class="mui-content">
            <div class="plus">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a href="#">
                            收件人
                            <input type="text" value="jesse"/>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            国家
                            <select id="list">
                                <option>江西</option>
                            </select>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            城市
                            <input type="text" value="新余"/>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#">
                            地址
                            <input type="text" value="江西"/>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#">
                            邮编
                            <input type="number" value="123456"/>
                        </a>
                    </li>
                    <li class="mui-table-view-cell last">
                        <a href="#">
                            电话
                            <input type="number" value="123456"/>
                        </a>
                    </li>
                    <li class="mui-table-view-cell default">
                        <a href="#">设为默认</a>
                        <div class="mui-switch mui-switch-mini mui-active">
                            <div class="mui-switch-handle"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';

export default
{
    components:
    {
        vHeader
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
.add_address
{
    .right
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 14px;
        padding: 10px;
        z-index: 999;

        &.active
        {
            color: $theme;
        }
    }
    .mui-table-view
    {
        background: none;

        .mui-table-view-cell
        {
            font-size: 14px;
            background: #fff;
            color: #666666;

            &.last::after
            {
                display: none;
            }
            a
            {
                padding-right: 35px;
                background: #fff !important;


                span
                {
                    float: right;
                }
                input, select
                {
                    margin: 0;
                    width: 85%;
                    padding: 0 15px;
                    height: auto;
                    float: right;
                    border: none;
                    font-size: inherit;
                }
            }
        }
        .default
        {
            margin-top: 10px;
            border-top: none;

            .mui-switch.mui-active
            {
                background: $theme;
                border-color: $theme;
            }
        }
    }
}
</style>