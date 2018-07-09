<template>
    <div class="shopping_cart">
        <v-header title="购物车" :backShow="back">
            <div class="shopping_cart__right">
                <span @click="edit = !edit">{{!edit ? '编辑' : '完成'}}</span>
                <i class="iconfont icon-xinxi"></i>
            </div>
        </v-header>
        <section v-for="item in goodList" class="shopping_cart__list">
            <h4 class="shopping_cart__list__subtotal">
                <v-checkbox v-model="item.checked" @change="checkShop"></v-checkbox>
                {{item.goodsseller}}
            </h4>
            <ul>
                <li v-for="i in item.goods" class="shopping_cart__list__main" :style="{transform: 'translateX('+ i.slide +')'}" @swipeleft="slide(i, true)" @swiperight="slide(i, false)">
                    <div class="shopping_cart__list__main__wrap">
                        <div class="shopping_cart__list__main__wrap__100">
                            <div class="shopping_cart__list__main__wrap__checkbox">
                                <v-checkbox v-model="i.checked" @change="check()"></v-checkbox>
                            </div>
                            <figure class="goods">
                                <img class="goods__img" v-lazy="i.goodsimg" />
                                <figcaption class="goods__wrap">
                                    <h4 class="goods__wrap__title">
                                        {{i.goodsname}}
                                    </h4>
                                    <p class="goods__wrap__description">{{i.option}}</p>
                                    <div class="goods__wrap__priceAndnumber">
                                        <span class="price">￥{{i.goodsprice}}</span>
                                        <span class="mui-pull-right">x{{i.goodsnum}}</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div ref="width" @click="del(i.gid)" class="shopping_cart__list__main__wrap__del">
                            <i class="iconfont icon-shanchu"></i><br />
                            删除
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        <v-no_data v-if="!goodList.length" icon="icon-gouwuche" text="购物车空空如也"></v-no_data>
        <footer class="shopping_cart__info">
            <div class="shopping_cart__info__all">
                <v-checkbox v-model="allChecked" @change="checkAll"></v-checkbox> 全选
            </div>
            <template v-if="!edit">
                <div class="shopping_cart__info__totalPrice">
                    合计：<span class="price">￥{{totalPrice}}</span>
                </div>
                <router-link :to="{path: 'clearing', query: {cartIds: ids}}" tag="span" class="shopping_cart__info__submit" append>
                    去结算({{goodLength}})
                </router-link>
            </template>
            <div v-else class="shopping_cart__info__btns">
                <button @click="favorite" type="button" class="mui-btn">收藏</button><button @click="del" type="button" class="mui-btn">删除</button>
            </div>
        </footer>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vFooter from '@/components/footer/footer';
import vNo_data from '@/components/no_data/no_data';
import vCheckbox from '@/components/checkbox/checkbox';
import {getJSON, postJSON, yesAlert, confirm} from '@/assets/js/common';  //公共函数库


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
            back: this.$route.query.back,
            edit: false,
            userId: localStorage.getItem('userId'),
            goodList: [],
            allChecked: false,
            ids: [],
            totalPrice: 0
        }
    },
    computed:
    {
        goodLength()
        {
            let length = 0,
                goodsNum = 0;
            this.ids = [];
            this.totalPrice = 0;
            for (let i in this.goodList)
            {
                for (let j in this.goodList[i].goods)
                {
                    if (this.goodList[i].goods[j].checked)
                    {
                        // 选中的id
                        this.ids.push(this.goodList[i].goods[j].gid);
                        // 总价
                        this.totalPrice += this.goodList[i].goods[j].goodsnum * this.goodList[i].goods[j].goodsprice;
                        // 数量
                        length++;
                    }
                    goodsNum++;
                }
            }
            // 全选
            this.allChecked = length == goodsNum ? true : false;
            return length;
        }
    },
    created()
    {
        this.getCart();
    },
    methods:
    {
        getCart()
        {
            getJSON
            (
                this.API.CART_LIST,
                {
                    'userId': this.userId
                },
                data =>
                {
                    this.goodList = data.list;
                    for (let i in this.goodList)
                    {
                        this.$set(this.goodList[i], 'checked', false);

                        for (let j in this.goodList[i].goods)
                        {
                            this.$set(this.goodList[i].goods[j], 'checked', false);
                            this.$set(this.goodList[i].goods[j], 'slide', '');
                        }
                    }
                }
            );
        },
        check()
        {
            for (let i in this.goodList)
            {
                let goodsL = this.goodList[i].goods.length,
                    num = 0;
                for (let j in this.goodList[i].goods) if (this.goodList[i].goods[j].checked) num++;
                this.goodList[i].checked =  num == goodsL ? true : false;
            }
        },
        checkShop()
        {
            for (let i in this.goodList)
            {
                for (let j in this.goodList[i].goods) this.goodList[i].goods[j].checked = this.goodList[i].checked ?  true : false;
            }
        },
        checkAll()
        {
            for (let i in this.goodList) this.goodList[i].checked = this.allChecked ? true : false;
            this.checkShop();
        },
        slide(el, flag)
        {
            el.slide = flag ? '-' + this.$refs.width[0].clientWidth + 'px' : 0;
        },
        del(id)
        {
            confirm(undefined, data =>
            {
                if (data.index)
                {
                    postJSON
                    (
                        this.API.CART_DEL,
                        {
                            userId: this.userId,
                            cartId: id ? id : this.ids
                        },
                        data =>
                        {
                            if (data.msg)
                            {
                                yesAlert('删除成功！', data =>
                                {
                                    this.goodList = [];
                                    this.getCart();
                                });
                            }
                        }
                    )
                }
            })

        },
        favorite()
        {
            postJSON
            (
                this.API.CART_MOVE_FAVORITE,
                {
                    userId: this.userId,
                    cartIds: this.ids
                },
                data =>
                {
                    if(data.msg) yesAlert('CollectionSuccess！');
                }
            );
        }
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
        margin-top: 10px;
        width: 100%;
        overflow: hidden;
        background: #fff;

        &:first-of-type
        {
            margin-top: 44px;
        }
        &:last-of-type
        {
            margin-bottom: 100px;
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
                &__checkbox
                {
                    margin-right: 15px;
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
        &__btns
        {
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            height: 100%;

            .mui-btn
            {
                width: 50%;
                height: 100%;
                border-radius: 0;
                border: none;

                &:first-child
                {
                    background: #ffac4a;
                    color: #fff;
                }
                &:last-child
                {
                    background: $theme;
                    color: #fff;
                }
            }
        }
    }
}
</style>