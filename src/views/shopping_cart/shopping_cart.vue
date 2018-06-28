<template>
    <div class="shopping_cart">
        <v-header title="购物车" :backShow="back">
            <div class="shopping_cart__right">
                <span>编辑</span>
                <i class="iconfont icon-xinxi"></i>
            </div>
        </v-header>
        <section class="shopping_cart__list">
            <h4 class="shopping_cart__list__subtotal">
                <v-checkbox></v-checkbox>
                皇宫婚纱旗舰店<span class="shopping_cart__list__subtotal__price">国内运费: <span class="shopping_cart__list__subtotal__price__number">￥10.00</span></span>
            </h4>
            <ul>
                <li class="shopping_cart__list__main">
                    <div class="shopping_cart__list__main__wrap">
                        <div class="shopping_cart__list__main__wrap__100">
                            <div class="shopping_cart__list__main__wrap__checkbox">
                                <v-checkbox></v-checkbox>
                            </div>
                            <figure class="goods">
                                <img class="goods__img" src="./avatar@2x.png"/>
                                <figcaption class="goods__wrap">
                                    <h4 class="goods__wrap__title">
                                        春夏新款韩式公主抹胸显瘦蓬蓬裙小拖
                                        尾新娘婚纱礼服
                                    </h4>
                                    <p class="goods__wrap__description">颜色：白色；尺码：L</p>
                                    <div class="goods__wrap__priceAndnumber">
                                        <span class="price">￥495.9</span>
                                        <span class="mui-pull-right">x1</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="shopping_cart__list__main__wrap__del">
                            <i class="iconfont icon-shanchu"></i><br />
                            删除
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        <!--<v-no_data icon="icon-gouwuche" text="购物车空空如也"></v-no_data>-->
        <footer class="shopping_cart__info">
            <div class="shopping_cart__info__all">
                <v-checkbox></v-checkbox>
            </div>
            <div class="shopping_cart__info__totalPrice">
                合计：<span class="price">￥￥784.8</span>
            </div>
            <span class="shopping_cart__info__submit">去结算(2)</span>
        </footer>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vFooter from '@/components/footer/footer';
import vNo_data from '@/components/no_data/no_data';
import vCheckbox from '@/components/checkbox/checkbox';

export default
{
    components:
    {
        vHeader,
        vFooter,
        vNo_data,
        vCheckbox
    },
    data()
    {
        return {
            back: false
        }
    },
    created()
    {
        this.back = this.$route.query.back ? true : false;
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/parameter";
@import "../../assets/scss/mixin";

ul
{
    list-style: none;
    padding: 0;
    margin: 0;
}
.shopping_cart
{
    .price
    {
        color: #ff6900;
    }
    &__right
    {
        position: absolute;
        z-index: 999;
        right: 0;
        padding: 11px;
        font-size: 16px;
        color: #666666;

        .iconfont
        {
            margin-left: 20px;
            font-size: 22px;
        }
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
                @include line-omitted;
            }
            &__description
            {
                @include line-omitted;
            }
            &__priceAndnumber
            {
                width: 100%;
                position: absolute;
                bottom: -5px;
            }
        }
    }
    &__title
    {
        &__right
        {
            position: absolute;
            right: 10px;
            height: 44px;
            line-height: 44px;

            &__edit
            {
                font-size: 16px;
                color: #666666;
            }
            &__message
            {
                width: 21px;
                height: 21px;
                vertical-align: sub;
                margin-left: 32px;
            }
        }
    }
    &__list
    {
        width: 100%;
        overflow: hidden;
        background: #fff;

        &:first-of-type
        {
            margin-top: 44px;
        }
        label
        {
            margin-right: 15px;
        }

        &__subtotal
        {
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            color: #333333;
            font-weight: normal;
            border-bottom: 1px solid #f0f0f0;
            padding: 0 10px;
            margin: 0;

            &__label
            {
                vertical-align: middle;
            }

            &__price
            {
                float: right;
                color: #9c9c9c;
                font-size: 12px;

                &__number
                {
                    color: #ff6900;
                }
            }
        }
        &__main
        {
            border-bottom: 1px solid #f0f0f0;
            transition: transform .2s;

            &:last-child
            {
                border: none;
            }
            &__wrap
            {
                display: flex;
                width: calc(100% + 73.5px);

                .goods
                {
                    padding-bottom: 0;
                    margin-bottom: 0;
                    border-bottom: none;
                }
                &__100
                {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 10px;
                }
                &__del
                {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 73.5px;
                    flex: none;
                    background: $theme;
                    color: #fff;
                    font-size: 14px;

                    .icon-shanchu
                    {
                        font-size: 22px;
                        margin-bottom: 5px;
                    }
                }
            }
        }

    }
    &__info
    {
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 50px;
        width: 100%;
        height: 44px;
        background: #fff;
        padding: 10px;
        padding-right: 114.5px;

        &__all
        {
            font-size: 15px;

            label
            {
                vertical-align: sub;
                margin-right: 5px;
            }
        }
        &__totalPrice
        {
            font-size: 13px;
            color: #666666;

            .price
            {
                font-size: 15px;
            }
        }
        &__submit
        {
            position: absolute;
            top: 0;
            right: 0;
            background: $theme;
            width: 100px;
            height: 100%;
            line-height: 44px;
            font-size: 16px;
            color: #fff;
            text-align: center;
        }
    }
}
</style>