<template>
    <div class="address">
        <v-header title="地址管理"></v-header>
        <div class="mui-content">
            <div class="plus">
                <section v-for="item in list" class="address__item">
                    <div class="address__main">
                        <div class="address__user">
                            <span>{{item.uname}}</span>
                            <span>{{item.tel}}</span>
                        </div>
                        <div class="address__address">{{item.CountryName + ' ' + item.city + ' ' + item.address}}</div>
                        <div class="address__mailCode">邮编：{{item.zip}}</div>
                    </div>
                    <div class="address__footer">
                        <div @click="setDefault(!!Number(item.def), item.aid)" class="address__default active">
                            <v-checkbox :checked="!!Number(item.def)"></v-checkbox> 默认地址
                        </div>
                        <div class="address__control">
                            <router-link :to="{path: 'add_address', query: {edit: item}}" tag="span" append>
                                <i class="iconfont icon-bianji"></i> 编辑
                            </router-link>
                            <span @click="del(item.aid)">
                                <i class="iconfont icon-shanchu"></i> 删除
                            </span>
                        </div>
                    </div>
                </section>
                <v-no_data v-if="!list" icon="icon-address" text="您还没有收货地址"></v-no_data>
            </div>
        </div>
        <router-link to="add_address" tag="footer" class="footer" append>
            新增收货地址
        </router-link>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vCheckbox from '@/components/checkbox/checkbox';
import vNo_data from '@/components/no_data/no_data';
import {getJSON, postJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader,
        vCheckbox,
        vNo_data
    },
    data()
    {
        return {
            list: [],
            userId: localStorage.getItem('userId')
        }
    },
    created()
    {
        this.getList()
    },
    methods:
    {
        getList()
        {
            postJSON
            (
                this.API.ADDRESS_LIST,
                {userId: this.userId},
                data =>
                {
                    this.list = data.list;
                }
            );
        },
        setDefault(flag, aid)
        {
            if (!flag)
            {
                getJSON
                (
                    this.API.ADDRESS_DEFAULT,
                    {
                        userId: this.userId,
                        addressId: aid
                    },
                    data =>
                    {
                        if (data.msg) this.getList();
                    }
                );
            }
        },
        del(aid)
        {
            postJSON
            (
                this.API.ADDRESS_DEL,
                {
                    userId: this.userId,
                    addressId: aid
                },
                data =>
                {
                    this.getList()
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.address
{
    .mui-content
    {
        bottom: 50px;
    }
    &__item
    {
        padding: 12px;
        background: #fff;
        margin-bottom: 10px;
    }
    &__main
    {
        font-size: 14px;
        line-height: 24px;
        padding-bottom: 10px;
    }
    &__user
    {
        display: flex;
        justify-content: space-between;
    }
    &__footer
    {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        padding-top: 12px;
        border-top: 1px solid #eeeeee;

        .icon
        {
            width: 21px;
            height: 21px;
            vertical-align: middle;
        }
    }
    &__default
    {
        &.active
        {
            color: $theme;
        }
        label
        {
            vertical-align: sub;
        }
    }
    &__control
    {
        span
        {
            margin-left: 10px;

            i
            {
                vertical-align: middle;
            }
        }
    }
    .footer
    {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        z-index: 999;
        font-size: 18px;
        text-align: center;
        background: $theme;
        color: #fff;
    }
}
</style>