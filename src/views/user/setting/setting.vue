<template>
    <section class="setting__content mui-content">
        <div class="plus">
            <ul class="mui-table-view">
                <router-link :to="{path: 'users', query: {title: '账号管理'}}" tag="li" class="mui-table-view-cell" append>
                    <a class="mui-navigate-right">账号管理</a>
                </router-link>
                <router-link :to="{path: 'language', query: {title: 'null'}}"" tag="li" class="mui-table-view-cell" append>
                    <a class="mui-navigate-right">语言设置language</a>
                </router-link>
                <router-link :to="{path: 'guide', query: {title: '关于我们'}}" tag="li" class="mui-table-view-cell" append>
                    <a class="mui-navigate-right">使用指南</a>
                </router-link>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right">清除缓存</a>
                </li>
                <router-link :to="{path: 'about', query: {title: '关于我们'}}" tag="li" class="mui-table-view-cell" append>
                    <a class="mui-navigate-right">关于我们</a>
                </router-link>
            </ul>
            <div class="off">
                <button @click="logout" class="off__button">退出当前账号</button>
            </div>
        </div>
    </section>
</template>

<script>
import {postJSON, yesAlert} from '@/assets/js/common';  //公共函数库
export default
{
    methods:
    {
        logout()
        {
            let userId = localStorage.getItem('userId');
            postJSON(this.API.USER_LOGOUT, {userId}, data =>
            {
                localStorage.removeItem('userId');
                yesAlert('退出成功!', () => this.$router.push({path: '/'}));
            });
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.setting
{
    font-size: 14px;

    &__content
    {
        width: 100%;

        a
        {
            font-size: 14px;
        }
        .off
        {
            margin-top: 30px;
            text-align: center;

            &__button
            {
                width: 90%;
                height: 45px;
                border: none;
                border-radius: 5px;
                background: $theme;
                color: #fff;
            }
        }
    }
}
</style>