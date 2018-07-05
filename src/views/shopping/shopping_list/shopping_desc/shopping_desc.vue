<template>
    <div class="shopping_desc">
        <v-slider v-if="goods.item_imgs" :images="goods.item_imgs"></v-slider>
        <div class="top" :class="{active: topActive}">
            <span class="left">
                <i class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></i>
            </span>
            <span class="right">
                <router-link :to="{path: '/shopping_cart', query: {back: true}}" class="iconfont icon-gouwuche" tag="i"></router-link>
            </span>
        </div>
        <section class="info">
            <h4 class="title">
                {{goods.title}}
            </h4>
            <div class="price">
                ￥{{goods.price}}
            </div>
            <div class="detailed">
                <span>国内运费：RMB {{goods.express_fee}}</span>
                <span>月销量：{{goods.sales ? goods.sales : 'null'}}</span>
            </div>
        </section>
        <p @click="bombShow" class="select">
            请选择尺码  颜色  分类  款式 <span class="mui-pull-right">></span>
        </p>
        <section v-if="goods.item_imgs" class="shop">
            <div class="mui-card-header mui-card-media">
                <!--<img class="logo" src="./avatar@2x.png" />-->
                <div class="mui-media-body">
                    {{goods.seller_info.title}}
                </div>
            </div>
            <div class="integrated">
                <div>
                    描述相符  <i>{{goods.seller_info.score}}</i>
                </div>
                <div>
                    物流速度<i>{{goods.seller_info.delivery_score}}</i>
                </div>
                <div>
                    商品质量  <i>{{goods.seller_info.item_score}}</i>
                </div>
            </div>
        </section>
        <section class="details">
            <nav class="tab">
                <div class="tab__item">
                    <span class="tab__text" :class="{active: details_show}" @click="details_show = true">图文详情</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text" :class="{active: !details_show}" @click="details_show = false">产品参数</span>
                </div>
            </nav>
            <section v-if="details_show" v-html="details" class="details__item"></section>
            <section v-else class="details__list">
                <ul class="mui-table-view">
                    <li v-for="pro in goods.props" class="mui-table-view-cell">
                        <span>{{pro.name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{pro.value}}
                    </li>
                </ul>
            </section>
        </section>
        <nav class="mui-bar mui-bar-tab">
            <!--<a class="mui-tab-item mui-col-xs-2">-->
                <!--<i class="iconfont icon-xinxi"></i>-->
                <!--<span class="mui-tab-label">客服</span>-->
            <!--</a>-->
            <a @click="goShop" class="mui-tab-item mui-col-xs-2">
                <i class="iconfont icon-dianpu1"></i>
                <span class="mui-tab-label">店铺</span>
            </a>
            <a @click="favorites" class="mui-tab-item mui-col-xs-2">
                <i class="iconfont icon-kongaixin"></i>
                <span class="mui-tab-label">收藏</span>
            </a>
            <a @click="bombShow" class="mui-tab-item mui-col-xs-3 cart">
                <span class="mui-tab-label">加入购物车</span>
            </a>
            <a @click="bombShow" class="mui-tab-item mui-col-xs-3 buy">
                <span class="mui-tab-label">立即购买</span>
            </a>
        </nav>
        <transition enter-active-class="animated bounceInUp"
                    leave-active-class="animated bounceOutDown">
            <div v-if="bomb" class="shopping_bomb">
                <figure class="goods">
                    <img class="goods__img" v-lazy="goods.pic_url" />
                    <figcaption class="goods__wrap">
                        <h4 class="goods__wrap__title">{{goods.title}}</h4>
                        <p class="goods__wrap__description">请选择颜色分类</p>
                    </figcaption>
                    <i  @click="mask.close" class="iconfont icon-guanbi goods__close"></i>
                </figure>
                <div class="wrap">
                    <section class="shopping_bomb__info">
                        <div v-for="pro in props" class="mui-row">
                            {{pro}}<br/>
                            <button v-for="p in propsList"  v-if="p.value.split(':')[0] == pro" :class="{active: p.active}" @click="selectSize(p)" type="button" class="mui-btn size">{{p.value.split(':')[1]}}</button>
                        </div>
                        <div class="mui-row">
                            数量<br />
                            <v-numbox v-model="bombOp.num"></v-numbox>
                        </div>
                        <div class="mui-row">
                            备注<br />
                            <textarea v-model="bombOp.remark" placeholder="如您有需要客服留心的问题或要求，可以在这里进行留言哦~"></textarea>
                        </div>
                    </section>
                    <!--<section class="mui-row shopping_bomb__total">-->
                        <!--<div class="mui-row">-->
                            <!--<div class="mui-pull-left">商品价格</div>-->
                            <!--<div class="mui-pull-right price"><button type="button" class="mui-btn active">修改</button> ￥149.40</div>-->
                        <!--</div>-->
                        <!--<div class="mui-row">-->
                            <!--<div class="mui-pull-left shopping_bomb__total__special">国内运费</div>-->
                            <!--<div class="mui-pull-right price"><button type="button" class="mui-btn active">修改</button>￥149.40</div>-->
                        <!--</div>-->
                        <!--<div class="mui-row">-->
                            <!--<div class="mui-pull-left">国际运费</div>-->
                            <!--<div class="mui-pull-right"><i class="iconfont icon-zhuyi"></i> 另计</div>-->
                        <!--</div>-->
                    <!--</section>-->
                </div>
                <footer @click="buy" class="footer">
                    确定
                </footer>
            </div>
        </transition>
    </div>
</template>

<script>
import vSlider from '@/components/slider/slider';
import vNumbox from '@/components/numbox/numbox';
import {getJSON, postJSON, yesAlert} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vSlider,
        vNumbox
    },
    data()
    {
        return {
            mask: mui.createMask(() =>
            {
                this.bomb = false;
                document.body.style.overflow = '';
            }),
            bomb: false,
            goods: {},
            props: [],
            propsList: [],
            option:
            {
                num_iid: ''
            },
            bombOp:
            {
                num: 1,
                remark: ''
            },
            type: '',
            details: '',
            details_show: true,
            topActive: false
        }
    },
    created()
    {
        this.option.num_iid = this.$route.query.num_iid ? this.$route.query.num_iid : '';
        this.type = this.$route.query.type ? this.$route.query.type : 'TAOBAO';
        this.getDesc();

        window.addEventListener('scroll', this.handleScroll)
    },
    methods:
    {
        getDesc()
        {
            // 判断api1
            let api = this.API[`DETAILS_${this.type}`];
            // 获取api
            mui.getJSON(api, this.option, data =>
            {
                this.goods = data.item;
                // 轮播
                let http = this.type == 'ALIBABA' ? '' : 'http:';
                this.goods.item_imgs = data.item.item_imgs.map(e => {return http + e.url});
                // 详情
                if(data.item.desc != null) this.details = data.item.desc;
                // 颜色、尺码
                if(data.item.props_list)
                {
                    function contains(arr, obj)
                    {
                        var i = arr.length;
                        while (i--)
                        {
                            if (arr[i] === obj)
                            {
                                return true;
                            }
                        }
                        return false;
                    }
                    var pro = '';
                    for(var props in data.item.props_list)
                    {
                        var op ={};
                        op.name = props;
                        op.value = data.item.props_list[props];
                        op.active = false;
                        this.propsList.push(op);
                        if(pro != props.split(':')[0])
                        {
                            var p = data.item.props_list[props].split(':')[0];
                            if(!contains(this.props,p)) this.props.push(p);
                            pro = props.split(':')[0];
                        }
                    }
                }
            });
        },
        handleScroll ()
        {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.topActive =  scrollTop > 60 ? true : false;
        },
        bombShow()
        {
            this.mask.show();
            this.bomb = true;
            document.body.style.overflow = 'hidden';
        },
        selectSize(item)
        {
            let thisStr = item.name.split(':')[0];
            for (var i in this.propsList)
            {
                if (this.propsList[i].name.split(':')[0] == thisStr)
                {
                    this.propsList[i].active = false;
                }
            }
            item.active = true;
        },
        goShop()
        {
            this.$router.push({path: 'shopping_market', query: {href: `http:${this.goods.seller_info.zhuy}`, title: this.goods.seller_info.title}, append: true});
        },
        favorites()
        {
            let userId = localStorage.getItem('userId');
            let options =
            {
                "userId": userId,
                "goodsimg": this.goods.pic_url,
                "goodsurl": this.goods.detail_url,
                "goodsname": this.goods.title,
                "goodsprice": this.goods.price,
                "goodsseller": this.goods.nick,
                "shopName": this.goods.seller_info.title
            }
            postJSON(this.API.FAVORITES_ADD, options, data =>
            {
                if(data.msg) yesAlert('收藏成功!');
            })
        },
        buy()
        {
            let skustr = '';
            for (var i in this.propsList) if (this.propsList[i].active) skustr += this.propsList[i].name;

            let op =
            {
                userId: localStorage.getItem('userId'),
                goodsImg: this.goods.pic_url,
                goodsUrl: this.goods.detail_url,
                goodsName: this.goods.title,
                goodsPrice:	this.goods.price,
                goodsFreight: this.goods.freight,
                goodsSkustr: skustr,
                goodsNumber: this.bombOp.num,
                goodsRemark: this.bombOp.remark,
                // goodsSite: mui.currentWebview.channel,
                goodsSeller: this.goods.nick ? this.goods.nick : this.goods.shop_name,
                shopUrl: this.goods.seller_info.zhuy,
                // shopname: mui.currentWebview.channel,//购买统计渠道
                cid: this.goods.cid//购买统计分类
            }

            postJSON
            (
                this.API.CART_ADD,
                op,
                data =>
                {
                    console.log(data);
                }
            );
        }
    }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
