<template>
    <div class="shopping_list">
        <v-search icon="icon-msnui-more">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        </v-search>
        <nav class="tab">
            <div class="tab__item">
                <span class="tab__text active">综合</span>
            </div>
            <div class="tab__item">
                <span class="tab__text">销量</span>
            </div>
            <div class="tab__item">
                <span class="tab__text">价格<i class="mui-icon mui-icon-arrowthinup"></i></span>
            </div>
            <div class="tab__item">
                <span class="tab__text">价格<i class="mui-icon mui-icon-arrowthindown"></i></span>
            </div>
            <div class="tab__item">
                <span class="tab__text"><i class="iconfont icon-shaixuan"></i>筛选</span>
            </div>
        </nav>
        <div class="mui-content">
            <div v-for="item in shopping_list" class="mui-table-view mui-table-view-chevron mui-row" :class="{ 'shopping--grid': lay == 'grid', 'shopping--list': lay == 'list' }">
                <div :class="{ 'mui-col-xs-6': lay == 'grid', 'mui-col-xs-12': lay == 'list' }">
                    <img class="shopping__img" v-lazy="item.pic_url" />
                    <div class="shopping__info">
                        <h4 class="shopping__info__name">{{item.name}}</h4>
                        <div class="mui-row">
                            <span class="mui-pull-left shopping__info__shop_name">皇宫婚纱</span>
                            <span class="mui-pull-right shopping__info__shop_address">广州</span>
                        </div>
                        <p class="mui-pull-left price">￥495.9</p>
                        <p class="mui-pull-right"></p>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="cover"></div>-->
        <!--<div class="filter">-->
            <!--<section class="type">-->
                <!--<h4 class="type__title">相关分类</h4>-->
                <!--<div class="type__wrap">-->
                    <!--<span>小西装</span>-->
                    <!--<span>小西装</span>-->
                    <!--<span>小西装</span>-->
                    <!--<span>小西装</span>-->
                    <!--<span>小西装</span>-->
                    <!--<span>小西装</span>-->
                <!--</div>-->
            <!--</section>-->
            <!--<section class="shopping_bomb__info">-->
                <!--<div class="mui-row">-->
                    <!--1<br />-->
                    <!--<button type="button" class="mui-btn">2</button>-->
                    <!--<button type="button" class="mui-btn">2</button>-->
                    <!--<button type="button" class="mui-btn">2</button>-->
                    <!--<button type="button" class="mui-btn">2</button>-->
                <!--</div>-->
            <!--</section>-->
            <!--<section class="price_spacing">-->
                <!--<h4 class="price_spacing__title">价格区间</h4>-->
                <!--<div class="price_spacing__wrap">-->
                    <!--<input type="text" placeholder="最低价"> —— <input type="text" placeholder="最高价">-->
                <!--</div>-->
            <!--</section>-->
            <!--<section class="fixed">-->
                <!--<div>重置</div>-->
                <!--<div>完成</div>-->
            <!--</section>-->
        <!--</div>-->
    </div>
</template>

