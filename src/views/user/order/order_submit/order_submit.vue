<template>
    <div class="order_submit">
        <v-header title="提交运单"></v-header>
        <div class="mui-content">
            <section class="basic_info">
                <div class="basic_info__receipt">
                    <span>收货人: MS WONG</span>
                    <span>0122205768</span>
                </div>
                <div>国家: 马来西亚 - 西马</div>
                <div>地址: Lot PT 3467, Jalan 6/3, Kawasan
                    Perusahaan Seri Kembangan, 43300 Seri
                    Kembangan, Selangor</div>
                <div>邮编: 43300</div>
            </section>
            <section class="goods_info">
                <figure class="goods">
                    <img class="goods__img" src="./avatar@2x.png"/>
                    <figcaption class="goods__wrap">
                        <h4 class="goods__wrap__title">
                            蕾丝送吊带2017春夏新款韩版直筒
                        </h4>
                        <p class="goods__wrap__description">颜色:白色; 尺码:S</p>
                        <div class="goods__wrap__priceAndnumber">
                            <span class="price">￥149.40</span>
                            <span class="mui-pull-right">x1</span>
                        </div>
                    </figcaption>
                </figure>
            </section>
            <section class="ps">
                1.上面的重量是物品的实际重量，不包括包装材料的重量<br />
                2.包裹的实际重量会改变，当我们打包好以后<br />
                3.如果你选择 dhl ,fedex,6ls-express,aramex 等其他快
                递 , 要计算体积重量:长 X 宽 X 高 cm/5000,体积重量与物理重量
                按大的计算运费
            </section>
            <section class="list">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">选择物流</span>
                            <span>DHL</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">优惠券</span>
                            <span>
                                <select style="margin: 0;padding: 0;background: transparent;">
                                    <option>3元运费抵扣券 ￥3.00</option>
                                </select>
                            </span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">服务费</span>
                            <span class="price">￥5.00</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">运费</span>
                            <span class="price">￥55.00</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">运费折扣</span>
                            <span class="green">￥5.00</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">商品包装</span>
                            <span>
                                真空包装 <i class="iconfont icon-wentiquestions1"></i>
                                <input type="checkbox">
                            </span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">拍照服务</span>
                            <span>
                                拍照 <i class="iconfont icon-wentiquestions1"></i>
                                <input type="checkbox">
                            </span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">运费险</span>
                            <span>商品价格的2%
                                <span class="price">￥50</span>
                                <input type="checkbox">
                            </span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell zhus">
                        <span class="description">商品备注</span>
                        <input id="remark" class="text" type="text" placeholder="选填：填写对本次交易的说明等" />
                    </li>
                </ul>
            </section>
        </div>
        <footer class="submit">
            共￥149.40件商品，总计  <span class="price">￥149.40</span> <button>前往付款</button>
        </footer>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {postJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader,
    },
    data()
    {
        return {
            options:
            {
                userId: localStorage.getItem('userId'),
                orderIds: this.$route.query.orderIds
            }
        }
    },
    created()
    {
        this.getGoods()
    },
    methods:
    {
        getGoods()
        {
            postJSON
            (
                this.API.ORDER_PAYMENT,
                {
                    userId: this.options.userId,
                    orderIds: this.options.orderIds
                },
                data =>
                {
                    console.log(data)
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
.order_submit
{
    .mui-content
    {
        bottom: 50px;
    }
    .goods
    {
        display: flex;
        padding-bottom: 20px;
        margin-bottom: 10px;
        border-bottom: 1px solid #eeeeee;

        &__img
        {
            width: 105px;
            height: 105px;
            flex-shrink: 0;
            margin-right: 10px;
        }
        &__wrap
        {
            width: calc(100% - 120px);
            position: relative;

            &__title
            {
                color: #000000;
                font-size: 16px;
                font-weight: normal;
                margin-top: -4px;
                line-height: normal;
            }
            &__priceAndnumber
            {
                width: 100%;
                position: absolute;
                bottom: -5px;
            }
        }
    }
    .price
    {
        color: #ff6900;
    }
    padding-bottom: 60px;

    .description
    {
        color: #666666;
        font-size: 14px;
    }
    .green
    {
        color: #14d195;
    }
    .basic_info
    {
        font-size: 14px;
        padding: 12px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;

        &__receipt
        {
            display: flex;
            justify-content: space-between;
        }
        &__icon
        {
            width: 14px;
            height: 14px;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .goods_info
    {
        background: #fff;
        padding: 12px;

        .goods
        {
            padding-bottom: 10px;

            &__img
            {
                width: 65px;
                height: 65px;
            }
            &__wrap
            {
                width: calc(100% - 75px);

                &__title
                {
                    -webkit-line-clamp: 1;
                }
                &__description
                {
                    margin: 0;
                }
                &__priceAndnumber
                {
                    bottom: 0;
                }
            }
        }
        &__weight
        {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }
    }
    .ps
    {
        padding: 12px;
        font-size: 12px;
    }
    .list
    {
        .mui-table-view-cell
        {
            &::after
            {
                right: 15px;
            }
            .mui-navigate-right
            {
                display: flex;
                justify-content: space-between;
                padding-right: 35px;
                font-size: 14px;
            }
        }
        .icon
        {
            width: 16px;
            height: 16px;
            vertical-align: sub;
        }
        .zhus
        {
            display: flex;

            .description
            {
                width: 80px;
            }
            .text
            {
                height: auto;
                border: none;
                padding: 0;
                font-size: 14px;
                margin: 0;
                background: transparent;
                line-height: 1;
            }
        }
    }
    .submit
    {
        position: fixed;
        bottom: 0;
        padding: 12px;
        width: 100%;
        height: 50px;
        font-size: 12px;
        color: #666666;
        background: #fff;

        .price
        {
            font-size: 16px;
        }
        button
        {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100%;
            background: $theme;
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 0;
        }
    }
}
</style>