<template>
    <div class="calculation">
        <v-header title="运费试算"></v-header>
        <div class="mui-content">
            <section class="form">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="ps">目的国家</span>
                            <select v-model="options.country">
                                <option :value="item.region_id" v-for="item in list">{{item.region_name}}</option>
                            </select>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="ps">商品价格</span>
                        <span><input type="text" v-model="options.price" /><span class="ps right">RMB</span></span>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="ps">商品重量</span>
                        <span><input type="text" v-model="options.weight" /><span class="ps right">g</span></span>
                    </li>
                </ul>
                <button @click="calc" class="calc">估算</button>
            </section>

            <section class="results">
                <h4 class="results__title">估算结果</h4>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        目的国家：新加坡
                    </li>
                    <li class="mui-table-view-cell">
                        商品价格(￥)：58&nbsp;&nbsp;&nbsp;&nbsp;服务费(￥)：2.32<br />
                        定制费(￥)：1.00 &nbsp;&nbsp;&nbsp;&nbsp;运费(￥)：5000
                    </li>
                    <li class="mui-table-view-cell">
                        总计(￥)：<span class="price">5061.32 = (null)712.86</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {getJSON, postJSON} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            list: [],
            result: {},
            options:
            {
                price: '',
                weight: '',
                volume: '',
                country: '',
                deliveryType: 1
            }
        }
    },
    created()
    {
        getJSON
        (
            this.API.ADDRESS_GETREGIONSNAME,
            {},
            data =>
            {
                this.list = data.list;
            }
        );
    },
    methods:
    {
        calc()
        {
            postJSON
            (
                this.API.OTHER_ESTIMATES,
                this.options,
                data =>
                {
                    this.result = data.list;
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.calculation
{
    input, select
    {
        margin: 0;
        padding-top: 0;
        padding-bottom: 0;
        width: 200px;
        height: 21px;
        border: none;
        text-align: right;
    }
    select
    {
        padding: 0;
    }
    .price
    {
        color: #ff6900;
    }
    .calc
    {
        display: block;
        width: 90%;
        margin: 10px auto;
        height: 45px;
        border: none;
        border-radius: 5px;
        background: $theme;
        color: #fff;
    }
    .mui-content > .mui-table-view:first-child
    {
        margin-top: 0;
    }
    .form
    {
        .mui-table-view-cell
        {
            display: flex;
            justify-content: space-between;
            font-size: 14px;

            &.mui-active
            {
                background: #fff;
            }
            &::after
            {
                right: 15px;
            }
            .mui-navigate-right
            {
                display: flex;
                justify-content: space-between;
                width: 100%;
                font-size: 14px;
                padding-right: 35px;
                box-sizing: content-box;

                &.mui-active
                {
                    background: #fff;
                }
            }
            .ps
            {
                color: #666666;
            }
            .right
            {
                margin-left: 15px;
            }
            &.radio
            {
                justify-content: center;

                & > div
                {
                    &:first-child
                    {
                        margin-right: 10px;
                    }

                    label
                    {
                        vertical-align: middle;
                        margin-right: 7px;
                    }
                }
            }
        }
    }
    .results
    {
        &__title
        {
            padding: 7px 15px;
            margin: 0;
            font-weight: normal;
            font-size: 12px;
        }
        .mui-table-view-cell
        {
            font-size: 14px;

            &::after
            {
                right: 15px;
            }
        }
    }
}
</style>