<script>
import vSearch from '@/components/search/search';
import {getJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vSearch
    },
    data()
    {
        return {
            lay: 'grid',
            shopping_list: [],
            option:
            {
                q: '',
                cat: 0,
                page: 1,
                page_size: 6,
                lang: 'cn',
                key: "test_api_key"
            }
        }
    },
    created()
    {
        this.option.q = this.$route.query.query;
        this.getShoppingList();
    },
    methods:
    {
        getShoppingList()
        {
            mui.getJSON(this.API.SEARCH_TAOBAO, this.option, data => this.shopping_list = data.items.item);
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.shopping_list
{
    .mui-action-back
    {
        margin-left: -10px;
        font-size: 30px;
        color: #fff;
    }
    .mui-content
    {
        top: 88px;
    }
    .mui-content>.mui-table-view:first-child
    {
        margin-top: 0;
    }
    .search
    {
        position: fixed;
        top: 0;
        display: flex;
        width: 100%;
        z-index: 10;
        padding: 7px 12.5px;
        background: $theme;

        &__main
        {
            flex: 1;
            position: relative;

            .icon-sousuo1, .icon-xiangji
            {
                position: absolute;
                top: 0;
                line-height: 30px;
                color: $theme;
                font-size: 20px;
            }
            .icon-sousuo1
            {
                left: 5px;
            }
            .icon-xiangji
            {
                right: 5px;
            }
        }
        &__text
        {
            margin: 0;
            height: 30px;
            line-height: 30px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            text-indent: 30px;
            color: #c7c7ca;
            background: #fff;
        }
        .icon-msnui-more
        {
            color: #fff;
            font-size: 25px;
            line-height: 30px;
            margin-left: 9px;
        }
    }
    .tab
    {
        position: fixed;
        top: 44px;
        display: flex;
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #cfcfcf;
        background: #fff;
        z-index: 1000;

        &__item
        {
            flex: 1;
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
.shopping
{
    &--grid
    {
        .mui-col-xs-6
        {
            margin-bottom: 5px;
            background: #ffffff;

            &:nth-child(2n)
            {
                border-left: 2px solid #efefef;
            }
            &:nth-child(2n + 1)
            {
                border-right: 2px solid #efefef;
            }
        }

        .shopping
        {
            &__img
            {
                max-width: 100%;
                height: 200px;
            }
            &__info
            {
                padding: 0 6px;

                &__name
                {
                    font-weight: normal;
                    font-size: 16px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                &__shop_name, &__shop_address
                {
                    color: #9d9d9d;
                    font-size: 12px;
                }
                .price
                {
                    font-size: 16px;
                    color: #ff6900;
                }
            }
        }

    }
    &--list
    {
        .mui-col-xs-12
        {
            background: #ffffff;
        }

        .shopping
        {
            &__img
            {
                width: 110px;
                height: 110px;
            }
            &__info
            {
                float: right;
                width: 68%;
                height: 120px;
                padding: 7px;
                border-bottom: 1px solid #eeeeee;

                &__name
                {
                    font-size: 14px;
                    font-weight: normal;
                    margin-bottom: 15px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    height: 30px;
                }
                &__shop_name, &__shop_address
                {
                    color: #9d9d9d;
                    font-size: 12px;
                }
                &__shop_address
                {
                    float: right;
                }

                .price
                {
                    font-size: 20px;
                    padding: 5px 0;
                }
            }
        }
    }
}
.filter
{
    position: absolute;
    right: 0;
    width: 80%;
    min-height: 100vh;
    background: #ffffff;
    z-index: 1001;
    padding-bottom: 50px;

    %thisTitle
    {
        font-size: 14px;
        color: #666666;
        margin-bottom: 10px;
    }

    .type
    {
        padding: 7px;
        border-bottom: 1px solid #efefef;

        &__title
        {
            @extend %thisTitle;
        }
        &__wrap
        {
            display: flex;
            flex-wrap: wrap;

            span
            {
                font-size: 13px;
                padding: 5px 10px;
                background: #efefef;
                border-radius: 5px;
                margin: 0 10px 10px 0;
            }
        }
    }

    .price_spacing
    {
        padding: 7px;
        border-bottom: 1px solid #efefef;

        &__title
        {
            @extend %thisTitle;
        }
        &__wrap
        {
            display: flex;
            justify-content: space-between;
            line-height: 30px;

            input
            {
                width: 120px;
                height: 30px;
                padding: 0;
                font-size: 14px;
                text-indent: 10px;
                vertical-align: middle;
                margin: 0;
            }
        }
    }

    .fixed
    {
        position: fixed;
        bottom: 0;
        width: 80%;
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;

        div
        {
            width: 50%;
            text-align: center;
            font-size: 18px;

            &:first-child
            {
                background: #fbdce1;
                color: $theme;
            }
            &:last-child
            {
                background: $theme;
                color: #fff;
            }
        }
    }
}
.cover
{
    z-index: 1000;
}
</style>