@import "../../../../assets/scss/mixin";
.shopping_desc
{
    padding-bottom: 50px;

    // 渗透子组件
    /deep/ .mui-slider img
    {
        height: auto;
    }
    %mb
    {
        margin-bottom: 10px;
        padding: 5px 10px;
        background: #fff;
    }

    .top
    {
        position: fixed;
        top: 0;
        padding: 12px;
        width: 100%;
        z-index: 1;
        transition: .5s;

        .left, .right
        {
            display: block;
            width: 24px;
            height: 24px;
            padding: 5px;
            font-size: 32px;
            background: #f7f3f2;
            border-radius: 50%;
            color: #f7f3f2;
            z-index: 1;
            opacity: .7;
            box-sizing: content-box;
        }
        .left
        {
            float: left;
        }
        .right
        {
            float: right;

            .icon-gouwuche
            {
                font-size: 24px;
                color: #666666;
            }
        }

        &.active
        {
            background: #f7f3f2;
            opacity: .7;

            .left
            {
                opacity: 1;
            }
        }
    }
    .info
    {
        @extend %mb;

        .title
        {
            color: #333333;
            font-size: 14px;
            font-weight: normal;
        }
        .price
        {
            margin: 10px 0;
            font-size: 18px;
            color: #ff6900;
        }
        .detailed
        {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #666666;
        }
    }
    .select
    {
        color: #333333;
        padding: 10px;
        @extend %mb;
    }
    .evaluation
    {
        @extend %mb;
        .title
        {
            @extend .select;
            margin: 0;
            padding: 10px 0;
            border-bottom: 1px solid #eeeeee;
        }
        .comment
        {
            font-size: 14px;

            figure
            {
                .mui-row
                {

                    img
                    {
                        border-radius: 50%;
                        margin-top: 5px;
                        margin-right: 5px;
                    }
                    i
                    {
                        font-size: 18px;
                    }
                }
                figcaption
                {
                    color: #666666;

                    p
                    {
                        color: #999999;
                        margin-top: 5px;
                    }
                }
            }
            button
            {
                width: 100%;
                border: none;
                border-top: 1px solid #eeeeee;
            }
        }
    }
    .shop
    {
        @extend %mb;

        .logo
        {
            width: 50px;
            height: 50px;
        }
        .mui-card-header:after
        {
            display: none;
        }
        .mui-media-body
        {
            line-height: 1;
            margin-left: 60px;

            p
            {
                padding-top: 20px;
            }
        }
        .integrated
        {
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;

            div
            {
                color: #666666;
                font-size: 12px;

                span
                {
                    padding: 2px;
                    color: #fff;
                    background: $theme;
                }
            }
        }
        .mui-card-footer
        {
            padding: 15px 40px;

            button
            {
                width: 120px;
                height: 40px;
            }
        }
    }


    .mui-bar-tab
    {
        line-height: 20px;
        box-shadow: 0 0 2px #dedede;
        background: #fff;

        .mui-tab-item
        {
            color: #666666;
            border-right: 1px solid #dedede;

            &.cart
            {
                background: #fbdce1;
                color: $theme;
            }
            &.buy
            {
                background: $theme;
                color: #ffffff;
            }

            .mui-tab-label
            {
                font-size: 12px;
                display: block;
            }
            .iconfont
            {
                font-size: 21px;
                margin-bottom: -5px;
            }
        }
        .mui-col-xs-2
        {
            width: 16.66666667% !important;
        }
        .mui-col-xs-3
        {
            width: 30% !important;
        }
    }
    .aside
    {
        display: none;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 20;
        background: #fff;

        %wrap
        {
            padding: 15px 20px;
            border-bottom: 1px solid #eeeeee;

            h6
            {
                color: #333333;
                padding-bottom: 5px;
                margin-left: 5px;
            }
            .mui-btn
            {
                padding: 9px 25px;
                margin: 5px;
            }
        }
        %btn
        {
            border: none;
            background: $theme;
            color: #fff;
        }

        .mui-card-header
        {
            border: none;
            @extend %wrap;

            img
            {
                width: 50px;
                height: 50px;
                margin-right: 15px;
            }
            .price
            {
                color: $theme;
            }
            p
            {
                padding-top: 10px;
                text-indent: 4px;
            }
            .off
            {
                position: absolute;
                right: 15px;
                top: 15px;
                display: block;
                width: 15px;
                height: 15px;
            }
        }
        .color
        {
            @extend %wrap;

            .mui-btn
            {
                @extend %btn;
            }
        }
        .size
        {
            @extend %wrap;
        }
        .number
        {
            @extend %wrap;

            .mui-numbox
            {
                margin-left: 5px;

                .mui-btn
                {
                    padding: 0;
                    margin: 0;
                }
            }
        }
        .confirm
        {
            .mui-btn
            {
                border-radius: 0;
                width: 100%;
                height: 50px;
                font-size: 16px;
                @extend %btn;
            }
        }
    }
    .details
    {
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
    }
}
.shopping_bomb
{
    position: fixed;
    top: 100px;
    z-index: 1000;
    width: 100%;
    height: calc(100% - 100px);
    background: #fff;

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
    .goods
    {
        padding: 15px;

        &__img
        {
            width: 64px;
            height: 64px;
        }
        &__wrap
        {
            width: calc(100% - 105px);

            &__description
            {
                position: absolute;
                bottom: 0;
                margin: 0;
            }
        }
        &__close
        {
            font-size: 21px;
            margin-left: 20px;
        }
    }
    .wrap
    {
        height: 100%;
        padding-bottom: 155px;
        overflow: auto;
    }
    &__info
    {
        padding: 5px 15px;

        .mui-row
        {
            margin-bottom: 5px;
        }
        button
        {
            margin: 10px 10px 10px 0;

            &.active
            {
                background: $theme;
                border-color: $theme;
                color: #fff;
            }
        }
    }
    &__total
    {
        padding: 11px 15px;
        border-top: 1px solid #dedede;

        .mui-row
        {
            margin-bottom: 5px;
            line-height: 28px;

            button
            {
                padding: 3px;

                &.active
                {
                    background: $theme;
                    border-color: $theme;
                    color: #fff;
                }
            }
        }

        &__special
        {
            font-size: 16px;
        }
        &__icon
        {
            width: 14px;
            height: 14px;
            vertical-align: middle;
        }
    }
    textarea, .numbox
    {
        margin: 10px 0 0;
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
<style>
    .details__item img, .details__item table
    {
        width: 100%;
    }
</style>