<template>
    <div class="invite_friends">
        <v-header title="邀请好友"><i class="iconfont icon-fenxiang"></i></v-header>
        <div class="mui-content">
            <div class="plus">
                <section class="email">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <span class="ps">好友邮箱</span>
                            <input type="text" placeholder="请输入好友的邮箱地址" v-model="email" />
                        </li>
                        <li class="mui-table-view-cell">
                            <button @click="sendEmail" class="post">发送邀请</button>
                        </li>
                    </ul>
                </section>
                <section class="description">
                    邀请好友说明：<br />
                    填写好友邮箱，邀请好友加入我们，你将获得400积分
                    积分可以用于兑换优惠券，用来抵扣国际运费,小伙伴们赶快行动吧
                </section>
                <section class="recording">
                    <nav class="tab">
                        <div @click="taggle = true" class="tab__item">
                            <span class="tab__text" :class="{active: taggle == true}">邀请记录列表</span>
                        </div>
                        <div @click="taggle = false" class="tab__item">
                            <span class="tab__text" :class="{active: taggle == false}">现金返还记录</span>
                        </div>
                    </nav>
                    <ul v-if="taggle" class="mui-table-view">
                        <li v-for="item in list" class="mui-table-view-cell">
                            <div class="left">
                                好友：{{item.reg_uname}}<br />
                                <span class="ps">{{new Date(item.reg_time*1000).Format("yyyy-MM-dd hh:mm:ss")}}</span>
                            </div>
                            <div class="right">
                                <span class="status">已邀请</span>
                            </div>
                        </li>
                    </ul>
                    <ul v-else class="mui-table-view">
                        <li v-for="item in rlist"  class="mui-table-view-cell cash">
                            <div class="left">
                                好友：{{item.reg_uname}}<br />
                                <span class="ps">{{new Date(item.datetime*1000).Format("yyyy-MM-dd hh:mm:ss")}}</span>
                            </div>
                            <div class="right">
                                <span class="green">+{{item.cachback_amount}}</span><br />
                                <span class="price">{{item.amount}}</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {getJSON, postJSON, isEmail, yesAlert} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            taggle: true,
            userId: '',
            list: {},
            rlist: {},
            email: ''
        }
    },
    created()
    {
        this.userId = localStorage.getItem('userId');
        getJSON
        (
            this.API.USER_INVITELIST,
            {
                userId: this.userId
            }, data =>
            {
                this.list = data.list;
            }
        );
        getJSON
        (
            this.API.USER_CASHBACK_RECORDS,
            {
                userId: this.userId
            }, data =>
            {
                this.rlist = data.list;
            }
        );
    },
    methods:
    {
        sendEmail()
        {
            if(!isEmail(email)){
                yesAlert('请输入正确的邮箱!');
                return;
            }
            postJSON
            (
                this.API.USER_INVITEFRIENDS,
                {
                    userId: this.userId,
                    email: this.email
                }, data =>
                {
                    if(data.msg) yesAlert('发送成功');
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.invite_friends
{
    .icon-fenxiang
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 20px;
        padding: 10px;
        z-index: 999;
    }
    .post
    {
        display: block;
        width: 90%;
        margin: 0 auto 10px;
        height: 45px;
        border: none;
        border-radius: 5px;
        background: $theme;
        color: #fff;
    }
    .tab
    {
        display: flex;
        height: 40px;
        border-bottom: 1px solid #cfcfcf;
        background: #fff;

        &__item
        {
            flex: auto;
            text-align: center;
        }
        &__text
        {
            font-size: 14px;
            display: inline-block;
            height: 39px;
            line-height: 39px;

            &.active
            {
                color: $theme;
                border-bottom: 2px solid $theme;
            }
        }
    }
    .email
    {
        .mui-table-view-cell
        {
            font-size: 14px;

            &::after
            {
                right: 15px;
            }
            .ps
            {
                display: inline-block;
                width: 104px;
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
            }
        }
    }
    .description
    {
        padding: 11px 15px;
        font-size: 12px;
    }
    .recording
    {
        .mui-table-view-cell
        {
            display: flex;
            justify-content: space-between;

            &::after
            {
                right: 15px;
            }
            &.cash
            {
                .right
                {
                    display: block;
                    font-size: inherit;
                    font-size: 14px;
                    text-align: right;

                    .green
                    {
                        color: green;
                    }
                }
            }

            .left
            {
                font-size: 14px;

                span
                {
                    font-size: 12px;
                    color: #a6a6a6;
                }
            }
            .right
            {
                display: flex;
                align-items: center;

                .status
                {
                    font-size: 16px;
                    color: $theme;
                }
            }
        }
    }
}
</style>