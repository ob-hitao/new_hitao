<template>
    <div class="login">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">
                <div class="btns">
                    <button type="button" class="mui-btn" :class="{active: taggle == 'login'}" @click="taggle = 'login'">登陆</button><button type="button" class="mui-btn" :class="{active: taggle == 'reg'}" @click="taggle = 'reg'">注册</button>
                </div>
            </h1>
        </header>
        <div class="mui-content">
            <div class="plus">
                <section v-show="taggle == 'login'" class="model-login">
                    <ul>
                        <li>
                            <input type="text" placeholder="请输入您的用户名" >
                            <i class="iconfont icon-yonghu"></i>
                        </li>
                        <li>
                            <input type="email" placeholder="请输入您的邮箱" >
                            <i class="iconfont icon-youxiang"></i>
                        </li>
                        <li>
                            <input type="password" placeholder="请输入您的密码" >
                            <i class="iconfont icon-mima"></i>
                        </li>
                        <li class="submit">
                            <button type="button" class="mui-btn">登陆</button>
                        </li>
                        <li>
                            <p class="forget">忘记密码?</p>
                        </li>
                    </ul>
                    <aside>
                        <h5><span>使用第三方账户登陆</span></h5>
                        <div class="wrap">
                            <img src="./login_facebook.png">
                            <img src="./login_wechat.png">
                        </div>
                    </aside>
                </section>
                <section v-show="taggle == 'reg'" class="model-reg">
                    <ul>
                        <li>
                            <input type="text" placeholder="请输入您的用户名" >
                        </li>
                        <li>
                            <input type="email" placeholder="请输入您的邮箱" >
                        </li>
                        <li>
                            <input type="password" placeholder="请输入6-20位数字、字母或字符的密码" >
                        </li>
                        <li>
                            <input type="password" placeholder="请再次输入您的密码" >
                        </li>
                        <li class="submit">
                            <button type="button" class="mui-btn">注册</button>
                        </li>
                        <li class="protocol">
                            <i class="iconfont icon-weixuanzhongkuang"></i>
                            我同意
                            <span class="link">《注册协议》</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default
{
    data()
    {
        return {
            taggle: 'login'
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.login
{
    ul, li
    {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .mui-bar-nav
    {
        background: $theme;

        .mui-action-back
        {
            color: #fff;
        }
        .btns
        {
            width: 120px;
            height: 33px;
            margin: 5px auto;
            border-radius: 5px;
            background: #fff;

            button
            {
                display: inline-block;
                margin: 1px;
                width: calc(50% - 1px);
                height: 31px;
                border: none;
                top: 0;
                color: #fff;
                background: $theme;

                &.active
                {
                    color: $theme;
                    background: #fff;
                }
                &:first-child
                {
                    margin-right: 0;
                    border-radius: 5px 0 0 5px;
                }
                &:last-child
                {
                    margin-left: 0;
                    border-radius: 0 5px 5px 0;
                }
            }
        }
    }
    .mui-content
    {
        background: #fff;

        li
        {
            position: relative;
            padding: 0 12px;
            margin-top: 20px;
            text-align: center;

            &.submit
            {
                margin-top: 40px;

                .mui-btn
                {
                    width: 100%;
                    height: 44px;
                    color: #fff;
                    background: $theme;
                    border: none;
                }
            }
            input
            {
                margin: 0;
                height: 44px;
                text-indent: 30px;
                font-size: 15px;
            }
            .iconfont
            {
                position: absolute;
                top: 10px;
                left: 8%;
                font-size: 22px;
                color: $theme;
            }
        }

        .model-login
        {
            .forget
            {
                margin: 25px auto;
                font-size: 14px;
                text-align: right;
            }
            aside
            {
                text-align: center;

                h5
                {
                    height: 14px;
                    position: relative;

                    &::after
                    {
                        content: '';
                        display: block;
                        width: 100%;
                        height: 1px;
                        position: absolute;
                        top: 7px;
                        background: #efefef;
                    }
                    span
                    {
                        display: block;
                        width: 150px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 10;
                        background: #FFFFFF;
                    }
                }
                .wrap
                {
                    display: flex;
                    justify-content: center;

                    img
                    {
                        display: block;
                        width: 48px;
                        height: 48px;
                        margin: 30px;
                    }
                }
            }
        }
        .model-reg
        {
            li
            {
                input
                {
                    text-indent: 0;
                }
                &.protocol
                {
                    text-align: left;

                    .icon-weixuanzhongkuang
                    {
                        position: static;
                        vertical-align: text-bottom;
                    }
                    .link
                    {
                        color: $theme;
                    }
                }
            }
        }
    }
}
</style>