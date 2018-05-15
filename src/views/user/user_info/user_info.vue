<template>
    <div class="user_info">
        <v-header title="个人资料">
            <span class="right">保存</span>
        </v-header>
        <div class="mui-content">
            <div class="plus">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="details">头像 </span>
                            <img class="avatar" src="./grzl-head.png"/>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="details">昵称</span>
                            <span>公主殿下</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="details">性别</span>
                            <span>女</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="details">出生日期</span>
                            <span>2000-01-25</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="details">我的收获地址</span>
                        </a>
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
    },
    created()
    {
        this.taggleBg('#fff', 'dark');
    },
    beforeDestroy()
    {
        this.taggleBg('#e95168', 'light');
    },
    methods:
    {
        taggleBg(bg, style)
        {
            mui.plusReady(() =>
            {
                // 系统顶部样式
                plus.navigator.setStatusBarBackground(bg);
                plus.navigator.setStatusBarStyle(style);
            });
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.user_info
{
    .avatar
    {
        width: 56px;
        height: 56px;
    }
    .details
    {
        color: #666666;
    }
    .right
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 14px;
        padding: 10px;
        z-index: 999;
    }
    .mui-navigate-right
    {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        padding-right: 35px;
    }
}
</style>